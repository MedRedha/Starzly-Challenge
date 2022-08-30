import React from 'react';

import { Text, TextStyle, useColorScheme } from 'react-native';

import Colors from '../../theme/Colors';
import styles from './style';

type CustomTextProps = {
  props?: any;
  color?: string;
  children?: any;
  fontSize?: number;
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'semiBold' | 'thin' | 'handwritten';
};

const StylishText: React.FC<CustomTextProps> = ({
  props,
  color,
  children,
  style,
  fontSize,
  textType,
}) => {
  let textStyle: {};
  const theme = useColorScheme();

  switch (textType) {
    case 'thin':
      textStyle = styles.thin;
      break;
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'semiBold':
      textStyle = styles.semiBold;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'handwritten':
      textStyle = styles.handwritten;
      break;
    default:
      textStyle = styles.regular;
      break;
  }

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Text
      {...props}
      style={[
        textStyle,
        {
          ...passedStyles,
          fontSize: fontSize ?? 22,
          color: color ?? Colors[theme].text,
        },
      ]}>
      {children}
    </Text>
  );
};

export default StylishText;
