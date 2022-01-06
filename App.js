/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SessionStorage from './utils/SessionStorage';

import Login from './src/Login';
import Home from './src/Home';

const App: () => Node = () => {
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const sessionStorage = new SessionStorage();
      const res = await sessionStorage.getSession();

      console.log('Current session', res);

      if (res.error) {
        Alert.alert('Error', 'An error occured while checking session');
      }

      if (res.res) {
        setHasSession(true);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occured while checking session');
    }
  };

  if (hasSession) {
    return <Home setHasSession={setHasSession} />;
  }

  return (
    <View>
      <Login setHasSession={setHasSession} />
    </View>
  );
};

export default App;
