import api from './api'

export type User = {
  username: string
  password: string
  email: string
  img_url?: string
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

export const update = async (body: object, token: string, id: string) => {
  try {
    const fetch = await api.put(`/user/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return {
      data: fetch.data,
      status: fetch.status
    }
  } catch (error: any) {
    console.log('erroi aqy')
    console.log(error.response.data)
    throw new Error(error.response.data.message, error.response.status)
  }
}