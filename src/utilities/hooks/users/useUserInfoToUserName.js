import { useEffect, useState } from "react"
import { getUserInfoToUserName } from "../../api";

// 유저 네임으로 유저 정보를 가져옵니다.
export function useUserInfoToUserName(username) {
  //유저 정보
  const [userInfo, setUserInfo] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  useEffect(()=>{
    let unmount = false;
    // 1초 대기 후 유저 정보 Fetching
    const fetchData = async()=> {
      if(!unmount) {
        try {
            const response = await getUserInfoToUserName(username);
            setUserInfo(response);
            setStatusCode(200);
        } catch (error) {
          // 서버측 응답이 없는 경우
          if(!error.response) {
              setError(true);
              setErrorMessage(error.message);
              setStatusCode(502);
            } else {
              setError(error.response.data.error);
              setErrorMessage(error.response.data.message.kr);
              setStatusCode(error.response.data.statusCode);
              }
          }
      }
    }
    fetchData();
    return ()=> unmount = true;
  },[username])
  return [userInfo, error, errorMessage, statusCode]
}