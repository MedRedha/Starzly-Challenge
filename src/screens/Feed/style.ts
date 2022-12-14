import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  short: ViewStyle;
  fadeInOut: ViewStyle;
  lottie: ViewStyle;
  loadingContainer: ViewStyle;
  loading: ViewStyle;
  carousel: ViewStyle;
  invisibleTouch: ViewStyle;
  bottomSheet: ViewStyle;
}

export default StyleSheet.create<Style>({
  loadingContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: '30%',
    backgroundColor: '#1B1F25',
  },
  fadeInOut: {
    zIndex: 1,
    top: '40%',
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    zIndex: 1,
    height: '100%',
    width: '100%',
    bottom: 120,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  short: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  carousel: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  invisibleTouch: {
    top: 0,
    flex: 1,
    left: 0,
    zIndex: 1,
    width: '80%',
    height: '72%',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  loading: {
    zIndex: 1,
    top: '55%',
    position: 'absolute',
    alignSelf: 'center',
  },
  bottomSheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
