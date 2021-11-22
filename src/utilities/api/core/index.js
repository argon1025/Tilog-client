import axios from "axios";
import { server } from "../../server";

// 인스턴스 설정
const request = axios.create({
    baseURL: server
})
// 타임아웃 
request.defaults.timeout = 2500;
// 요청 인터셉터  추가
request.interceptors.request.use(
    config => {
        return config
    },
    error =>{
        console.log("요청 인터셉터 에러");
        console.log(error);
        return Promise.reject(error)
    }
)
// 응답 인터셉터  추가
request.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        console.log("응답 인터셉터 에러");
        console.log(error.response.data);
        return Promise.reject(error.response.data)
    }
)

export default request