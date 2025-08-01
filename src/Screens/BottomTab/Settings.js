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
                    h3 { margin-top: 20px; }
                    p, li { font-size: 16px; line-height: 1.6; }
                  </style>
                </head>
                <body>
                  <h2>Privacy Policy</h2>
                  <p>This app respects your privacy. We do not collect or share personal data.</p>
                  <h3>Data Collection</h3>
                  <p>No personal information is collected.</p>
                  <h3>Changes</h3>
                  <p>We may update this policy. Check regularly for updates.</p>
                  <h3>Contact</h3>
                  <p>Contact us at info@bellelonlimited.com for any questions.</p>
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
