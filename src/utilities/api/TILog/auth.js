import request from "./core";
const setUserinfo = () => {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:3000/auth/github/';
    xhr.open('GET', url);
    xhr.send();
}

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
    logout,
    setUserinfo
}