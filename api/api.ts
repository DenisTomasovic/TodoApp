import axios from 'axios'
import { SERVER_URL } from './config'

export const API = axios.create({
    url: SERVER_URL,
    timeout: 3000,
    headers: {
        'Accept-Encoding': 'identity',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
