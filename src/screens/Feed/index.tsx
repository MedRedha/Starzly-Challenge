// @ts-nocheck
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  ActivityIndicator,
  Dimensions,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from './style';
import Video from 'react-native-video';
import Colors from '../../theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShortHeader from '../../components/ShortHeader';
import ShortSideBar from '../../components/ShortSideBar';
import ShortCard from '../../components/ShortCard';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CartBottomSheet from '../../components/CartBottomSheet';
import CustomBackdrop from '../../components/CustomBackdrop';
import FadeInOut from '../../components/FadeInOut';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UnmuteIcon from 'react-native-vector-icons/Octicons';
import LottieView from 'lottie-react-native';
import axios from 'axios';

interface Props {
  setBadgeNum?: (number) => void;
  setBadge?: (boolean) => void;
  number?: number;
}

const Feed: React.FC<Props> = ({ setBadgeNum, setBadge, number }) => {
  const videoRef = useRef();
  const likeRef = useRef();
  const theme = useColorScheme();
  const width = Dimensions.get('window').width;
  const baseUrl = 'https://stg.starzly.io/api/';
  const height = Dimensions.get('window').height;
  const [playIndex, setPlayIndex] = useState<Number>(0);
  const [isMuted, setIsMuted] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isManuallyPaused, setIsManuallyPaused] = useState<Boolean>(false);
  const [videos, setVideos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('media');
  const [limit] = useState(10);

  const fetchData = async (limit) => {
    const url = `${baseUrl}featured-videos?page=1&per_page=${limit}&app=1&new=1`;
    const { data } = await axios.get(url);
    setTimeout(() => setVideos(data.data), 1500);
  };

  useEffect(async () => {
    await fetchData(limit);
  }, []);

  const snapPoints = useMemo(() => ['25%', '75%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleAnimation = (timing) => {
    likeRef?.current?.play();
    setVisible(true);
    setTimeout(() => setVisible(false), timing);
  };

  const handlePlayPause = () => {
    setType('media');
    setIsManuallyPaused(!isManuallyPaused);
    handleAnimation(500);
  };

  return (
    <>
      {videos?.length <= 0 ? (
        <View style={styles.loadingContainer}>
          <ShortSideBar setIsMuted={setIsMuted} muted={isMuted} />
          <ShortCard onAddToCartPress={handlePresentModalPress} />
          <ActivityIndicator
            style={styles.loading}
            color='white'
            size='large'
          />
        </View>
      ) : (
        <Carousel
          data={videos}
          loop={false}
          width={width}
          height={height}
          vertical={true}
          windowSize={10}
          autoPlay={false}
          onSnapToItem={(index) => {
            setPlayIndex(index);
            setIsManuallyPaused(false);
          }}
          style={{ ...styles.carousel, backgroundColor: Colors[theme].primary }}
          scrollAnimationDuration={1000}
          renderItem={({ index, item }) => (
            <>
              <TouchableWithoutFeedback onPress={() => handlePlayPause()}>
                <View style={styles.invisibleTouch}></View>
              </TouchableWithoutFeedback>
              <FadeInOut visible={visible} style={styles.fadeInOut}>
                {type === 'like' ? (
                  <LottieView
                    speed={2}
                    ref={likeRef}
                    loop={false}
                    autoPlay={true}
                    source={require('./../../assets/animation/Love.json')}
                    style={{
                      ...styles.lottie,
                      display: visible ? 'flex' : 'none',
                    }}
                  />
                ) : type === 'media' ? (
                  <Icon
                    size={100}
                    color='white'
                    name={isManuallyPaused ? 'pause' : 'play'}
                    style={{ opacity: 0.9 }}
                  />
                ) : isMuted ? (
                  <Icon
                    size={100}
                    color='white'
                    name={'volume-mute'}
                    style={{ opacity: 0.7 }}
                  />
                ) : (
                  <UnmuteIcon
                    size={100}
                    color='white'
                    name={'unmute'}
                    style={{ opacity: 0.7 }}
                  />
                )}
              </FadeInOut>
              <Video
                repeat
                ref={videoRef}
                muted={isMuted}
                source={{
                  uri: item?.url,
                }}
                resizeMode='cover'
                onLoad={() => setIsLoading(false)}
                style={styles.short}
                playInBackground={true}
                paused={index !== playIndex || isManuallyPaused}>
                <SafeAreaView
                  style={{
                    zIndex: 1,
                    paddingVertical: 14,
                  }}>
                  <ShortHeader
                    title={item?.occasion?.title_en}
                    emoji={item?.occasion?.image_emojy}
                  />
                  {isLoading && (
                    <ActivityIndicator
                      size='large'
                      color='white'
                      style={styles.loading}
                    />
                  )}
                  <ShortSideBar
                    muted={isMuted}
                    setType={setType}
                    likeRef={likeRef}
                    setIsMuted={setIsMuted}
                    avatar={item?.talent?.avatar_url}
                    handleAnimation={handleAnimation}
                  />
                  <ShortCard
                    product={item?.talent}
                    onAddToCartPress={handlePresentModalPress}
                    setBadge={setBadge}
                    setBadgeNum={setBadgeNum}
                    number={number}
                  />
                </SafeAreaView>
                <BottomSheetModal
                  index={1}
                  backdropComponent={() => (
                    <CustomBackdrop onBackdropPress={handleCloseModalPress} />
                  )}
                  snapPoints={snapPoints}
                  ref={bottomSheetModalRef}
                  style={styles.bottomSheet}
                  handleStyle={{ display: 'none' }}>
                  <CartBottomSheet
                    talent={item?.talent}
                    onClosePress={handleCloseModalPress}
                    onAddToCartPress={handleCloseModalPress}
                  />
                </BottomSheetModal>
              </Video>
            </>
          )}
        />
      )}
    </>
  );
};

export default Feed;
