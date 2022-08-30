import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  sideBar: ViewStyle;
}

export default StyleSheet.create<Style>({
  sideBar: {
    zIndex: 1,
    top: '25%',
    width: '20%',
    height: '75%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
});
