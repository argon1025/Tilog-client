import request from "./core"


///////////////// 인가가 필요한 요청 /////////////////

// 태그를 생성합니다.
const  createTag = (body) =>{
    return request({
        url: '/tags',
        method: 'post',
        data: {
            tagsName: body.tagsName,
        },
        withCredentials: true
    })
}

export {
    createTag
}