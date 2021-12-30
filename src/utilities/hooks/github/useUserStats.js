import { useEffect, useState } from "react"
import { getGithubStats } from "../../api";

// 유저 깃허브 통계를 가져옵니다.
export function useUserStats(username) {
  // 깃허브 통계
  const [gitStats, setGitStats] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);

  useEffect(()=>{
    // 1초 대기 후 fetching
    const fetchData = setTimeout(async() => {
      try {
          const response = await getGithubStats(username)
          setGitStats(response)
          setStatusCode(200);
        } catch (error) {
        setError(error.response.data.error === 'true' ? true : false);
        setStatusCode(error.response.data.statusCode);
      }
    }, 1000)
    // setTimeout cleanup!
    return ()=> clearTimeout(fetchData)
  },[username])

  return [gitStats, error, statusCode]
}