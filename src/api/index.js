import axios from '../utils/axios'
import { baseUrl } from './baseUrl'

// 获取新闻列表
export const getNewListAPI = (params) => axios.post(`${baseUrl}/api/v1/news`, params)

//feedback
export const feedbackAPI = (params) => axios.post(`${baseUrl}/api/v1/feedback`, params)
