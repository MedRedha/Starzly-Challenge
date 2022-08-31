import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

export interface AnimatedAvatarProps {
  visible?: boolean;
  children?: any;
  duration?: number;
  style?: ViewStyle;
  useNativeDriver?: boolean;
}

const AnimatedAvatar = ({
  children,
  visible,
  style,
  useNativeDriver = true,
}: AnimatedAvatarProps) => {
  const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;
  const translate = useRef(new Animated.Value(300)).current;
  const toCart = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(translate, {
      toValue: visible ? 0 : 220,
      duration: 250,
      useNativeDriver: useNativeDriver,
    }).start();
    Animated.timing(toCart, {
      toValue: visible ? 0 : 110,
      duration: 250,
      useNativeDriver: useNativeDriver,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 500,
      useNativeDriver: useNativeDriver,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
        transform: [
          { translateX: translate },
          { translateY: toCart },
          { scale: fadeAnim },
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedAvatar;
