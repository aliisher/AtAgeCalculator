import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Linking,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { hp, wp } from '../Constant/Responsive';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = () => {
    setError(''); // Reset error

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('⚠️ All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('⚠️ Please enter a valid email address.');
      return;
    }

    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const emailUrl = `mailto:info@itorbit.co?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(emailUrl)
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        setError('✅ Your message has been sent!');
      })
      .catch(() => {
        setError('❌ Could not open mail app.');
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={hp(5)}
      >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>📧 Contact Us</Text>

          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#999"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Your Message"
            placeholderTextColor="#999"
            multiline
            style={styles.messageInput}
            value={message}
            onChangeText={setMessage}
          />
          {error !== '' && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFF4',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    paddingBottom: hp(10),
  },
  heading: {
    fontSize: wp(6.5),
    fontWeight: 'bold',
    color: '#FA6C3A',
    marginBottom: hp(3),
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: wp(3.8),
    marginBottom: hp(2),
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp(2),
    padding: wp(3),
    marginBottom: hp(2),
    fontSize: wp(4),
    backgroundColor: '#fff',
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp(2),
    padding: wp(3),
    height: hp(15),
    textAlignVertical: 'top',
    fontSize: wp(4),
    marginBottom: hp(2.5),
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#FA6C3A',
    paddingVertical: hp(1.8),
    borderRadius: wp(2.5),
    alignItems: 'center',
    shadowColor: '#FA6C3A',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(4.5),
  },
  logo: {
    width: wp(60),
    height: hp(20),
    alignSelf: 'center',
    marginBottom: hp(1),
  },
});
