import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearStorage = async (token) => {
  try {
    await AsyncStorage.clear()
    console.log('Token cleaned successfully!');
  } catch (error) {
    console.error('Error cleaned token:', error);
  }
};

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('accessToken', token);
    console.log('Token saved successfully!');
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};