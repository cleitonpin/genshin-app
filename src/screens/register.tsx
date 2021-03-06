import { RouteProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import Initial from '../components/Initial';
import { register } from '../services/user'
import { StackParams } from '../navigations';
import Password from '../components/Password';
import { userValidator } from '../utils/validators';
import { useAuth } from '../contexts/AuthContext';

interface RegisterProps {
  route: RouteProp<StackParams, 'register'>
}
const Register: React.FC<RegisterProps> = ({ route }) => {
  const { signUp } = useAuth()
  const nav = useNavigation<any>()

  const handleRegister = async (values: any) => {
    const params = {
      username: values.name,
      email: route.params.email,
      ...values
    }
    try {
      await signUp(params)

      nav.navigate('dashboard')
    } catch (e: any) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Erro ao cadastrar',
        text2: e.message
      })
    }
  }

  return (
    <Formik
      initialValues={{ name: '', password: '' }}
      validationSchema={userValidator}
      onSubmit={handleRegister}
    >
      {({ touched, errors, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <Initial title="Register" height={470}>
          {touched.name && errors.name && ToastAndroid.show(errors.name, ToastAndroid.TOP)}
          {touched.password && errors.password && ToastAndroid.show(errors.password, ToastAndroid.TOP)}

          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>
              It looks like you don't have an account.
              Let's create an account for you.
              {"\u200b"}
              <Text style={{ fontWeight: 'bold' }}>{route.params?.email}</Text>
            </Text>
          </View>

          <View style={styles.inputs}>
            <TextInput onBlur={handleBlur("name")} style={styles.input} placeholder="Name" onChangeText={handleChange("name")} />

            <Password top={30} onBlur={() => handleBlur("password")} onChangeText={handleChange("password")} />
          </View>

          <View style={{ marginTop: 30, width: '95%' }}>
            <Text style={styles.text}>
              By selecting I accept and continuing, you accept the
              <Text style={[styles.text, styles.textGreen]}> Terms of use </Text>
              <Text style={{ color: "#02E3A1" }}>and</Text>
              <Text style={[styles.text, styles.textGreen]}> Privacy Policy</Text>
            </Text>

          </View>

          <Text style={[styles.text, styles.login]}>
            Have account? {"\u200b"}
            <Text style={[styles.text, styles.textGreen]} onPress={() => nav.navigate('loginSave')}>
              Sign in
            </Text>
          </Text>

          {isSubmitting ? <ActivityIndicator size={27.3} color="#ddd4d4" style={styles.button} /> : (
            <Pressable style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.next}>I accept and continue</Text>
            </Pressable>
          )}

        </Initial>
      )}
    </Formik>


  );
};

const styles = StyleSheet.create({
  containerTitle: {
    width: '100%',
  },
  textTitle: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 21,
    color: "#fff",
    // width: '100%'
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
    fontSize: 16,
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