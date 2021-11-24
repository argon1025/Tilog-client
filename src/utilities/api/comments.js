import request from "./core"


///////////////// 인가가 필요한 요청 /////////////////

// 포스트에 새로운 댓글을 생성합니다.
const  createComment = (postID, htmlContent) =>{
    return request({
        url: `/comments/post/${postID}`,
        method: 'post',
        data: {
            htmlContent: htmlContent
        },
        withCredentials: true
    })
}


// 댓글에 답글을 작성합니다.
const  createCommentToComment = (commentID, postID,  htmlContent) =>{
    return request({
        url: `/comments/${commentID}/post/${postID}`,
        method: 'post',
        data: {
            postsId: postID,
            htmlContent: htmlContent,
            replyTo: 1,
            replyLevel: 0
        },
        withCredentials: true
    })
}
// 댓글을 수정 합니다.
const  updateComment = (commentID, htmlContent) =>{
    return request({
        url: `/comments/${commentID}`,
        method: 'patch',
        data: {
            htmlContent: htmlContent
        },
        withCredentials: true
    })
}
// 포스트의 모든 코멘트를 삭제합니다.
const  deleteComment = (commentID) =>{
    return request({
        url: `/comments/${commentID}`,
        method: 'delete',
        withCredentials: true
    })
}


///////////////// 인가가 필요없는 요청 /////////////////

// 포스트의 모든 코멘트를 가져옵니다.
const  viewAllComment = (postID) =>{
    return request({
        url: `/comments/post/${postID}`,
        method: 'get',
    })
}
const getCommentsWriteUsers = (postID) => {
    return request({
        url: `/comments/writeusers/post/${postID}`,
        method: 'get'
    })
} 

// 특정 코멘트를 가져옵니다.
const  viewComment = (commentID) =>{
    return request({
        url: `comments/${commentID}`,
        method: 'get'
    })
}

export {
    createComment,
    createCommentToComment,
    deleteComment,
    updateComment,
    viewAllComment,
    viewComment,
    getCommentsWriteUsers
}