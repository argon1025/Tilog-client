import request from "./core"


///////////////// 인가가 필요한 요청 /////////////////

// 포스트를 생성합니다.
const createPost = (body) =>{
    return request({
        url: '/posts',
        method: 'post',
        data: {
            categoryId: body.categoryId,
            title: body.title,
            thumbNailUrl: body.thumbNailUrl,
            markDownContent: body.markDownContent,
            private: body.private
        },
        withCredentials: true
    })
}
// 포스트를 수정합니다.
const  updatePost = (postID, body) =>{
    return request({
        url: `/posts/${postID}`,
        method: 'put',
        data: {
            categoryId: body.categoryId,
            title: body.title,
            thumbNailUrl: body.thumbNailUrl,
            markDownContent: body.markDownContent,
            private: body.private
        },
        withCredentials: true
    })
}
// 포스트를 삭제합니다.
const  deletePost = (postID) =>{
    return request({
        url: `/posts/${postID}`,
        method: 'delete',
        withCredentials: true
    })
}
// 포스트에 좋아요를 설정합니다.
const  setLikePost = (postID) =>{
    return request({
        url: `/posts/${postID}/like`,
        method: 'post',
        withCredentials: true
    })
}
// 포스트에 설정된 좋아요를 해제합니다.
const  unSetLikePost = (postID) =>{
    return request({
        url: `/posts/${postID}/like`,
        method: 'delete',
        withCredentials: true
    })
}


///////////////// 인가가 필요없는 요청 /////////////////

// 포스트의 디테일 정보를 요청합니다.
const  viewDetailPost = (postID) =>{
    return request({
        url: `/posts/${postID}`,
        method: 'get',
    })
}
// 특정 유저가 작성한 게시글 리스트를 요청합니다.
const  viewCursorPost = (userID, nextCursorNumber) =>{
    return request({
        url: `/users/${userID}/posts?cursor=${nextCursorNumber}`,
        method: 'get',
    })
}

// 전체 맴버가 작성한 글중 좋아요가 가장 많은 게시글
const  viewTrendPosts = (searchScope, nextCursorNumber) =>{
    console.log(searchScope, nextCursorNumber)
    return request({
        url: `/posts/trends/like?searchScope=${searchScope}&cursor=${nextCursorNumber}`,
        method: 'get',
    })
}

export {
    createPost,
    updatePost,
    deletePost,
    setLikePost,
    unSetLikePost,
    viewDetailPost,
    viewCursorPost,
    viewTrendPosts
}