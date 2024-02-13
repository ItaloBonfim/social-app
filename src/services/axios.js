import axios from "axios";
import { FindItemStorage } from './SessionStorage';

const __Request = axios.create({
    baseURL: 'https://localhost:3000/',
    timeout: 20000,
    headers: {
     /*    'Authorization': `Bearer ${secret}` || '',   */
    },
});

/*  axios.interceptors.request.use(function (config) {
    const Token = FindItemStorage("Token");
    //config.headers['Authorization'] = `Bearer ${Token}`;
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('Token')}`;

    return config

}, function (e) {
    console.error(e);
});  */

axios.interceptors.response.use(function (response) {

    return response.data
}, function (e) {
    console.error(e);
});

export default __Request

//https://joaops.com.br/blog/como-alterar-a-porta-padrao-do-react