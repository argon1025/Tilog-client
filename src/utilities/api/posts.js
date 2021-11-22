import axios from "axios"
import { server } from "../server"
// 포스트를 생성합니다.
export const  createPost = (body) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/posts`, { 
            data: {
                categoryId: body.categoryId,
                title: body.title,
                thumbNailUrl: body.thumbNailUrl,
                markDownContent: body.markDownContent,
                private: body.private
            }}, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            console.log("나야")
            console.log(error.message);
            reject(error)
        })
    })
}
// 포스트를 수정합니다.
export const  updatePost = (postID, body) =>{
    return new Promise((resolve, reject) => {
        axios.put(`${server}/posts/${postID}`, { 
            data: {
                categoryId: body.categoryId,
                title: body.title,
                thumbNailUrl: body.thumbNailUrl,
                markDownContent: body.markDownContent,
                private: body.private
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
// 포스트를 삭제합니다.
export const  deletePost = (postID) =>{
    return new Promise((resolve, reject) => {
        axios.delete(`${server}/posts/${postID}`, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 포스트의 디테일 정보를 요청합니다.
export const  viewDetailPost = (postID) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${server}/posts/${postID}`)
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 특정 유저가 작성한 게시글 리스트를 요청합니다.
export const  viewSpecialUserPost = (userID) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${server}/users/${userID}/posts}`)
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 포스트에 좋아요를 설정합니다.
export const  setLikePost = (userID) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/users/${userID}/like}`, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 포스트에 설정된 좋아요를 해제합니다.
export const  unSetLikePost = (userID) =>{
    return new Promise((resolve, reject) => {
        axios.delete(`${server}/users/${userID}/like}`, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}