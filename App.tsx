import 'react-native-gesture-handler';
import './src/config/firebase'
import Toast from 'react-native-toast-message';
import * as React from 'react';
import MainNavigation from './src/navigations';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/contexts/AuthContext';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Warning: Failed prop type: Invalid prop `style` of type `array` supplied to `Row`, expected `object`.']);
LogBox.ignoreLogs(['Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <MainNavigation />
      <Toast />
    </AuthProvider>
  );
}