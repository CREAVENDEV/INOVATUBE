import axios from 'axios'

const API = "http://127.0.0.1:8000/myapp/register/";
export const registerrequest = user => axios.post(`${API}`, user)

const API2 = "http://127.0.0.1:8000/myapp/login/";
export const loginRequest = user => axios.post(`${API2}`, user);


