import axios from "axios"
import { server } from "../server"
// 태그를 생성합니다.
export const  createTag = (body) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/tags`, { 
            data: {
                tagsName: body.tagsName,
            },
            withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}