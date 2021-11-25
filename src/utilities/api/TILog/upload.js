import request from "./core"


///////////////// 인가가 필요한 요청 /////////////////

// 이미지 파일을 업로드합니다.
const  uploadImage = (formData) =>{
    return request({
        url: '/files/images',
        method: 'post',
        headers:{
            'Content-Type': 'multipart/form-data'
        },
        data: formData
        ,
        withCredentials: true
    })
}

export {
    uploadImage
}