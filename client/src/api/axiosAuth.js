import axios from 'axios'

const axiosAuth = axios.create({
  baseURL: 'http://localhost:4587/api',
  withCredentials: true
})

export default axiosAuth
