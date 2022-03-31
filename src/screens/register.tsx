import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Initial from '../components/Initial';

import { StackParams } from '../navigations';
import Password from '../components/Password';

interface RegisterProps {
  route: RouteProp<StackParams, 'register'>
}

const Register: React.FC<RegisterProps> = ({ route }) => {

  const nav = useNavigation<any>()

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório").label('Nome'),
    password: Yup.string().required("Senha obrigatória").min(6, 'Pelo menos 6 caracteres').label('Senha'),
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
      {({ touched, errors, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <Initial title="Registro" height={470}>
          {touched.name && errors.name && ToastAndroid.show(errors.name, ToastAndroid.TOP)}
          {touched.password && errors.password && ToastAndroid.show(errors.password, ToastAndroid.TOP)}

          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>
              Parece que você não tem uma conta.
              Vamos criar uma conta para
              {"\u200b"}
              <Text style={{ fontWeight: 'bold' }}>{route.params?.email}</Text>
            </Text>
          </View>

          <View style={styles.inputs}>
            <TextInput onBlur={handleBlur("name")} style={styles.input} placeholder="Nome" onChangeText={handleChange("name")} />

            <Password top={40} onBlur={() => handleBlur("password")} onChangeText={handleChange("password")} />
          </View>

          <View style={{ marginTop: 30, width: '95%' }}>
            <Text style={styles.text}>
              Ao selecionar aceito e continuar, você aceita os
              <Text style={[styles.text, styles.textGreen]}> Termos de Uso </Text>
              <Text style={{ color: "#02E3A1" }}>e</Text>
              <Text style={[styles.text, styles.textGreen]}> Política de Privacidade</Text>
            </Text>

          </View>

          <Text style={[styles.text, styles.login]}>
            Já tem conta? {"\u200b"}
            <Text style={[styles.text, styles.textGreen]} onPress={() => nav.navigate('loginSave')}>
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
    fontSize: 14,
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
    fontFamily: 'Nunito_400Regular',
  }
});

export default Register;