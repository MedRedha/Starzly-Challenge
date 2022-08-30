import { StyleSheet, TextStyle } from 'react-native';

interface Style {
  bold: TextStyle;
  thin: TextStyle;
  regular: TextStyle;
  semiBold: TextStyle;
  handwritten: TextStyle;
}

export default StyleSheet.create<Style>({
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
  handwritten: {
    fontFamily: 'Vibur',
  },
});
