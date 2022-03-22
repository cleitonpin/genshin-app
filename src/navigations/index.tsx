import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

// screens
import Login from '../screens/login';
import Register from '../screens/register';

interface MainNavigationProps {
}

export type StackParams = {
  login: undefined;
  register: {
    email: string;
  };
}

const Stack = createStackNavigator<StackParams>();

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;