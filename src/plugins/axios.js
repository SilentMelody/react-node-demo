import axios from 'axios'
import { AXIOS_DEFAULT_CONFIG } from './apiConfig'
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from './axiosPlugin'


const axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入响应拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)


export default axiosInstance
