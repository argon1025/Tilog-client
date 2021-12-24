import axios from "axios";

// 인스턴스 설정
const request = axios.create({
    baseURL: process.env.REACT_APP_TILOG_SERVER
})
// 타임아웃 
request.defaults.timeout = 2500;
// 요청 인터셉터  추가
request.interceptors.request.use(
    config => {
        console.log("요청 인터셉터");
        return Promise.resolve(config)
    },
    error =>{
        console.log("요청 인터셉터 에러");
        return Promise.reject(error)
    }
)
// 응답 인터셉터  추가
request.interceptors.response.use(
    response => {
        console.log("응답 인터셉터");
        const res = response.data
        return res
    },
    error => {
        console.log("응답 인터셉터 에러");
        return Promise.reject(error.response.data)
    }
)

export default request