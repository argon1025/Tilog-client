import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { expiredUserSession } from "../../../Redux/action";
import { setLikePost, unSetLikePost } from "../../api";

// 좋아요!
export function useLike() {
    const dispatch = useDispatch();
    const setLike = useCallback(async(postId, toast)=> {
    try {
      await setLikePost(postId);
    } catch (error) {
      // 서버측 응답이 없는 경우
      if(!error.response) {
        if(error.message === "Network Error") {
            toast.error(`서버와 연결이 끊겼습니다.`)
        } else {
            toast.error(`${error.message}`)
        }
    } else {
      if(error.response.data.statusCode === 403) {
        toast.error(`${error.response.data.message.kr}`)
        dispatch(expiredUserSession());
      }
        else if(!error.response.data.message.kr) toast.error(`${error.response.data.message}`)
        else {
          toast.error(`${error.response.data.message.kr}`)
        }
      }
    }
  },[dispatch])

  const unSetLike = useCallback(async(postId, toast)=> {
    try {
      await unSetLikePost(postId);
    } catch (error) {
      // 서버측 응답이 없는 경우
      if(!error.response) {
        if(error.message === "Network Error") {
            toast.error(`서버와 연결이 끊겼습니다.`)
        } else {
            toast.error(`${error.message}`)
        }
    } else {
      if(error.response.data.statusCode === 403) {
        toast.error(`${error.response.data.message.kr}`)
        dispatch(expiredUserSession());
      }
        else if(!error.response.data.message.kr) toast.error(`${error.response.data.message}`)
        else {
          toast.error(`${error.response.data.message.kr}`)
        }
    }
  }
  },[dispatch])
  return [setLike, unSetLike];
}