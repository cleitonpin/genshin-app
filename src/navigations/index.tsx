import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

// screens
import RegisterStepOne from '../screens/register-step-one';
import LoginSave from '../screens/login-save';
import Register from '../screens/register';

interface MainNavigationProps {
}

export type StackParams = {
  registerStepOne: undefined;
  register: {
    email?: string;
  } | undefined;
  loginSave: undefined;
}

const Stack = createStackNavigator<StackParams>();

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} >
        <Stack.Screen name="loginSave" component={LoginSave} />
        <Stack.Screen name="registerStepOne" component={RegisterStepOne} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;