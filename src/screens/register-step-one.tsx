import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';

import Initial from '../components/Initial';
import { StackParams } from '../navigations';

import Google from '../assets/icons/google.png';
import Facebook from '../assets/icons/facebook.png';
import Apple from '../assets/icons/apple.png';
import SociableButton from '../components/SociableButton';
import { registerValidator } from '../utils/validators';

interface LoginProps { }

type navProps = NativeStackNavigationProp<StackParams, 'registerStepOne'>

const Login: React.FC<LoginProps> = () => {

  const nav = useNavigation<navProps>()
  const [email, setEmail] = React.useState('')

  async function onValidate() {
    registerValidator.validate({ email }, { abortEarly: false })
      .then(() => {
        nav.navigate('register', {
          email
        })
      })
      .catch(err => {
        err.errors.forEach((error: any) => {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: error,
          })
        });
      })
  }

  return (
    <Initial title="Hello!" height={456}>
      <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmail} />
      <Pressable style={styles.button} onPress={onValidate}>
        <Text style={styles.next}>Continue</Text>
      </Pressable>
      <Text style={styles.or}>ou</Text>

      <View style={styles.groupSociables}>
        <SociableButton title="Continue with Facebook" source={Facebook} />
        <SociableButton title="Continue with Google" source={Google} />
        <SociableButton title="Continue with Apple" source={Apple} />
      </View>

      <View style={styles.groupLinks}>
        <Text style={[styles.footerText, { marginRight: 10 }]}>Forgot your password?</Text>
        <Text style={[styles.footerText, { color: '#00D599' }]}>
          Click here
        </Text>
      </View>


    </Initial>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
  },
  input: {
    height: 49,
    borderRadius: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    color: '#8E8DA5',
    fontSize: 14,
    lineHeight: 21,
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
  or: {
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    fontFamily: 'Nunito_400Regular',
  },
  groupSociables: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '42%',
  },
  footerText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#fff',
    fontFamily: 'Nunito_400Regular',
  },
  groupLinks: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    marginBottom: 3,
  }
});

export default Login;