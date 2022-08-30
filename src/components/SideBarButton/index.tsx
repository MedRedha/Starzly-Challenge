import React, { ReactElement } from 'react';

import { Image, TouchableOpacity, View } from 'react-native';
import styles from './style';
import StylishText from '../StylishText';

type SideBarButtonProps = {
  avatar?: string;
  subtitle?: string;
  icon?: ReactElement;
  type: 'image' | 'button';
  onButtonPress: () => void;
};

const SideBarButton: React.FC<SideBarButtonProps> = ({
  type,
  icon,
  avatar,
  onButtonPress,
  subtitle,
}) => {
  return (
    <>
      {type === 'button' ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.sideBarButton}
            onPress={onButtonPress}>
            {icon}
          </TouchableOpacity>
          {subtitle !== '' && (
            <StylishText
              textType='bold'
              style={styles.shortTitle}
              fontSize={15}>
              {subtitle}
            </StylishText>
          )}
        </View>
      ) : (
        <>
          <TouchableOpacity onPress={onButtonPress}>
            <Image
              style={styles.imageContainer}
              source={{
                uri: avatar,
              }}
            />
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default SideBarButton;
