import { useEffect, useState } from "react"
import { getTopLanguage } from "../../api";

// 유저 깃허브 top langauage통계를 가져옵니다.
export function useUserTopLanguage(username) {
  // 깃 탑랭귀지
  const [gitTopLanguage, setGitTopLanguage] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);

    useEffect(()=>{
      let unmount = false
    const fetchData = async () => {
      if(!unmount) {
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
          if(!error.response) {
            setError(true);
            setStatusCode(502);
            setErrorMessage("서버와 연결이 끊겼습니다.");
          }
          else {
            setError(error.response.data.error === 'true' ? true : false);
            setStatusCode(error.response.data.statusCode);
            setErrorMessage(error.response.data.message);
          }
        }
      }
    }
    fetchData();
    return ()=> unmount = true;
    },[username])
    return [gitTopLanguage, error, errorMessage, statusCode]
}