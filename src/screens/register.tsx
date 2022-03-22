import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements'
import * as Yup from 'yup';
import { Formik } from 'formik';
import Initial from '../components/Initial';

import { StackParams } from '../navigations';

interface RegisterProps {
  route: RouteProp<StackParams, 'register'>
}

const Register: React.FC<RegisterProps> = ({ route }) => {

  const [seePassword, setSeePassword] = useState(true)
  const nav = useNavigation()

  const schema = Yup.object().shape({
    // email: Yup.string().required("Emil obrigatório").email().label('E-mail'),
    name: Yup.string().required("Nome obrigatório").label('Nome'),
    password: Yup.string().required("Senha obrigatória").min(6, 'Pelo menos 6 caracteres').label('Senha'),
    // confirmPassword: Yup.string().required("Confirmação de senha obrigatória").min(6).label('Confirmação de senha'),
  })

  const handleRegister = async (values: any) => {
    await new Promise(resolve => setTimeout(resolve, 5000))

    // console.log(values)
  }

  return (
    <Formik
      initialValues={{ name: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleRegister}
    >
      {({ values, touched, errors, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <Initial title="Registro">

          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>
              Parece que você não tem uma conta.
              Vamos criar uma conta para
              {"\u200b"}
              <Text style={{ fontWeight: 'bold' }}>{route.params.email}</Text>
            </Text>
          </View>

          <View style={styles.inputs}>
            <TextInput onBlur={() => handleBlur("name")} style={styles.input} placeholder="Nome" onChangeText={handleChange("name")} />
            {/* {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>} */}
            <TextInput onBlur={() => handleBlur("password")} style={styles.input} placeholder="Senha" onChangeText={handleChange("password")} secureTextEntry={seePassword} />
            <Icon
              name={seePassword ? 'eye-off' : 'eye'}
              type="material-community"
              color="#000"
              size={30}
              containerStyle={styles.icon}
              tvParallaxProperties={undefined}
              onPress={() => setSeePassword(!seePassword)}
            />
          </View>

          <View style={{ marginTop: 12, width: '95%' }}>
            <Text style={styles.text}>
              Ao selecionar aceito e continuar, você aceita os
              <Text style={[styles.text, styles.textGreen]}> Termos de Uso </Text>
              <Text style={{ color: "#02E3A1" }}>e</Text>
              <Text style={[styles.text, styles.textGreen]}> Política de Privacidade</Text>
            </Text>

          </View>

          <Text style={[styles.text, styles.login]}>
            Já tem conta? {"\u200b"}
            <Text style={[styles.text, styles.textGreen]} onPress={() => nav.goBack()}>
              Entrar
            </Text>
          </Text>

          {isSubmitting ? <ActivityIndicator size={27.3} color="#ddd4d4" style={styles.button} /> : (
            <Pressable style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.next}>Aceito e continuar</Text>
            </Pressable>
          )}

        </Initial>
      )}
    </Formik>


  );
};

const styles = StyleSheet.create({
  containerTitle: {
    width: '80%',
    // height: 55,
  },
  textTitle: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: "#fff"
  },
  inputs: {
    width: '100%',
    marginTop: 12,
    justifyContent: 'space-between',
    height: 110,
    position: 'relative'
  },
  input: {
    width: '100%',
    height: 49,
    borderRadius: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    color: '#8E8DA5',
    fontSize: 18,
    lineHeight: 26,
  },
  icon: {
    position: 'absolute',
    right: 18,
    top: 70,
  },
  text: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFF",

  },
  next: {
    fontSize: 20,
    lineHeight: 27,
    fontFamily: 'Nunito_400Regular',
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginTop: 18,
    elevation: 3,
    backgroundColor: '#01C38E',
  },
  textGreen: {
    fontWeight: 'bold',
    color: "#02E3A1"
  },
  login: {
    marginTop: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    // marginBottom: 5o,
    fontFamily: 'Nunito_400Regular',
  }
});

export default Register;