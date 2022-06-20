import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Avatar } from "react-native-paper";
import DrawerItems from "./items";
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'expo-image-picker';
import { update } from "../../services/user";

import { useAuth } from "../../contexts/AuthContext";
import { uploadPhoto } from "../../services/upload";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { token, currentUser, updateField, signed } = useAuth();

  const [image, setImage] = React.useState(currentUser?.user?.img_url)
  const [loading, setLoading] = React.useState(false)

  const user = currentUser?.user

  const handleChoosePhoto = async () => {
    if (Platform.OS !== 'web') {

      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        return Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Permission to access camera roll is required',
        })
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        // base64: true,
      });


      if (!result.cancelled) {
        setLoading(true)

        const uploadUrl = await uploadPhoto(result, user?._id)
        await update({ img_url: uploadUrl }, token, user?._id)
        updateField('img_url', uploadUrl)
        setImage(uploadUrl);
        setLoading(false)
      }
    }
  };

  React.useEffect(() => {
    if (currentUser?.user?.img_url !== image) {
      setImage(currentUser?.user?.img_url)
    }
  }, [currentUser?.user?.img_url])

  return (
    <View style={styles.container}>
      {signed &&
        <View>
          <View style={{ position: 'relative' }}>
            <Avatar.Image
              source={{ uri: image ?? user?.img_url }}
              style={[styles.image, { opacity: loading ? 0.5 : 1 }]}
            />
            <ActivityIndicator animating={loading} color="#fff" size="small" style={styles.loader} />
          </View>

          <TouchableOpacity onPress={handleChoosePhoto}>
            <Text style={styles.text}>Change photo</Text>
          </TouchableOpacity>
        </View>
      }

      <DrawerItems {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 18
  },
  image: {
    borderRadius: 50,
    marginTop: 30,
  },
  text: {
    marginTop: 12,
    color: '#fff',
    fontSize: 12
  },
  loader: {
    position: 'absolute',
    top: 50,
    left: 20,
  }
})

export default DrawerContent;