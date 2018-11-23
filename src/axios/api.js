import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:80';

export const requseLogin = params => {
  return axios.post('/user/login', params);
}