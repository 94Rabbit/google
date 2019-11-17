import axios from 'axios'
import { baseUrl } from '../api/baseUrl'
import CryptoJS from 'crypto-js';
const secret = 'R3XqXfEdBDF9Dd8P'
axios.interceptors.request.use(config => {
   if (config.method.toLocaleLowerCase() === 'post') {
     let stringToSign = 'POST'+ '&' + JSON.stringify(config.data)
     let res = CryptoJS.HmacSHA256(stringToSign, secret);
     let hashInHex= CryptoJS.enc.Hex.stringify(res);
     config.headers['X-DIGEST'] = hashInHex
   }
  return config
})
export default axios
