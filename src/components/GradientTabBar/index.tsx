import React from 'react';

import { TouchableOpacity, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../theme/Colors';
import Icon from 'react-native-vector-icons/Feather';
import StylishText from '../StylishText';
import styles from './style';

type GradientProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

const GradientTabBar: React.FC<GradientProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const theme = useColorScheme();

  const screenOptions = (route, focused) => {
    let iconName;

    switch (route.name) {
      case 'Discover':
        iconName = 'compass';
        break;
      case 'Stars':
        iconName = 'search';
        break;
      case 'Add':
        iconName = 'plus-square';
        break;
      case 'Cart':
        iconName = 'shopping-cart';
        break;
      case 'Profile':
        iconName = 'user';
        break;
      default:
        break;
    }

    return (
      <Icon
        name={iconName}
        size={27}
        color={focused ? Colors[theme].red : Colors[theme].white}
      />
    );
  };

  return (
    <LinearGradient
      locations={[0, 0.5, 1.0]}
      start={{ x: 0.0, y: 0 }}
      end={{ x: 0.0, y: 1.0 }}
      colors={['transparent', Colors[theme].darkShadow, Colors[theme].shadow]}
      style={styles.gradientStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={styles.navBarIcon}
            accessibilityRole='button'
            testID={options.tabBarTestID}
            accessibilityLabel={options.tabBarAccessibilityLabel}>
            {screenOptions(route, isFocused)}
            <StylishText
              textType='semiBold'
              style={{ marginTop: 6 }}
              color={isFocused ? Colors[theme].red : Colors[theme].white}
              fontSize={11}>
              {label}
            </StylishText>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

export default GradientTabBar;
