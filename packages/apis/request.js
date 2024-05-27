import axios from 'axios'

const instance = axios.create({
  baseURL: '/dddd',
  timeout: 600000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (axios.isCancel(error))
      return Promise.reject(error)

    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面

          // localStorage.removeItem('arsToken')
          window.location.href = './'
          // eslint-disable-next-line no-console
          console.log('请求接口401')
      }
    }
    return Promise.reject(error.response && error.response.data)
  },
)

export default instance
