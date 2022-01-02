import { useEffect, useState } from "react"
import { viewDetailPost } from "../../api";

// 포스트 디테일을 가져옵니다.
export function useViewDetailPost(postId) {
  // 포스트 데이터
  const [postData, setpostData] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  useEffect(()=>{
    // 1초간 대기
      const fetchData = setTimeout(async () => {
          try {
              const response = await viewDetailPost(postId);
              setpostData(response.data);
              setStatusCode(200);
          } catch (error) {
            setError(error.error);
            setStatusCode(error.statusCode);
          }
        }, 1000)
      
    // setTimeout cleanup!
    return ()=> clearTimeout(fetchData);
    },[postId])
    return [postData, error, statusCode];
}