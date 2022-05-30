import api from './api'

export type User = {
  username: string
  password: string
  email: string
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export const register = async ({ username, password, email }: User) => {
  try {
    const fetch = await api.post('/user', { username, password, email })

    return {
      data: fetch.data,
      status: fetch.status
    }
  } catch (error: any) {

    throw new Error(error.response.data.message, error.response.status)
  }
}

export const login = async ({ email, password }: IUserSignIn) => {
  try {
    const fetch = await api.post('/login', { email, password })

    return {
      data: fetch.data,
      status: fetch.status
    }
  } catch (error: any) {
    throw new Error(error.response.data.message, error.response.status)
  }
}