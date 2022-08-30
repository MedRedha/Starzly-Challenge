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
import axios from 'axios';

interface Props {}

const Feed: React.FC<Props> = (props) => {
  const videoRef = useRef();
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
              <TouchableWithoutFeedback
                onPress={() => setIsManuallyPaused(!isManuallyPaused)}>
                <View style={styles.invisibleTouch}></View>
              </TouchableWithoutFeedback>
              <Video
                repeat
                ref={videoRef}
                // muted={isMuted}
                muted={true}
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
                      style={styles.loading}
                      color='white'
                      size='large'
                    />
                  )}
                  <ShortSideBar
                    avatar={item?.talent?.avatar_url}
                    setIsMuted={setIsMuted}
                    muted={isMuted}
                  />
                  <ShortCard
                    product={item?.talent}
                    onAddToCartPress={handlePresentModalPress}
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
                    onClosePress={handleCloseModalPress}
                    onAddToCartPress={handleCloseModalPress}
                    talent={item?.talent}
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
