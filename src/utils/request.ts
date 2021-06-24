import axios,{ AxiosRequestConfig, AxiosError }  from 'axios'
import { HTTP_CODE } from '@/enums/http'
import { message } from 'ant-design-vue';
// const baseUrl = process.env.NODE_ENV === 'production' ? '/api' : env.VUE_APP_API_HOST
const request = axios.create({
  timeout: 5000,
  baseURL: process.env.VUE_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
request.interceptors.request.use(
  config => {
    return config
  },
  err => Promise.reject(err)
)
request.interceptors.response.use(response => {
  const { data } = response
  if (data.code === 200 || data.code === 0) {
    return data || [];
  } else {
    message.error(response.data.message)
    return Promise.reject(response.data.message);
  }
},
  (error:AxiosError) => {
    if (error.response) {
      if (error.response.status === 401) {
        message.destroy();
        message.error('登录失效，请重新登录');
        // logout();
      } else {
        const tips = error.response.data.message || HTTP_CODE[error.response.status];
        tips && message.error(tips);
      }
      return Promise.reject(error);
    } else {
      message.error('请求超时, 请刷新重试');
      return Promise.reject(new Error('请求超时, 请刷新重试'));
    }

  }
)
export default request;
function get(url: string, params = {}, config: AxiosRequestConfig) {
  return  request({ method: 'get', url, params, ...config })
}
function post(url: string, data = {}, config: AxiosRequestConfig){
  return request({ method: 'post', url, data, ...config })
}
export {
  post,
  get
}
