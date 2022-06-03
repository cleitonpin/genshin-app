import api from "./api"

export const getWeapons = async (search?: string) => {
  try {
    const { data, status } = await api.get(`/en/weapons?type=${search}`)

    return {
      data,
      status
    }
  } catch (error: any) {
    throw new Error(error.response.data.message, error.response.status)
  }
}