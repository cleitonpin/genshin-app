import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Divider } from "react-native-elements";
import { useAuth } from "../../contexts/AuthContext";

const DrawerItems = (props: DrawerContentComponentProps) => {
  const { signOut } = useAuth()
  const nav = useNavigation<any>()

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Sair"
        labelStyle={{
          color: '#fff',
          fontSize: 16,
          fontFamily: 'Nunito_400Regular',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 22,
        }}
        onPress={() => signOut(() => nav.navigate('loginSave'))}
      />
      {/* <DrawerItem
        label="PERSONAGENS"
        onPress={() => signOut(() => nav.navigate('loginSave'))}
      /> */}
    </DrawerContentScrollView>
  );
};

export default DrawerItems