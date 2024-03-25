import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { MENU_ITEMS, MenuItemKey } from '@blocks/MainNavigation/constants';
import { MARGINS, SHADOW } from '@constants/theme';

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarShowLabel === false) {
    return null;
  }

  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const label = MENU_ITEMS[route.name as MenuItemKey].label;
        const Icon = MENU_ITEMS[route.name as MenuItemKey].icon;
        const Component = MENU_ITEMS[route.name as MenuItemKey].component;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Component
            key={route.name}
            onPress={onPress}
            name={route.name}
            Icon={Icon}
            isFocused={isFocused}
            label={label}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    ...SHADOW,
    height: 84,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 8,
    paddingHorizontal: MARGINS.S,
    paddingTop: MARGINS.XS,
  },
});

export default TabBar;
