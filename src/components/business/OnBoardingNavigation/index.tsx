import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '@/components/navigations/LoginScreen';
import SignUpScreen from '@/components/navigations/SigninScreen';
import SignUpForm from '@/components/navigations/SignUpForm';
import SignUpLoader from '@/components/navigations/SignUpLoader';
import SetupProfile from '@/components/navigations/SetupProfile';
import { COLORS } from 'src/constants/theme';

const Stack = createStackNavigator();

const OnBoardingNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: COLORS.neutral.white },
          headerShown: false,
        }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="SignUpLoader" component={SignUpLoader} />
        <Stack.Screen name="SetupProfile" component={SetupProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnBoardingNavigation;
