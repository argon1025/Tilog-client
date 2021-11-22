import request from "./core"


///////////////// 인가가 필요한 요청 /////////////////

// 포스트에 새로운 댓글을 생성합니다.
const  createComment = (postID, body) =>{
    request({
        url: `/comments/post/${postID}`,
        method: 'post',
        data: {
            htmlContent: body.htmlContent
        },
        withCredentials: true
    })
}


// 댓글에 답글을 작성합니다.
const  createCommentToComment = (commentID, userID, postID,  body) =>{
    request({
        url: `/comments/${commentID}/posts/${postID}`,
        method: 'post',
        data: {
            usersId: userID,
            postsId: postID,
            htmlContent: body.htmlContent,
            replyTo: 1,
            replyLevel: 0
        },
        withCredentials: true
    })
}
// 삭제한 댓글을 복구합니다.
const  restoreComment = (commentID) =>{
    request({
        url: `/comments/${commentID}`,
        method: 'patch',
        withCredentials: true
    })
}
// 포스트의 모든 코멘트를 삭제합니다.
const  deleteComment = (commentID) =>{
    request({
        url: `/comments/${commentID}`,
        method: 'delete',
        withCredentials: true
    })
}


///////////////// 인가가 필요없는 요청 /////////////////

// 포스트의 모든 코멘트를 가져옵니다.
const  viewAllComment = (postID) =>{
    request({
        url: `/comments/posts/${postID}`,
        method: 'get',
    })
}

// 특정 코멘트를 가져옵니다.
const  viewComment = (commentID) =>{
    request({
        url: `comments/${commentID}`,
        method: 'get',
        withCredentials: true
    })
}

export {
    createComment,
    createCommentToComment,
    deleteComment,
    restoreComment,
    viewAllComment,
    viewComment
}