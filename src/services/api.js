import axios from "axios"

// const api = axios.create({
//     baseURL: "http://localhost:5000"
// })
const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})

export default api