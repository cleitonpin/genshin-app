import * as React from 'react'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUserSignIn, login, register, User } from "../services/user";

type ICurrentUser = {
  token?: string;
  user: {
    username?: string;
    email?: string;
    img_url?: string;
    isLogged?: boolean;
    _id?: string;
  }
}

type AuthContextProps = {
  signed: boolean;
  currentUser: ICurrentUser | null;
  setCurrentUser: Dispatch<SetStateAction<ICurrentUser | null>>;
  signIn: ({ email, password }: IUserSignIn) => Promise<void>;
  signOut: (callback?: () => void) => void;
  signUp: (params: User) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  token: string;
  updateField: (field: string, value: string) => void;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signIn = async ({ email, password }: IUserSignIn) => {
    if (currentUser?.user.isLogged) return;

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
    setCurrentUser((old) => ({ user: { ...old?.user, isLogged: false } }));

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

  const updateField = async (field: string, value: string) => {
    const user = { ...currentUser?.user, [field]: value }
    setCurrentUser({ ...currentUser, user });
    await AsyncStorage.setItem('wiki.currentUser', JSON.stringify(user));
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
      setIsLoading(false)
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
        setIsLoading,
        updateField,
        token: currentUser?.token || ''
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};