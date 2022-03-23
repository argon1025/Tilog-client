import { useCallback, useEffect, useRef, useState } from 'react';
import { viewTrendPosts } from '../../api';

// 트랜드 리스트 훅
export function useDayTrendPosts(searchScope) {
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

  useEffect(() => {
    cursor.current = 0;
    let unmount = false;
    // 트랜드 로딩
    const getTrendPostList = async () => {
      if (!unmount) {
        try {
          const response = await viewTrendPosts(searchScope, cursor.current);
          setTrendList(response.data.postListData);
          cursor.current = response.data.nextCursorNumber;
          setStatusCode(200);
        } catch (error) {
          // 서버측 응답이 없는 경우
          setError(true);
          if (!error.response) {
            if (error.message === 'Network Error') {
              setErrorMessage('서버와 연결이 끊겼습니다.');
              setStatusCode(502);
            } else {
              setErrorMessage(error.message);
              setStatusCode(502);
            }
          } else {
            setError(error.response.data.codeText);
            setErrorMessage(error.response.data.message.kr);
            setStatusCode(error.response.data.codeNumber);
          }
        }
      }
    };
    getTrendPostList();
    return () => (unmount = true);
  }, [searchScope]);

  // 다음 포스트 가져오기
  const getNextPostList = useCallback(async (searchScope) => {
    try {
      const response = await viewTrendPosts(searchScope, cursor.current);
      setTrendList((oldPostList) => [
        ...oldPostList,
        ...response.data.postListData,
      ]);
      cursor.current = response.data.nextCursorNumber;
      setStatusCode(200);
    } catch (error) {
      setError(true);
      // 서버측 응답이 없는 경우
      if (!error.response) {
        setErrorMessage(error.message);
        setStatusCode(502);
      } else {
        setErrorMessage(error.response.data.message.kr);
        setStatusCode(error.response.data.codeNumber);
      }
    }
  }, []);

  return [
    cursor.current,
    trendList,
    error,
    errorMessage,
    statusCode,
    getNextPostList,
  ];
}
