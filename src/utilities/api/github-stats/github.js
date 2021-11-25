import request from "./core";

// 유저 정보를 가져옵니다.
const getGithubStats = (userName)  => {
    return request({
        url: `/stats/${userName}`,
        method: 'get'
    })
}

// 유저 정보를 가져옵니다.
const getTopLanguage = (userName)  => {
    return request({
        url: `/stats/${userName}/top-language`,
        method: 'get'
    })
}

export {
    getGithubStats,
    getTopLanguage
}