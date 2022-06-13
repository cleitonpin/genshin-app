import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { useAuth } from "../../contexts/AuthContext";

const DrawerItems = (props: DrawerContentComponentProps) => {
  const { signOut, signed } = useAuth()
  const nav = useNavigation<any>()

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      {signed ? (
        <DrawerItem
          label="Logout"
          labelStyle={style.label}
          onPress={() => signOut(() => nav.navigate('loginSave'))}
        />
      ) :
        <DrawerItem
          label="Sign in"
          labelStyle={style.label}
          onPress={() => nav.navigate('loginSave')}
        />
      }
      {/* <DrawerItem
        label="PERSONAGENS"
        onPress={() => signOut(() => nav.navigate('loginSave'))}
      /> */}
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  }
})

export default DrawerItems