import { StyleSheet, View, Keyboard, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Screens/BottomTab/Home';
import Settings from '../Screens/BottomTab/Settings';
import { hp, wp } from '../Constant/Responsive';

const BottomNavigation = () => {
  const BOTTOM_STACK = createBottomTabNavigator();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const Showkeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hidekeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      Showkeyboard.remove();
      hidekeyboard.remove();
    };
  }, []);

  return (
    <BOTTOM_STACK.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display: isKeyboardVisible ? 'none' : 'flex',
          backgroundColor: '#FFEFF4',
          height: hp(7.5),
        },
        tabBarActiveTintColor: '#FA6C3A',
        tabBarInactiveTintColor: '#7D7D7D',
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return (
            <View
              style={[
                styles.container,
                {
                  borderWidth: focused ? wp(0.5) : 0,
                  backgroundColor: focused ? '#FFEFF4' : 'transparent',
                  marginTop: focused ? hp(-5) : 0,
                  shadowColor: focused ? '#FA6C3A' : 'transparent',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: focused ? 0.8 : 0,
                  shadowRadius: focused ? wp(2) : 0,
                },
              ]}
            >
              <Ionicons
                name={iconName}
                size={wp(6)}
                color={focused ? '#FA6C3A' : '#7D7D7D'}
              />
            </View>
          );
        },
        tabBarButton: props => (
          <Pressable
            {...props}
            style={[props?.style, { backgroundColor: 'transparent' }]}
          />
        ),
      })}
    >
      <BOTTOM_STACK.Screen name="Home" component={Home} />
      <BOTTOM_STACK.Screen name="Settings" component={Settings} />
    </BOTTOM_STACK.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
