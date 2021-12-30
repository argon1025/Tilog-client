import axios from "axios";
// 인스턴스 설정
const request = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_STATS_SERVER
})
// 타임아웃 
request.defaults.timeout = 2500;
// 요청 인터셉터  추가
request.interceptors.request.use(
    config => {
        console.log("깃허브 통계 요청 인터셉터");
        return config
    },
    error =>{
        console.log("깃허브 통계 요청 인터셉터 에러");
        return Promise.reject(error)
    }
)
// 응답 인터셉터  추가
request.interceptors.response.use(
    response => {
        console.log("깃허브 통계 응답 인터셉터");
        const res = response.data
        return res
    },
    error => {
        console.log("깃허브 통계 응답 인터셉터 에러");
        console.log(error.response)
        return Promise.reject(error)
    }
)


export default request