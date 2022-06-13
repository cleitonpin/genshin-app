import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Initial from '../components/Initial';
import ProfileImg from '../assets/imgs/profile.gif'
import Password from '../components/Password';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigations';
import { useAuth } from '../contexts/AuthContext';
import Lottie from '../components/Loading/Lottie';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface LoginSaveProps {
}

type navProps = NativeStackNavigationProp<StackParams, 'loginSave'>

const LoginSave: React.FC<LoginSaveProps> = (props) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn, currentUser, signed, isLoading, signOut, setCurrentUser } = useAuth()
  const nav = useNavigation<navProps>()

  function onValidate() {

    nav.navigate('registerStepOne')
  }

  async function handleLogin() {
    try {
      await signIn({ email, password })

      nav.navigate('dashboard')
    } catch (e: any) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: e.message,
      })
    }
  }

  const logout = async () => {
    signOut()
    AsyncStorage.clear();
    setCurrentUser(null)
  }

  return (
    <Initial title='Sign in' height={330}>
      {isLoading ? <Lottie width={'100%'} height={'100%'} /> : <>
        <View style={styles.header}>
          {signed ? (
            <>
              <Image source={{ uri: currentUser?.user.img_url }} style={styles.img} />
              <View style={styles.info}>
                <Text style={styles.text}>{currentUser?.user.username}</Text>
                <Text style={[styles.text, { fontSize: 13 }]}>{currentUser?.user.email}</Text>
                <TouchableOpacity style={styles.touchable} onPress={logout}>
                  <Text style={[styles.text, { color: '#11dd77' }]}>Switch account</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <TextInput
                // onBlur={onBlur} 
                onChangeText={setEmail}
                style={styles.input}
                placeholder="Email"
              />
            </>
          )}

        </View>

        <View>
          <Password top={30} onChangeText={setPassword} />
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.next}>Continue</Text>
          </Pressable>
        </View>

        <Text style={styles.textFooter}>
          Forgot your password?
          <Text style={[styles.textFooter, { fontWeight: 'bold', color: '#00D599' }]}> Click here</Text>
        </Text>
        <Text style={styles.textFooter}>
          Don't have account?
          <Text style={[styles.textFooter, { fontWeight: 'bold', color: '#00D599' }]} onPress={onValidate}> Sign up</Text>
        </Text></>}
    </Initial>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row'
  },
  info: {
    flexDirection: 'column'
  },
  input: {
    width: '100%',
    height: 49,
    borderRadius: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    color: '#8E8DA5',
    fontSize: 16,
    lineHeight: 22,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 400 / 2,
    overflow: 'hidden',
    resizeMode: 'cover',
    borderWidth: 1
  },
  text: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginTop: 22,
    elevation: 3,
    backgroundColor: '#01C38E',
  },
  next: {
    fontSize: 20,
    lineHeight: 27,
    fontFamily: 'Nunito_400Regular',
    color: 'white',
  },
  textFooter: {
    marginTop: 15,
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  touchable: {
    marginTop: 5,

    fontSize: 10,
    color: '#92db0a',
    // elevation: 3,
    // backgroundColor: '#01C38E',

  }
})

export default LoginSave;