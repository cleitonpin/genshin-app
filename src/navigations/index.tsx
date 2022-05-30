import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

// screens
import RegisterStepOne from '../screens/register-step-one';
import LoginSave from '../screens/login-save';
import Register from '../screens/register';
import DrawerNavigation from './drawer';
import Character from '../screens/character';

interface MainNavigationProps {
}

interface ICharacter {
  name?: string;
  stars?: number;
  element?: string;
  weapon?: string;
  imageUrl?: string;
  character?: ICharacterState;
}

interface ICharacterState extends ICharacter {
  id: number;
  name: string;
  description: string;
  vision: string;
  weapon: string;
  rarity: string;
  icon: string;
  skillTalents: Array<{
    name: string;
    unlock: string;
    description: string;
    icon: string;
  }>;
  passiveTalents: Array<{
    name: string;
    unlock: string;
    description: string;
    icon: string;
  }>;
  constellations: Array<{
    name: string;
    unlock: string;
    description: string;
    icon: string;
  }>;
  upgrades: Array<{
    rank: string;
    level: string;
    cost: string;
    material_one: {
      name: string;
      icon: string;
    }
    material_two: {
      name: string;
      icon: string;
    }
    material_three: {
      name: string;
      icon: string;
    }
    material_four: {
      name: string;
      icon: string;
    }
  }>
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
        <Stack.Screen name="loginSave" component={LoginSave} />
        <Stack.Screen name="registerStepOne" component={RegisterStepOne} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="character" component={Character} />
        <Stack.Screen name="dashboard" component={DrawerNavigation} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;