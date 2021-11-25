import request from "./core";

// 유저 정보를 가져옵니다.
const fetchUserInfoFromUserName = (username)  => {
    return request({
        url: `/users/${username}`,
        method: 'get'
    })
}

export { fetchUserInfoFromUserName }