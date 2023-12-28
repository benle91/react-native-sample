
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { StyleSheet, Text, View, TextInput } from 'react-native';
import SignUpView from './src/views/SignUpView';
import CounterPage from './src/views/CounterPage'
// import ReactDOM from 'react-dom';

import store from './src/utils/store';
import { Provider as StoreProvider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainView from './src/views/main/MainView';
import { getToken } from './src/utils/AsyncStorageHelper';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {

  const [isReady, setReady] = useState(false);
  const [isLogin, setLogin] = useState(false);

  // assets preloading
  const preloadAssets = async () => {
    try {
      const token = await getToken();
      if (token) {
        setLogin(true)
      }
      //await Promise.all([loadImages(), loadFonts()]);
    } finally {
      setReady(true);
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    preloadAssets();
  }, []);

  if (!isReady) return null;

  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }} initialRouteName={isLogin?"Home":"SignUp"}>
            <Stack.Screen name="Home" component={MainView} />
            <Stack.Screen name="SignUp" component={SignUpView} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      </SafeAreaProvider>
    </StoreProvider>

  );
}
export default App;
