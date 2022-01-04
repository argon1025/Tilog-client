import { useEffect, useState } from "react"
import { getPinnedRepo } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function usePinnedRepo(username) {
  // 깃허브 핀 레포
  const [gitPinnedRepo, setGitPinnedRepo] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await getPinnedRepo(username);
        setGitPinnedRepo(response);
        setStatusCode(200);
      } catch (error) {
        if(!error.response) {
          setError(true);
          setStatusCode(502);
          setErrorMessage("서버에 접속할 수 없습니다.");
        }
        else {
          setError(error.response.data.error === 'true' ? true : false);
          setStatusCode(error.response.data.statusCode);
          setErrorMessage(error.response.data.message);
        }
      }
    }
    return fetchData();
  },[username])
    return [gitPinnedRepo, error, errorMessage, statusCode]
}