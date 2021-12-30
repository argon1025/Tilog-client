import { useEffect, useState } from "react"
import { getTopLanguage } from "../../api";

// 유저 깃허브 top langauage통계를 가져옵니다.
export function useUserTopLanguage(username) {
  // 
  const [gitTopLanguage, setGitTopLanguage] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
    useEffect(()=>{
    const fetchData = setTimeout(async () => {
      try {
        let totalSize = 0
        const response = await getTopLanguage(username)
        Object.keys(response).forEach( v => {
            totalSize += response[v].size;
        })
        Object.keys(response).forEach( v => {
          response[v].percent = ((response[v].size / totalSize) * 100).toFixed(0)
        })
        setGitTopLanguage(response)
        setStatusCode(200)
      } catch (error) {
        setError(error.response.data.error === 'true' ? true : false);
        setStatusCode(error.response.data.statusCode);
      }
    }, 1000)
    // setTimeout cleanup!
    return ()=> clearTimeout(fetchData)
    },[username])
    return [gitTopLanguage, error, statusCode]
}