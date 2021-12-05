
import axios from 'axios'

export const api = axios.create({

    baseURL: `https://api.github.com/users/`
})

export const busca = async (url, setDado) =>{
    const resp = await api.get(url)
    setDado(resp.data)
}
