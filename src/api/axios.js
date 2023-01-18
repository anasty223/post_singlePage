import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3'
})

export const getPosts = async () => {
    const response = await api.get('/articles?_limit=6')
    return response.data
}


export async function fetchArticleById(articleId) {
    return  fetch(`https://api.spaceflightnewsapi.net/v3/articles/${articleId}`).then(response => response.json())
    .then(resp => {return resp})
  
  }
  