import request from "./core";


///////////////// 인가가 필요한 요청 /////////////////

// 유저 정보를 가져옵니다.
const fetchUserInfo = ()  => {
    return request({
        url: `/auth/userinfo`,
        method: 'get',
        withCredentials: true
    })
}
// 로그아웃합니다.
const logout = () => {
    return request({
    url: 'auth/logout',
    method: 'get',
    withCredentials: true
    })
}

export {
    fetchUserInfo,
    logout
}