import { useCallback, useEffect, useState } from "react";
import { getComments } from "../../api";

// 댓글 리스트 피칭
export function useComments(postsId) {
  // 댓글 리스트
  const [commentList, setCommentList] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  // 새로운 댓글 가져오기
  const fetchComments = useCallback(async () => {
    try {
      const response = await getComments(postsId);
      setCommentList(response);
      setStatusCode(200);
    } catch (error) {
      if (!error.message.kr) {
        if (error.message === "Network Error") {
          setStatusCode(502);
          setError(true);
          setErrorMessage("서버와 연결이 끊겼습니다.");
        } else {
          setStatusCode(502);
          setError(true);
          setErrorMessage(error.message);
        }
      } else {
        setStatusCode(error.statusCode);
        setError(error.error);
        setErrorMessage(error.message);
      }
    }
  }, [postsId]);

  useEffect(() => {
    let unmount = false;
    // 새로운 댓글 가져오기
    const response = async () => {
      if (!unmount) {
        try {
          const response = await getComments(postsId);
          setCommentList(response);
          setStatusCode(200);
        } catch (error) {
          // 서버측 응답이 없는 경우
          if (!error.response) {
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
    };
    response();
    return () => (unmount = true);
  }, [postsId]);

  return [commentList, error, errorMessage, statusCode, fetchComments];
}
