import { useEffect, useState } from "react"
import { viewDetailPost } from "../../api";

// 포스트 디테일을 가져옵니다.
export function useViewDetailPost(postId) {
  // 포스트 데이터
  const [postData, setpostData] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  useEffect(()=>{
    let unmount = false;
    // 1초간 대기
    const fetchData = async () => {
      if(!unmount) {
        try {
            const response = await viewDetailPost(postId);
            setpostData(response.data);
            setStatusCode(200);
        } catch (error) {
          if(!error.message.kr) {
            if(error.message === "Network Error") {
              console.log(error.message)
              setStatusCode(502);
              setError(true);
              setErrorMessage("서버와 연결이 끊겼습니다.");
            } else {
              setStatusCode(502);
              setError(true);
              setErrorMessage(error.message);
            }
        }else {
            setStatusCode(error.statusCode);
            setError(error.error);
            setErrorMessage(error.message.kr);
          }
        }
      }
    }
    fetchData()
    return ()=> unmount = true;
  },[postId])
  return [postData, error, errorMessage, statusCode];
}