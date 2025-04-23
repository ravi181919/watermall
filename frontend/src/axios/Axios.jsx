import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_KEY,
      },
})
export default instance