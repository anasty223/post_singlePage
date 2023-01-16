import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3'
})

export const getPosts = async () => {
    const response = await api.get('/articles')
    return response.data
}