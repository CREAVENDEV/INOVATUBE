import axios from 'axios'

const API ='http://127.0.0.1:8000/myapp/'
export const registerrequest = user => axios.post(`${API}/Users/`, user)