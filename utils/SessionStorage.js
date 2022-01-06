import AsyncStorage from '@react-native-async-storage/async-storage';

class SessionStorage {
  async setSession({email, password}) {
    console.log(email, password);
    try {
      const storageKey = JSON.stringify({email, password});
      await AsyncStorage.setItem('@storageKey', storageKey);

      return {msg: 'Session saved!', error: false};
    } catch (error) {
      return {msg: `Error: ${error}`, error: true};
    }
  }
  async getSession() {
    try {
      let res = await AsyncStorage.getItem('@storageKey');

      return {msg: 'Session retrieved!', res: JSON.parse(res), error: false};
    } catch (error) {
      return {msg: `Error: ${error}`, error: true};
    }
  }
  async removeSession() {
    try {
      await AsyncStorage.removeItem('@storageKey');

      return {msg: 'Session removed!', error: false};
    } catch (error) {
      return {msg: `Error: ${error}`, error: true};
    }
  }
}

export default SessionStorage;
