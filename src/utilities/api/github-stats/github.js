import request from "./core";

// 유저 정보를 가져옵니다.
const getGithubStats = (userName)  => {
    return request({
        url: `/stats/${userName}`,
        method: 'get'
    })
}

// 유저의 탑 언어를 5개 가져옵니다.
const getTopLanguage = (userName)  => {
    return request({
        url: `/stats/${userName}/top-language`,
        method: 'get'
    })
}

// 유저 핀된 레포를 가져옵니다.
const getPinnedRepo = (userName)  => {
    return request({
        url: `/repo/${userName}/pinned-repositories`,
        method: 'get'
    })
}

export {
    getGithubStats,
    getTopLanguage,
    getPinnedRepo
}