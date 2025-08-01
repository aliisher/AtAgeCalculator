import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { hp, wp } from '../Constant/Responsive';
import { useIsFocused } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    let timeout;

    if (isFocused) {
      timeout = setTimeout(() => {
        navigation.replace('FlowNavigation');
      }, 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isFocused, navigation]);

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
    backgroundColor: '#FFEFF4',
  },
});
