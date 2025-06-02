import axios from 'axios'

const API = "http://127.0.0.1:8000/myapp/Users/";
export const registerrequest = user => axios.post(`${API}`, user)