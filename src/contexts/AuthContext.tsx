import * as React from 'react'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUserSignIn, login, register, User } from "../services/user";

type ICurrentUser = {
  username?: string;
  email?: string;
  img?: string;
  isLogged?: boolean;
}

type AuthContextProps = {
  signed: boolean;
  currentUser: ICurrentUser | null;
  setCurrentUser: Dispatch<SetStateAction<ICurrentUser | null>>;
  signIn: ({ email, password }: IUserSignIn) => Promise<void>;
  signOut: (callback: () => void) => void;
  signUp: (params: User) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signIn = async ({ email, password }: IUserSignIn) => {
    if (currentUser?.isLogged) return;

    const user = await login({ email, password })

    if (user.status === 200) {
      setCurrentUser(user.data);
      await AsyncStorage.setItem('wiki.currentUser', JSON.stringify(
        { ...user.data, isLogged: true }
      ));

      return user.data
    }
  }

  const signOut = async (callback?: () => void) => {
    setIsLoading(true);
    setCurrentUser((old) => ({ ...old, isLogged: false }));

    await AsyncStorage.setItem('wiki.currentUser', JSON.stringify({
      ...currentUser,
      isLogged: false
    }));

    setIsLoading(false);
    callback && callback();
  }

  const signUp = async (params: User) => {
    setIsLoading(true);
    register(params)
      .then(async (user: any) => {
        setCurrentUser(user)
        // await AsyncStorage.setItem('wiki.currentUser', JSON.stringify(user));
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);
      const storedCurrentUser = await AsyncStorage.getItem('wiki.currentUser')
      if (!storedCurrentUser) return;

      const current = JSON.parse(storedCurrentUser);
      if (!current) return;

      setCurrentUser(current);
    }
    fetchCurrentUser().finally(() => {
      setTimeout(() => setIsLoading(false), 500);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!currentUser,
        currentUser,
        setCurrentUser,
        signIn,
        signOut,
        signUp,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};