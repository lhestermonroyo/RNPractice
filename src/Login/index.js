import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import SessionStorage from '../../utils/SessionStorage';

const Login = props => {
  const {setHasSession} = props;

  const [creds, setCreds] = useState({email: '', password: ''});

  const handleCreds = (name, value) => {
    setCreds({...creds, [name]: value});
  };

  const handleLogin = async () => {
    try {
      const sessionStorage = new SessionStorage();
      const res = await sessionStorage.setSession(creds);

      if (res.error) {
        Alert.alert('Error', 'An error occured while logging in.');
      }

      setHasSession(true);
    } catch (error) {
      console.log('Error', error);
      Alert.alert('Error', 'An error occured while logging in.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={value => handleCreds('email', value)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={value => handleCreds('password', value)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
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
  textInput: {
    borderColor: '#545454',
    width: '100%',
    padding: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: 12,
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

export default Login;
