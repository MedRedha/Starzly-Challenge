import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  backdrop: ViewStyle;
}

export default StyleSheet.create<Style>({
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
