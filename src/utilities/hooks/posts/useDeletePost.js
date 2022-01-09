import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";
import { expiredUserSession } from "../../../Redux/action";
import { deletePost } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function useDeletePost(username) {
  const dispatch = useDispatch();

    // 포스트 삭제
    const fetchDeletePost = useCallback(async(postId, toast) => {
      try {
        await deletePost(postId);
        window.location.href = `/`
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


    return fetchDeletePost;
}