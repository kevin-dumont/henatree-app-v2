import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import TabBar from './TabBar';
import { MENU_ITEMS } from './constants';

const Tab = createBottomTabNavigator();

const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={TabBar}>
      {Object.entries(MENU_ITEMS).map(([name, item]) => (
        <Tab.Screen name={name} key={name} component={item.screen} />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
