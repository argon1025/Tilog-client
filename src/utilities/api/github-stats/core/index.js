import axios from 'axios';
// 인스턴스 설정
const instance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_STATS_SERVER,
  headers: {
    retry: 0,
  },
});

// 응답 요청
const reconnection = (milliseconds, originalRequest) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(instance(originalRequest)), milliseconds);
  });
};

// 타임아웃
instance.defaults.timeout = 10000;
// 요청 인터셉터  추가
instance.interceptors.request.use(
  (config) => {
    console.log('[Github Stats] Request Interceptors');
    return config;
  },
  (error) => {
    console.log('[Github Stats] Request Interceptors Error');
    return Promise.reject(error);
  }
);
// 응답 인터셉터  추가
instance.interceptors.response.use(
  (response) => {
    console.log('[Github Stats] Response Interceptors');
    // 1초 대기 후 응답
    return response.data;
  },
  (error) => {
    console.log('[Github Stats] Response Interceptors Error');
    const { config, message } = error;
    const { status } = error.response;
    console.log(status);
    if (!!status && status === 401) {
      config.headers.retry += 1;
      console.log(`changeToken... ${config.headers.retry}/5`);
      return reconnection(10000, config);
    }
    // 요청한 서버가 죽어있는 경우. 최대 5회 재접속 요청을 합니다.
    if (message === 'Network Error' && config.headers.retry < 5) {
      config.headers.retry += 1;
      console.log(
        `Connect Error Try Reconnecting... ${config.headers.retry}/5`
      );
      return reconnection(10000, config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
