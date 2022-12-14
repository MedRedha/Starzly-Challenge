import styles from './style';
import { View } from 'react-native';
import React, { useState } from 'react';
import SideBarButton from '../SideBarButton';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Octicons';

interface ShortSideBarProps {
  avatar?: string;
  muted?: Boolean;
  setIsMuted?: (Boolean) => void;
  handleAnimation?: (number) => void;
  setType?: (string) => void;
  likeRef?: any;
}

const ShortSideBar: React.FC<ShortSideBarProps> = ({
  avatar,
  muted,
  setIsMuted,
  handleAnimation,
  setType,
  likeRef,
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [numLikes, setNumLikes] = useState<number>(
    Math.floor(Math.random() * 100)
  );

  const handleLikePost = () => {
    setType('like');
    if (liked) {
      setLiked(!liked);
      setNumLikes(numLikes - 1);
    } else {
      handleAnimation(2200);
      setLiked(!liked);
      setNumLikes(numLikes + 1);
      likeRef?.current?.play();
    }
  };

  return (
    <View style={styles.sideBar}>
      <SideBarButton
        type='button'
        subtitle={`${numLikes}`}
        onButtonPress={() => handleLikePost()}
        icon={
          <Icon name='heart' color={liked ? '#FF1476' : 'white'} size={22} />
        }
      />
      <SideBarButton
        type='button'
        subtitle='27.2K'
        onButtonPress={() => console.log('MESSAGES')}
        icon={<Icon2 name='message1' color='white' size={22} />}
      />
      <SideBarButton
        type='image'
        onButtonPress={() => console.log('AVATAR')}
        avatar={avatar}
      />
      <SideBarButton
        type='button'
        onButtonPress={() => {
          setType('mute');
          setIsMuted(!muted);
          handleAnimation(500);
        }}
        icon={
          muted ? (
            <Icon3 name='volume-mute' color='white' size={22} />
          ) : (
            <Icon4 name='unmute' color='white' size={22} />
          )
        }
      />
    </View>
  );
};
export default ShortSideBar;
