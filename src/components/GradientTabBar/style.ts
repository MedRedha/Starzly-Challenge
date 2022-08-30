import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  gradientStyle: ViewStyle;
  navBarIcon: ViewStyle;
}

export default StyleSheet.create<Style>({
  gradientStyle: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  navBarIcon: {
    flex: 1,
    height: '100%',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
