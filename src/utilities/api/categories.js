import request from "./core"


///////////////// 인가가 필요한 요청 /////////////////

// 카테고리를 생성합니다.
const  createTag = (body) =>{
    request({
        url: '/categories',
        method: 'post',
        data: {
            categoryName: body.categoryName
        },
        withCredential: true
    })
}

export {
    createTag
}