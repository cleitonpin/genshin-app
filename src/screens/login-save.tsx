import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Initial from '../components/Initial';
import ProfileImg from '../assets/imgs/profile.gif'
import Password from '../components/Password';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigations';
import { useAuth } from '../contexts/AuthContext';
import Lottie from '../components/Loading/Lottie';

interface LoginSaveProps {
}

type navProps = NativeStackNavigationProp<StackParams, 'loginSave'>

const LoginSave: React.FC<LoginSaveProps> = (props) => {

  const { signIn, currentUser, signed, isLoading } = useAuth()
  const nav = useNavigation<navProps>()

  function onValidate() {

    nav.navigate('registerStepOne')
  }

  async function handleLogin() {
    try {
      await signIn({
        email: 'kaedehara@gmail.com',
        password: '123456'
      })

      nav.navigate('dashboard')
    } catch (e: any) {
      console.log("login error", e)
      Toast.show({
        type: 'error',
        position: 'top',
        text1: e.message,
      })
    }
  }

  return (
    <Initial title='Sign in' height={330}>
      {isLoading ? <Lottie width={'100%'} height={'100%'} /> : <>
        <View style={styles.header}>
          {signed ? (
            <>
              <Image source={ProfileImg} style={styles.img} />
              <View style={styles.info}>
                <Text style={styles.text}>{currentUser?.username || 'po'}</Text>
                <Text style={[styles.text, { fontSize: 13 }]}>{currentUser?.email || 'kaedehara@gmail.com'}</Text>
              </View>
            </>
          ) : (
            <>
              <Text>LOGA AI</Text>
            </>
          )}

        </View>

        <View>
          <Password top={40} />
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
  }
})

export default LoginSave;