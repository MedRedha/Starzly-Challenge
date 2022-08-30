import styles from './style';
import StylishText from '../StylishText';
import { useColorScheme, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';

interface ShortHeaderProps {
  title: string;
  emoji?: string;
}

const ShortHeader: React.FC<ShortHeaderProps> = ({ title, emoji }) => {
  const theme = useColorScheme();

  return (
    <LinearGradient
      locations={[0, 0.25, 0.5, 1.0]}
      start={{ x: 0.0, y: 0 }}
      end={{ x: 0.0, y: 1.0 }}
      colors={[
        Colors[theme].shadow,
        Colors[theme].darkShadow,
        Colors[theme].darkShadow,
        'transparent',
      ]}
      style={styles.gradientStyle}>
      <View style={styles.header}>
        <Icon size={25} color='transparent' name='dots-three-horizontal' />
        <StylishText textType='semiBold' style={styles.shortTitle}>
          {title} {emoji}
        </StylishText>
        <Icon name='dots-three-horizontal' color='white' size={25} />
      </View>
    </LinearGradient>
  );
};
export default ShortHeader;
