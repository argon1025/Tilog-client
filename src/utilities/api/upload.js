import axios from "axios"
import { server } from "../server"

// 이미지 파일을 업로드합니다.
export const  uploadImage = (formData) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/files/images`, formData , {   
            headers:{
                'Content-Type': 'multipart/form-data'
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