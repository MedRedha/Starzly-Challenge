import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
  gradientStyle: ViewStyle;
  header: ViewStyle;
  shortTitle: TextStyle;
}

export default StyleSheet.create<Style>({
  gradientStyle: {
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    paddingBottom: 16,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  header: {
    zIndex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shortTitle: {
    alignSelf: 'center',
  },
});
