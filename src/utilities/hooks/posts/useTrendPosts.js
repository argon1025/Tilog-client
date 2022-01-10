import { useCallback, useEffect, useRef, useState } from "react"
import { viewTrendPosts } from "../../api";

// 트랜드 리스트 훅
export function useTrendPosts() {
  // 일간 트랜드 리스트
  const [dayTrendList, setDayTrendList] = useState(null);
  // 주간 트랜드 리스트
  const [weekTrendList, setWeekTrendList] = useState(null);
  // 월간 트랜드 리스트
  const [monthTrendList, setMonthTrendList] = useState(null);
  // 에러 상태
  const [error, setError] = useState(false);
  // 에러 메세지
  const [errorMessage, setErrorMessage] = useState(null);
  // http 상태 코드
  const [statusCode, setStatusCode] = useState(null);
  const dayCursor = useRef();
  const weekCursor = useRef();
  const MonthCursor = useRef();
  // 커서 초기화
  dayCursor.current = 0;
  weekCursor.current = 0;
  MonthCursor.current = 0;

  // 트랜드 로딩
  const getTrendPostList = useCallback(async(searchScope)=> {
    try {
      if(searchScope === "DAY") {
        const response = await viewTrendPosts(searchScope, dayCursor.current);
        setDayTrendList(response.data.postListData);
        dayCursor.current = response.data.nextCursorNumber
      }
      if(searchScope === "WEEK") {
        const response = await viewTrendPosts(searchScope, weekCursor.current);
        setWeekTrendList(response.data.postListData);
        weekCursor.current = response.data.nextCursorNumber
      }
      if(searchScope === "MONTH") {
        const response = await viewTrendPosts(searchScope, MonthCursor.current);
        setMonthTrendList(response.data.postListData);
        MonthCursor.current = response.data.nextCursorNumber
      }
      console.log(dayCursor.current)
      console.log(weekCursor.current)
      console.log(MonthCursor.current)
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
  },[])

    // 다음 포스트 가져오기
    const getNextPostList = useCallback(async(searchScope) => {
      try {
        if(searchScope === "DAY") {
          const response = await viewTrendPosts(searchScope, dayCursor.current);
          setDayTrendList(oldPostList => [...oldPostList, ...response.data.postListData]);
          dayCursor.current = response.data.nextCursorNumber
        }
        if(searchScope === "WEEK") {
          const response = await viewTrendPosts(searchScope, weekCursor.current);
          setWeekTrendList(oldPostList => [...oldPostList, ...response.data.postListData]);
          weekCursor.current = response.data.nextCursorNumber
        }
        if(searchScope === "MONTH") {
          const response = await viewTrendPosts(searchScope, MonthCursor.current);
          setMonthTrendList(oldPostList => [...oldPostList, ...response.data.postListData]);
          MonthCursor.current = response.data.nextCursorNumber
        }
        console.log(dayCursor.current)
        console.log(weekCursor.current)
        console.log(MonthCursor.current)
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


    return [dayTrendList, weekTrendList, monthTrendList, error, errorMessage, statusCode, getTrendPostList, getNextPostList];
}