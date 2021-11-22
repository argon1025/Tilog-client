import axios from "axios"
import { server } from "../server"

// 포스트에 새로운 댓글을 생성합니다.
export const  createComment = (postID, body) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/comments/post/${postID}`, {  
            data: {
                htmlContent: body.htmlContent,
            }}, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 포스트의 모든 코멘트를 가져옵니다.
export const  viewAllComment = (postID) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${server}/comments/posts/${postID}`)
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 댓글에 답글을 작성합니다.
export const  createCommentToComment = (commentID, userID, postID,  body) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${server}/comments/${commentID}/posts/${postID}`, { 
            data: {
                usersId: userID,
                postsId: postID,
                htmlContent: body.htmlContent,
                replyTo: 1,
                replyLevel: 0
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
// 특정 코멘트를 가져옵니다.
export const  viewComment = (commentID) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${server}/comments/${commentID}`)
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 삭제한 댓글을 복구합니다.
export const  restoreComment = (commentID) =>{
    return new Promise((resolve, reject) => {
        axios.patch(`${server}/comments/${commentID}`)
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
// 포스트의 모든 코멘트를 삭제합니다.
export const  deleteComment = (commentID) =>{
    return new Promise((resolve, reject) => {
        axios.delete(`${server}/comments/${commentID}`)
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}
