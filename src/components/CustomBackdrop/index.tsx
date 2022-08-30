import React from 'react';
import styles from './styles';
import { TouchableWithoutFeedback, View } from 'react-native';

interface BackdropProps {
  onBackdropPress: () => void;
}

const CustomBackdrop: React.FC<BackdropProps> = ({ onBackdropPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onBackdropPress}>
      <View style={styles.backdrop} />
    </TouchableWithoutFeedback>
  );
};

export default CustomBackdrop;
