import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

// screens
import RegisterStepOne from '../screens/register-step-one';
import LoginSave from '../screens/login-save';
import Register from '../screens/register';
import DrawerNavigation from './drawer';
import Character from '../screens/character';
import { ICharacter } from '../interfaces';

interface MainNavigationProps {
}

export type StackParams = {
  registerStepOne: undefined;
  register: {
    email: string;
  };
  loginSave: undefined;
  dashboard: undefined;
  character: ICharacter;
}

const Stack = createStackNavigator<StackParams>();

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }} >
        <Stack.Screen name="dashboard" component={DrawerNavigation} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        <Stack.Screen name="loginSave" component={LoginSave} />
        <Stack.Screen name="registerStepOne" component={RegisterStepOne} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="character" component={Character} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;