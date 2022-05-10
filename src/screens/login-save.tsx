import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Initial from '../components/Initial';
import ProfileImg from '../assets/imgs/profile.gif'
import Password from '../components/Password';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigations';

interface LoginSaveProps {
}

type navProps = NativeStackNavigationProp<StackParams, 'loginSave'>

const LoginSave: React.FC<LoginSaveProps> = (props) => {

  const nav = useNavigation<navProps>()

  function onValidate() {
    console.log("ok")
    // if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)) {
    //   alert('Email inválido')
    //   return
    // }

    // if (!email || email.length < 6) {
    //   alert('Email inválido')
    //   return
    // }

    nav.navigate('registerStepOne')
  }

  return (
    <Initial title='Entrar' height={330}>

      <View style={styles.header}>
        <Image source={ProfileImg} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.text}>Kaedehara Kazuha</Text>
          <Text style={[styles.text, { fontSize: 13 }]}>kaedehara@gmail.com</Text>
        </View>
      </View>

      <View>
        <Password top={40} />
        <Pressable style={styles.button} onPress={() => nav.navigate('dashboard')}>
          <Text style={styles.next}>Continuar</Text>
        </Pressable>
      </View>

      <Text style={styles.textFooter}>
        Esqueceu sua senha?
        <Text style={[styles.textFooter, { fontWeight: 'bold', color: '#00D599' }]}> Clique aqui</Text>
      </Text>
      <Text style={styles.textFooter}>
        Não tem conta?
        <Text style={[styles.textFooter, { fontWeight: 'bold', color: '#00D599' }]} onPress={onValidate}> Registre-se</Text>
      </Text>
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