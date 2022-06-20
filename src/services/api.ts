import axios from 'axios'

const api = axios.create({
  baseURL: 'https://genshin-api-my.herokuapp.com/v1'
})

export default api