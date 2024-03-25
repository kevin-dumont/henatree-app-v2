import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from 'src/navigations/LoginScreen';
import SignupScreen from 'src/navigations/SigninScreen';
import SignupForm from 'src/navigations/SignupForm';
import { COLORS } from 'src/constants/theme';
import SignupLoader from 'src/navigations/SignupLoader';
import SetupProfile from 'src/navigations/SetupProfile';

const Stack = createStackNavigator();

const OnBoardingNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: COLORS.neutral.white },
          headerShown: false,
        }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignupForm" component={SignupForm} />
        <Stack.Screen name="SignupLoader" component={SignupLoader} />
        <Stack.Screen name="SetupProfile" component={SetupProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnBoardingNavigation;
