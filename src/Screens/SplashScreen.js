import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constant/Responsive';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: wp(60), height: hp(30) }}
        resizeMode={'contain'}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
