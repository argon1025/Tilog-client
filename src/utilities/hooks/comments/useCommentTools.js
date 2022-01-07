import { useCallback } from "react"
import { useDispatch } from "react-redux";
import { expiredUserSession } from "../../../Redux/action";
import { createComment, deleteComment, restoreComment, updateComment } from "../../api";
export function useCommentTools(postsId) {
    const dispatch = useDispatch();
      // 새로운 코멘트 작성
      const fetchWriteComment  = useCallback(async(htmlContent, toast)=>{
        try {
          await createComment(postsId, htmlContent)
        } catch (error) {
          console.log(error.response);
          // 서버측 응답이 없는 경우
          if(!error.response) {
              if(error.message === "Network Error") {
                  toast.error(`서버와 연결이 끊겼습니다.`)
              } else {
                  toast.error(`${error.message}`)
              }
          } else {
              if(error.statusCode === 403) {
                toast.error(`${error.response.data.message.kr}`)
                dispatch(expiredUserSession());
              }
              console.log(error)
              toast.error(`${error.response.data.message.kr}`)
            }
        }
      },[dispatch, postsId])
      // 코멘트 수정
      const fetchUpdateComment = useCallback(async(commentId, htmlContent, toast)=>{
        try {
          await updateComment(commentId, htmlContent)
          toast.success("댓글이 수정되었습니다.")
        } catch (error) { 
          // 서버측 응답이 없는 경우
          if(!error.response) {
            if(error.message === "Network Error") {
                toast.error(`서버와 연결이 끊겼습니다.`)
            } else {
                toast.error(`${error.message}`)
            }
        } else {
          if(error.statusCode === 403) {
            toast.error(`${error.response.data.message.kr}`)
            dispatch(expiredUserSession());
          }
            toast.error(`${error.response.data.message.kr}`)
          }
        }
      },[dispatch])
      // 코멘트 삭제
      const fetchDeleteComment = useCallback(async(commentId, toast)=>{
        try {
          console.log(commentId)
          await deleteComment(commentId)
          toast.success("댓글이 삭제되었습니다.")
        } catch (error) { 
          // 서버측 응답이 없는 경우
          if(!error.response) {
            if(error.message === "Network Error") {
                toast.error(`서버와 연결이 끊겼습니다.`)
            } else {
                toast.error(`${error.message}`)
            }
        } else {
          if(error.statusCode === 403) {
            toast.error(`${error.response.data.message.kr}`)
            dispatch(expiredUserSession());
          }
            toast.error(`${error.response.data.message.kr}`)
          }
        }
      },[dispatch])
      // 코멘트 복구
      const fetchRestoreComment = useCallback(async(commentId, toast)=>{
        try {
          await restoreComment(commentId)
          toast.success("댓글이 복구되었습니다.")
        } catch (error) { 
          // 서버측 응답이 없는 경우
          if(!error.response) {
            toast.error(`${error.message}`)
        } else {
              if(error.statusCode === 403) {
                toast.error(`${error.response.data.message.kr}`)
                dispatch(expiredUserSession());
              }
            toast.error(`${error.response.data.message.kr}`)
          }
        }
      },[dispatch])
      return [fetchWriteComment, fetchUpdateComment, fetchDeleteComment, fetchRestoreComment]
  }