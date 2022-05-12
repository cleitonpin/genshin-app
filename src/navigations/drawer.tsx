import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";

import Dashboard from "../screens/dashboard";
import Rank from "../screens/rank";

const Drawer = createDrawerNavigator();

const Teste = () => <View />

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerBackgroundContainerStyle: { borderColor: 'black' } }}>
      <Drawer.Screen name="Personagens" component={Dashboard} />
      <Drawer.Screen name="Rank" component={Rank} />
      {/* <Drawer.Screen name="Cozinha" component={Teste} />
      <Drawer.Screen name="Artefatos" component={Teste} />
      <Drawer.Screen name="Suporte" component={Teste} />
      <Drawer.Screen name="Favoritos" component={Teste} /> */}
      <Drawer.Screen name="Sair" component={Teste} />
    </Drawer.Navigator>
  );
}