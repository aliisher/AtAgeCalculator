import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker';
import { wp, hp } from '../../Constant/Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!selectedDate) return;

    const birthDate = new Date(selectedDate.split('-').reverse().join('-'));
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.heading}>🎂 Age Calculator</Text>

      <Text style={styles.label}>Select Your Birth Date</Text>

      <View style={styles.inputCard}>
        <Ionicons
          name="calendar-outline"
          size={wp(5.5)}
          color="#FA6C3A"
          style={styles.icon}
        />

        <DatePicker
          style={styles.datePicker}
          date={selectedDate}
          mode="date"
          androidMode="spinner" // Add this line
          placeholder="DD - MM - YYYY"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false} // Optional: hide default icon
          customStyles={{
            dateInput: styles.dateInput,
            placeholderText: styles.placeholderText,
            dateText: styles.dateText,
          }}
          onDateChange={date => setSelectedDate(date)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateAge}>
        <Text style={styles.buttonText}>Calculate Age</Text>
      </TouchableOpacity>

      {age && (
        <View style={styles.resultCard}>
          <Text style={styles.resultHeading}>Your Age</Text>
          <Text style={styles.resultText}>
            {age.years} Years, {age.months} Months, {age.days} Days
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFF4',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  logo: {
    width: wp(55),
    marginTop: wp(10),
    height: wp(55),
    marginBottom: hp(1),
  },
  heading: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#FA6C3A',
    marginBottom: hp(3),
  },
  label: {
    fontSize: wp(4.2),
    fontWeight: '600',
    color: '#1C1C4E',
    marginBottom: hp(1.5),
    alignSelf: 'flex-start',
  },
  inputCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
    width: wp(90),
    height: hp(7),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    marginRight: wp(2),
  },
  datePicker: {
    flex: 1,
  },
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#B5B5B5',
    fontSize: wp(4),
    fontStyle: 'italic',
  },
  dateText: {
    color: '#1C1C4E',
    fontSize: wp(4),
    fontWeight: '500',
  },
  button: {
    marginTop: hp(4),
    backgroundColor: '#FA6C3A',
    width: wp(90),
    height: hp(6.5),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FA6C3A',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: '600',
  },
  resultCard: {
    marginTop: hp(4),
    backgroundColor: '#fff',
    paddingVertical: hp(2.5),
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
    width: wp(90),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  resultHeading: {
    fontSize: wp(5),
    fontWeight: '700',
    color: '#1C1C4E',
    marginBottom: hp(1),
  },
  resultText: {
    fontSize: wp(4.5),
    fontWeight: '500',
    color: '#444',
  },
});
