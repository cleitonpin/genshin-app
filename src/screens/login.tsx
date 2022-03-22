import * as React from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements'

import Initial from '../components/Initial';
import { StackParams } from '../navigations';

import Google from '../assets/icons/google.png';
import Facebook from '../assets/icons/facebook.png';
import Apple from '../assets/icons/apple.png';
import { normalize } from '../utils/responsive';

interface LoginProps { }

interface SociableButtonProps {
  source: ImageSourcePropType
  title: string
}

type navProps = NativeStackNavigationProp<StackParams, 'login'>


const Login: React.FC<LoginProps> = () => {

  const nav = useNavigation<navProps>()

  const SociableButton = ({ title, source }: SociableButtonProps) => {
    return (
      <View style={{ position: 'relative' }}>
        <Image source={source} style={styles.iconSociable} />
        <Button
          title={title}
          type="outline"
          titleStyle={styles.titleStyle}
          buttonStyle={styles.buttonElements}
        />
      </View>
    )
  }

  return (
    <Initial title="Olá!">
      <TextInput style={styles.input} placeholder="E-mail" />
      <Pressable style={styles.button} onPress={() => console.log('click')}>
        <Text style={styles.next}>Continuar</Text>
      </Pressable>
      <Text style={styles.or}>ou</Text>

      <View style={styles.groupSociables}>
        <SociableButton title="Continuar com Facebook" source={Facebook} />
        <SociableButton title="Continuar com Google" source={Google} />
        <SociableButton title="Continuar com Apple" source={Apple} />
      </View>

      <View style={styles.groupLinks}>
        <Text style={styles.footerText}>Não tem conta?</Text>
        <Text
          style={styles.footerTextGreen}
          onPress={() => nav.navigate('register', {
            email: "kaedehara.ky@gmail.com"
          })}
        >
          Registre-se
        </Text>
      </View>

      <Text style={styles.footerTextGreen}>Esqueceu sua senha?</Text>
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
    fontSize: 18,
    lineHeight: 26,
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
  buttonElements: {
    backgroundColor: '#E5F8F2',
    borderRadius: 6,
    height: 50,
    color: '#010204'
  },
  titleStyle: {
    fontSize: normalize(11),
    lineHeight: 25,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#010204',
    marginLeft: 16,
    fontFamily: 'Nunito_400Regular',
  },
  iconSociable: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 43,
    top: 10,
    zIndex: 1,
  },
  groupSociables: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '35%',
  },
  footerText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#fff',
    fontFamily: 'Nunito_400Regular',
    marginRight: 10,
  },
  footerTextGreen: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#00D599',
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