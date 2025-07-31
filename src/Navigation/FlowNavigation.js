import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';

const FlowNavigation = () => {
  const MAIN_STACK = createNativeStackNavigator();
  return (
    <MAIN_STACK.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomNavigation"
    >
      <MAIN_STACK.Screen name="BottomNavigation" component={BottomNavigation} />
    </MAIN_STACK.Navigator>
  );
};

export default FlowNavigation;

const styles = StyleSheet.create({});
