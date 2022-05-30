import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.28.176.1:8080/v1'
})

export default api