import axios from "axios"
import { server } from "../server"


// 유저 블로그 커스텀 데이터를 등록합니다.
export const createUserBlogCustomization = (body) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/user-blog-customizaion`, { 
            data:{
                blogTitle: body.blogTitle,
                statusMessage: body.statusMessage,
                selfIntroduction: body.selfIntroduction
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
// 유저 블로그 커스텀 데이터를 수정합니다.
export const updateUserBlogCustomization = (body) =>{
    return new Promise((resolve, reject) => {
        axios.patch(`${server}/user-blog-customizaion`, { 
            data:{
                blogTitle: body.blogTitle,
                statusMessage: body.statusMessage,
                selfIntroduction: body.selfIntroduction
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
// 유저 블로그 커스텀 데이터를 삭제합니다.
export const deleteUserBlogCustomization = () =>{
    return new Promise((resolve, reject) => {
        axios.delete(`${server}/user-blog-customizaion`, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 유저 블로그 커스텀 데이터를 가져옵니다.
export const getUserBlogCustomization = (userID) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${server}/user-blog-customizaion/${userID}`)
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
