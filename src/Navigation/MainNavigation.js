import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import FlowNavigation from './FlowNavigation';

export default function MainNavigation() {
  const MAIN_STACK = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MAIN_STACK.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="FlowNavigation"
      >
        <MAIN_STACK.Screen name="SplashScreen" component={SplashScreen} />
        <MAIN_STACK.Screen name="FlowNavigation" component={FlowNavigation} />
      </MAIN_STACK.Navigator>
    </NavigationContainer>
  );
}
