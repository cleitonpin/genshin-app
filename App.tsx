import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';

import * as React from 'react';
import MainNavigation from './src/navigations';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (<MainNavigation />);
}