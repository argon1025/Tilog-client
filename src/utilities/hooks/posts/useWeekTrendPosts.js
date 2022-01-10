import { useCallback, useEffect, useRef, useState } from "react"
import { viewTrendPosts } from "../../api";

// 트랜드 리스트 훅
export function useWeekTrendPosts(searchScope) {
  // 주간 트랜드 리스트
  const [trendList, setTrendList] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  // 커서 초기화
  const cursor = useRef();
  cursor.current = 0;

  useEffect(() => {
    let unmount = false;
  // 트랜드 로딩
  const getTrendPostList = async()=> {
    if(!unmount){
      try {
        const response = await viewTrendPosts(searchScope, cursor.current);
        setTrendList(response.data.postListData);
        cursor.current = response.data.nextCursorNumber
        setStatusCode(200);
      } catch (error) {
        // 서버측 응답이 없는 경우
        if(!error.response) {
          if(error.message === "Network Error") {
            setError(true);
            setErrorMessage("서버와 연결이 끊겼습니다.");
            setStatusCode(502);
          } else {
            setError(true);
            setErrorMessage(error.message);
            setStatusCode(502);
          }
        } else {
          setError(error.response.data.error);
          setErrorMessage(error.response.data.message.kr);
          setStatusCode(error.response.data.statusCode);
        }
      }
    }
  }
  getTrendPostList();
  return ()=> unmount = true;
  },[searchScope])

    // 다음 포스트 가져오기
    const getNextPostList = useCallback(async(searchScope) => {
      try {
        const response = await viewTrendPosts(searchScope, cursor.current);
        setTrendList(oldPostList => [...oldPostList, ...response.data.postListData]);
        cursor.current = response.data.nextCursorNumber;
        console.log(cursor.current);
        setStatusCode(200);
    } catch (error) {
        // 서버측 응답이 없는 경우
        if(!error.response) {
            setError(true);
            setErrorMessage(error.message);
            setStatusCode(502);
        } else {
          setError(true);
          setErrorMessage(error.response.data.message.kr);
          setStatusCode(error.response.data.statusCode);
        }
      }
    },[])


    return [trendList, error, errorMessage, statusCode, getNextPostList];
}