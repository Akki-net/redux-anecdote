import axios from 'axios'
const baseURL = 'http://localhost:3003/anecdotes'

export const getAll = async () => {
    const res = await axios.get(baseURL)
    return res.data
}

export const create = async (obj) => {
    const res = await axios.post(baseURL, obj)
    return res.data
}