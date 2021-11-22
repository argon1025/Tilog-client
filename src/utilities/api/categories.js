import axios from "axios"
import { server } from "../server"
// 카테고리를 생성합니다.
export const  createTag = (body) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/categories`, { 
            data: {
                categoryName: body.categoryName,
            }},
            { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}