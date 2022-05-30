import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import * as React from 'react';
import MainNavigation from './src/navigations';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/contexts/AuthContext';

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