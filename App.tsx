import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './src/screens/Feed';
import Search from './src/screens/Search';
import Post from './src/screens/Post';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import GradientTabBar from './src/components/GradientTabBar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Tab = createBottomTabNavigator();

function starzly() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <Tab.Navigator
          tabBar={(props) => <GradientTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name='Discover' component={Feed} />
          <Tab.Screen name='Stars' component={Search} />
          <Tab.Screen name='Add' component={Post} />
          <Tab.Screen name='Cart' component={Cart} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}

export default starzly;
