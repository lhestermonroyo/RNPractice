import React from 'react';
import {Text, View, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import SessionStorage from '../../utils/SessionStorage';

const Home = props => {
  const {setHasSession} = props;

  const handleLogout = async () => {
    try {
      const sessionStorage = new SessionStorage();
      const res = await sessionStorage.removeSession();

      if (res.error) {
        Alert.alert('Error', 'An error occured while logging out.');
      }

      setHasSession(false);
    } catch (error) {
      Alert.alert('Error', 'An error occured while logging out.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#1890FF',
    width: '100%',
    padding: 12,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
