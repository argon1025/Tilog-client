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
    fetchData()
    return ()=> unmount = true;
  },[postId])
  return [postData, error, errorMessage, statusCode];
}