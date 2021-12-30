import { useEffect, useState } from "react"
import { getUserInfoToUserName } from "../../api";

// 유저 네임으로 유저 정보를 가져옵니다.
export function useUserInfoToUserName(username) {
  //유저 정보
  const [userInfo, setUserInfo] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  useEffect(()=>{
    // 1초 대기 후 유저 정보 Fetching
    const fetchData = setTimeout(async()=> {
      try {
          const response = await getUserInfoToUserName(username);
          setUserInfo(response);
          setStatusCode(200);
      } catch (error) {
        setStatusCode(error.statusCode);
        setError(error.error);
      }
    }, 1000)

    // setTimeout cleanup!
    return ()=> clearTimeout(fetchData);
  },[username])
  return [userInfo, error, statusCode]
}