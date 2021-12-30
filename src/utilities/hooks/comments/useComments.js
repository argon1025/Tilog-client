import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { expiredUserSession } from "../../../Redux/action";
import { createComment, deleteComment, getComments, restoreComment, updateComment } from "../../api";

// 1. 댓글 가져오기
// 2. 댓글 작성

export function useComments(postsId) {
  const [commentList, setCommentList] = useState(null);
  const dispatch = useDispatch();

  // 훅이 처음 호출되었을때.
  useEffect(()=>{
    // 1초 대기
    const fetchComments = setTimeout(async () => {
      try {
        // 댓글 피칭
        const result = await getComments(postsId); 
        setCommentList(result);
      } catch (error) {
        console.log(error)
      }
    }, 1000)

    // setTimeout cleanup!
    return ()=> clearTimeout(fetchComments);
  },[postsId])
  // 새로운 코멘트 작성
  const fetchWriteComment  = useCallback(async(htmlContent, toast)=>{
    try {
      await createComment(postsId, htmlContent)
      const result = await getComments(postsId); 
      setCommentList(result);
    } catch (error) {
      console.log(error);
      toast.error(error.message.kr)
    }
  },[postsId])
  // 코멘트 수정
  const fetchUpdateComment = useCallback(async(commentId, htmlContent, toast)=>{
    try {
      await updateComment(commentId, htmlContent)
      const result = await getComments(postsId); 
      setCommentList(result);
      toast.success("댓글이 수정되었습니다.")
    } catch (error) { 
      if(error.statusCode === 403) dispatch(expiredUserSession());
      toast.error(error.message.kr)
    }
  },[dispatch, postsId])
  // 코멘트 삭제
  const fetchDeleteComment = useCallback(async(commentId, toast)=>{
    try {
      await deleteComment(commentId)
      const result = await getComments(postsId); 
      setCommentList(result);
      toast.success("댓글이 삭제되었습니다.")
    } catch (error) { 
      console.log(error);
      toast.error(error.message.kr)
    }
  },[postsId])
  // 코멘트 복구
  const fetchRestoreComment = useCallback(async(commentId, toast)=>{
    try {
      await restoreComment(commentId)
      const result = await getComments(postsId); 
      setCommentList(result);
      toast.success("댓글이 복구되었습니다.")
    } catch (error) { 
      console.log(error);
      toast.error(error.message.kr)
    }
  },[postsId])
  // 답글 작성
    return [commentList, fetchWriteComment, fetchUpdateComment, fetchDeleteComment, fetchRestoreComment]
}