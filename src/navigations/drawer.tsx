import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";

import DrawerContent from "../components/Drawer";
import HeaderRight from "../components/HeaderRight";

import Artifacts from "../screens/artifacts";
import Dashboard from "../screens/dashboard";
import Rank from "../screens/rank";
import Weapons from "../screens/weapons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerStyle: {
          backgroundColor: '#222431',
          // width: '100%',

        },
        drawerLabelStyle: {
          color: '#fff',
          fontSize: 16,
          fontFamily: 'Nunito_400Regular',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 22,
        },
        headerLeft: () => (<View />),
        headerRight: () => <HeaderRight navigation={navigation} />,
        headerTitleStyle: {
          fontFamily: 'Nunito_400Regular',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: 16,
          lineHeight: 22,
          color: '#FFFFFF',
        },
        headerStyle: {
          backgroundColor: '#222431',
          elevation: 1,
        }
      })}

    >
      <Drawer.Screen name="Characters" component={Dashboard} />
      <Drawer.Screen name="Tier List" component={Rank} />
      <Drawer.Screen name="Weapons" component={Weapons} />
      <Drawer.Screen name="Artifacts" component={Artifacts} />
      {/* <Drawer.Screen name="Cozinha" component={Teste} />
      <Drawer.Screen name="Artefatos" component={Teste} />
      <Drawer.Screen name="Suporte" component={Teste} />
      <Drawer.Screen name="Favoritos" component={Teste} /> */}
    </Drawer.Navigator>
  );
}