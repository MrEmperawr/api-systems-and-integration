import axios from "axios";

const api = () => {
    return axios.create({
        baseURL: 'http://localhost:1337/api'
    })
}


export const getTodos = async () => {
    return await api().get('/todos')
}

export const getTodo = async (id: number) => {
    return await api().get(`/todos/${id}`)
}