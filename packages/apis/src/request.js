import axios from 'axios'

const instance = axios.create({
  timeout: 600000,
  withCredentials: true,
})

export default instance
