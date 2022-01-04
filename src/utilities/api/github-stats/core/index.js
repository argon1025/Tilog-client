import axios from "axios";
// 인스턴스 설정
const instance = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_STATS_SERVER,
    headers: {
        retry: 0
    }
})

// 응답 요청
const reconnection = (milliseconds, originalRequest) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(instance(originalRequest)),milliseconds);
    });
};

// 응답 지연
const lazyResponse = (milliseconds, originalRequest) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(originalRequest), milliseconds);
    });
};


// 타임아웃 
instance.defaults.timeout = 10000;
// 요청 인터셉터  추가
instance.interceptors.request.use(
    config => {
        console.log("[Github Stats] Request Interceptors");
        return config
    },
    error =>{
        console.log("[Github Stats] Request Interceptors Error");
        return Promise.reject(error)
    }
)
// 응답 인터셉터  추가
instance.interceptors.response.use(
    response => {
        console.log("[Github Stats] Response Interceptors");
        // 1초 대기 후 응답
        return lazyResponse(1000, response.data)
    },
    error => {
        console.log("[Github Stats] Response Interceptors Error");
        const { config, message } = error;
        // 요청한 서버가 죽어있는 경우. 최대 5회 재접속 요청을 합니다.
        if(message === "Network Error" && config.headers.retry <= 1) {
            console.log(`Connect Error Try Reconnecting... ${config.headers.retry}/5`);
            config.headers.retry += 1;
            return reconnection(10000, config)
        }
        else {
            console.log(`Error Reject`);
            return Promise.reject(error)
        }
    }
)


export default instance