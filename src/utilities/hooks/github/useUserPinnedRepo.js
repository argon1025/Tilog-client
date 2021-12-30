import { useEffect, useState } from "react"
import { getPinnedRepo } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function usePinnedRepo(username) {
  // 깃허브 핀 레포
  const [gitPinnedRepo, setGitPinnedRepo] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);

  useEffect(()=>{
    // 1초 대기 후 fetching
    const fetchData = setTimeout(async () => {
      try {
        const response = await getPinnedRepo(username);
        setGitPinnedRepo(response);
        setStatusCode(200);
      } catch (error) {
        setError(error.response.data.error === 'true' ? true : false);
        setStatusCode(error.response.data.statusCode);
      }
    }, 1000)
    // setTimeout cleanup!
    return ()=> clearTimeout(fetchData);
  },[username])
    return [gitPinnedRepo, error, statusCode]
}