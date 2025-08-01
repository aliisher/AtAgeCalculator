import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { wp, hp } from '../../Constant/Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>⚙️ Settings</Text>

      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => {
          // Replace with your navigation or Linking logic
          navigation.navigate('ContactUs');
        }}
      >
        <Ionicons name="mail-outline" size={wp(6)} color="#FA6C3A" />
        <Text style={styles.optionText}>Contact Us</Text>
        <Ionicons
          name="chevron-forward"
          size={wp(5.5)}
          color="#B5B5B5"
          style={styles.arrow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionCard}
        onPress={() =>
          navigation.navigate('PrivacyPolicy', {
            htmlContent: `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: Arial; padding: 20px; background: #fff; color: #000; }
              h2 { color: #FA6C3A; }
              h3 { margin-top: 20px; color: #333; }
              p, li { font-size: 16px; line-height: 1.6; }
              ul { padding-left: 20px; }
            </style>
          </head>
          <body>
            <h2>Privacy Policy</h2>
            <p><strong>Effective Date:</strong> 1 July 2025</p>
            <p>Thank you for using <strong>AT Age Calculator</strong>.</p>
            <p>Your privacy is important to us. This Privacy Policy is meant to help you understand how we handle any information related to your use of our app.</p>

            <h3>1. No Data Collection</h3>
            <p>We do not collect, store, or share any personal or sensitive user data. All inputs (like date of birth) are processed locally on your device and are never stored or transmitted.</p>

            <h3>2. No Permissions Required</h3>
            <p>The app does not request or use any device permissions such as:</p>
            <ul>
              <li>Location</li>
              <li>Camera</li>
              <li>Contacts</li>
              <li>Microphone</li>
              <li>Storage</li>
              <li>Phone status</li>
            </ul>
            <p>You can use the app fully without granting any permissions.</p>

            <h3>3. No Internet or Network Access</h3>
            <p>This app works completely offline and does not connect to the internet or any external server. There are:</p>
            <ul>
              <li>No background data transfers</li>
              <li>No third-party APIs or SDKs</li>
              <li>No hidden tracking or analytics</li>
            </ul>

            <h3>4. No Ads or Analytics</h3>
            <p>We do not show ads, track users, or use any analytics or advertising networks.</p>

            <h3>5. Children’s Privacy</h3>
            <p>This app is safe for all ages. Since we collect no personal data, we are compliant with Google Play Families Policy and COPPA.</p>

            <h3>6. Security</h3>
            <p>Even though no data is collected, the app is built with secure coding practices and does not include any malicious code.</p>

            <h3>7. Policy Updates</h3>
            <p>If we make any updates to this policy, they will be posted inside the app or on our website.</p>

            <h3>8. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy:</p>
            <ul>
              <li>Email: info@itorbit.co</li>
              <li>Website: <a href="https://itorbit.co/" target="_blank">https://itorbit.co/</a></li>
            </ul>
          </body>
        </html>
      `,
          })
        }
      >
        <Ionicons name="document-text-outline" size={wp(6)} color="#FA6C3A" />
        <Text style={styles.optionText}>Privacy Policy</Text>
        <Ionicons
          name="chevron-forward"
          size={wp(5.5)}
          color="#B5B5B5"
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFF4',
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
  },
  heading: {
    fontSize: wp(6.5),
    fontWeight: 'bold',
    color: '#1C1C4E',
    marginBottom: hp(3),
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(3),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    marginBottom: hp(2),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  optionText: {
    flex: 1,
    fontSize: wp(4.5),
    fontWeight: '500',
    color: '#1C1C4E',
    marginLeft: wp(3),
  },
  arrow: {
    marginLeft: wp(1),
  },
});
