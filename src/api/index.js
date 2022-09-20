import axios from './ajax'
import {BASE_URL} from '../config'
export const reqLogin = (username,password) => axios.post(`${BASE_URL}/login`,{username,password})
   
 