import { useCallback, useEffect, useRef, useState } from "react";
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
  // 첫 포스트 로딩
  useEffect(() => {
    let unmount = false;
    const fetchData = async () => {
      if (!unmount) {
        try {
          cursor.current = 0;
          const { id } = await getUserInfoToUserName(username);
          const response = await viewCursorPost(id, cursor.current);
          setPostList(response.data.postListData);
          cursor.current = response.data.nextCursorNumber;
          setStatusCode(200);
        } catch (error) {
          // 서버측 응답이 없는 경우
          if (!error.response) {
            if (error.message === "Network Error") {
              setError(true);
              setErrorMessage("서버와 연결이 끊겼습니다.");
              setStatusCode(502);
            } else {
              setError(true);
              setErrorMessage(error.message);
              setStatusCode(502);
            }
          } else {
            setStatusCode(error.response.data.statusCode);
            setErrorMessage(error.response.data.message.kr);
            setError(error.response.data.error);
          }
        }
      }
    };
    fetchData();
    return () => (unmount = true);
  }, [username]);

  // 다음 포스트 가져오기
  const getNextPostList = useCallback(async () => {
    try {
      const { id } = await getUserInfoToUserName(username);
      const response = await viewCursorPost(id, cursor.current);
      setPostList((oldPostList) => [
        ...oldPostList,
        ...response.data.postListData,
      ]);
      cursor.current = response.data.nextCursorNumber;
      setStatusCode(200);
    } catch (error) {
      // 서버측 응답이 없는 경우
      if (!error.response) {
        setError(true);
        setErrorMessage(error.message);
        setStatusCode(502);
      } else {
        setError(true);
        setStatusCode(error.response.data.statusCode);
        setErrorMessage(error.response.data.message.kr);
      }
    }
  }, [username]);

  return [
    cursor.current,
    postList,
    error,
    errorMessage,
    statusCode,
    getNextPostList,
  ];
}
