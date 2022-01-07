import { useEffect, useState } from "react"
import { getGithubStats } from "../../api";

// 유저 깃허브 통계를 가져옵니다.
export function useUserStats(username) {
  // 깃허브 통계
  const [gitStats, setGitStats] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);

  useEffect(()=>{
    let unmount = false;
    const fetchData = async() => {
      if(!unmount) {
        try {
            const response = await getGithubStats(username)
            setGitStats(response)
            setStatusCode(200);
          } catch (error) {
            if(!error.response) {
                setError(true);
                setErrorMessage(error.message);
                setStatusCode(502);
            }
          else {
            setError(error.response.data.error === 'true' ? true : false);
            setErrorMessage(error.response.data.message);
            setStatusCode(error.response.data.statusCode);
          }
        }
      }
    }
    fetchData()
    return ()=> unmount = true;
  },[username])

  return [gitStats, error,errorMessage,  statusCode]
}