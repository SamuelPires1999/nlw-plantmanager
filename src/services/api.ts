import axios from 'axios'

// url trampo http://192.168.18.215:3333

// url casa http://192.168.15.130:3333

const api = axios.create({
    baseURL:"http://192.168.18.215:3333",
})

export default api;