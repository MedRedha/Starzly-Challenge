import React from 'react';

import { useColorScheme, View } from 'react-native';
import Colors from '../../theme/Colors';
import styles from './style';
import StylishText from '../../components/StylishText';

interface Props {}

const Profile: React.FC<Props> = (props) => {
  const theme = useColorScheme();

  return (
    <View style={{ ...styles.main, backgroundColor: Colors[theme].primary }}>
      <StylishText>This is the Profile screen</StylishText>
    </View>
  );
};

export default Profile;
