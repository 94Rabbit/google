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

// 获取新闻详情
export const getNewsDetailAPI = (id) => axios.post(`${baseUrl}/api/v1/news/${id}`, {})

// 反馈接口
export const feedbackAPI = (params) => axios.post(`${baseUrl}/api/v1/feedback`, params)

// 获取首页banner图
export const getBannersAPI = (params) => axios.post(`${baseUrl}/api/v1/banner`, params)

// 提交订单
export const postOrderAPI = (params) => axios.post(`${baseUrl}/api/v1/basket/submit`, params)

// 根据id查询相关产品
export const getRelatedProductAPI = (id) => axios.post(`${baseUrl}/api/v1/related/productions/${id}`,{})

// 根据id查询先不管
export const getRelatedNewsAPI = (id) => axios.post(`${baseUrl}/api/v1/related/news/${id}`,{})
