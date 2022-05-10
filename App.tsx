import 'react-native-gesture-handler';
import * as React from 'react';
import MainNavigation from './src/navigations';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (<MainNavigation />);
}