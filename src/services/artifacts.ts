import api from "./api"

export const getArtifacts = async () => {
  try {
    const { data, status } = await api.get(`/en/artifacts`)

    return {
      data,
      status
    }
  } catch (error: any) {
    throw new Error(error.response.data.message, error.response.status)
  }
}