import axios from 'axios'

const API = axios.create({
    baseURL: 'https://api.github.com/gists/2cfea2f7bae0900e529227f96e8d40d5'
})

export default API

