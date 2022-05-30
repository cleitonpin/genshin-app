import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import DrawerItems from "./items";

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <View >
      <Text>ff</Text>
      <DrawerItems {...props} />
    </View>
  );
};

export default DrawerContent;