import { useCallback, useEffect, useRef, useState } from "react"
import { getUserInfoToUserName, viewCursorPost } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function useViewCursorPost(username) {
  // 포스트 리스트
  const [postList, setPostList] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  const cursor = useRef();
  useEffect(()=>{
        // 1초 대기 후 유저 정보 Fetching
      const fetchData = async()=> {
        try {
        cursor.current = 0;
        const { id } = await getUserInfoToUserName(username);
        const response = await viewCursorPost(id, cursor.current);
        setPostList(response.data.postListData);
        cursor.current = response.data.nextCursorNumber
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
        console.log(error.message.kr)
        setStatusCode(error.statusCode);
        setError(error.error);
        setErrorMessage(error.message.kr);
      }
    }
  }
  },[username])

    // 다음 포스트 가져오기
    const getNextPostList = useCallback(async() => {
      try {
        const { id } = await getUserInfoToUserName(username)
        const response = await viewCursorPost(id, cursor.current)
        setPostList(oldPostList => [...oldPostList, ...response.data.postListData])
        cursor.current = response.data.nextCursorNumber
        setStatusCode(200);
    } catch (error) {
        setStatusCode(error.statusCode);
        setError(error.error);
        setErrorMessage(error.message);
      }
    },[username])


    return [postList, error, errorMessage, statusCode, getNextPostList];
}