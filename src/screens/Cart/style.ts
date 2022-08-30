import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
  main: ViewStyle;
  bold: TextStyle;
  thin: TextStyle;
  regular: TextStyle;
  semiBold: TextStyle;
}

export default StyleSheet.create<Style>({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thin: {
    fontFamily: 'Urbanist-Thin',
  },
  regular: {
    fontFamily: 'Urbanist-Regular',
  },
  semiBold: {
    fontFamily: 'Urbanist-SemiBold',
  },
  bold: {
    fontFamily: 'Urbanist-Bold',
  },
});
