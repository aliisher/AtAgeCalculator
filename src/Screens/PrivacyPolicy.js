import React from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { wp } from '../Constant/Responsive';

const PrivacyPolicy = ({ route, navigation }) => {
  const { htmlContent, url } = route.params || {};

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      <WebView
        originWhitelist={['*']}
        source={htmlContent ? { html: htmlContent } : { uri: url }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(4),
    backgroundColor: '#FA6C3A',
  },
  backButton: {
    fontSize: wp(6),
    color: 'white',
    marginRight: wp(4),
  },
  headerTitle: {
    fontSize: wp(5),
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PrivacyPolicy;
