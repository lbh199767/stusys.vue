import axios from 'axios';
import URLs from './URLs';

const appkey = 'lbh123456789_1569378709998';
const ajax = axios.create({
  baseURL: URLs.baseURL,
  params: {
    appkey,
  },
});
// 响应拦截
ajax.interceptors.response.use((data) => {
  const newData = data.data;
  if (newData.status === 'success') {
    return newData;
  }
  return Promise.reject(newData.msg);
});

const login = (data) => ajax.post(URLs.login, `appkey=${appkey}&${data}`);
const logon = (data) => ajax.post(URLs.logon, `appkey=${appkey}&${data}`);

export default {
  login,
  logon,
};
