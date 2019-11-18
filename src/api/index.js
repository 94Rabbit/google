import axios from '../utils/axios'
import { baseUrl } from './baseUrl'

// 获取商品类型接口
export const getProductTypeAPI = (params) => axios.post(`${baseUrl}/api/v1/productions/type`, params)

// 获取产品列表接口
export const getProductAPI = (params) => axios.post(`${baseUrl}/api/v1/productions`, params)

// 获取商品详情接口
export const getProductDetailAPI = (id) => axios.post(`${baseUrl}/api/v1/productions/${id}`,{})

// 获取新闻类型接口
export const getNewsTypesAPI = (params) => axios.post(`${baseUrl}/api/v1/news/type`, {})

// 获取新闻列表
export const getNewListAPI = (params) => axios.post(`${baseUrl}/api/v1/news`, params)

//feedback
export const feedbackAPI = (params) => axios.post(`${baseUrl}/api/v1/feedback`, params)




