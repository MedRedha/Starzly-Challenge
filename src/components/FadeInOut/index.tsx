import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

const DEFAULT_DURATION = 750;

export interface FadeInOutProps {
  visible: boolean;
  children?: any;
  duration?: number;
  scale?: boolean;
  style?: ViewStyle;
  useNativeDriver?: boolean;
}

const FadeInOut = ({
  children,
  visible,
  duration = DEFAULT_DURATION,
  scale,
  style,
  useNativeDriver = true,
}: FadeInOutProps) => {
  const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start();
  }, [visible]);

  const transform: any[] = [{ perspective: 1000 }];

  if (scale) {
    transform.push({ scale: fadeAnim });
  }

  return (
    <Animated.View style={{ ...style, opacity: fadeAnim, transform }}>
      {children}
    </Animated.View>
  );
};

export default FadeInOut;
