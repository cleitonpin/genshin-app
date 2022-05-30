import api from "./api"

export const tierList = async (element?: string) => {
  try {
    const { data, status } = await api.get(`/en/tierlist?vision=${element}`)

    return {
      data,
      status
    }
  } catch (error: any) {
    throw new Error(error.response.data.message, error.response.status)
  }
}

export const getCharacters = async (search?: string) => {
  try {
    const { data, status } = await api.get(`/en/characters`, {
      params: {
        vision: search
      }
    })

    return {
      data,
      status
    }
  } catch (error: any) {
    throw new Error(error.response.data.message, error.response.status)
  }
}