import { useCallback, useEffect, useState } from "react"
import { createComment, deleteComment, getComments, restoreComment, updateComment } from "../../api";

// 1. 댓글 가져오기
// 2. 댓글 작성

export function useComments(postsId) {
  const [commentList, setCommentList] = useState(null);
  // 훅이 처음 호출되었을때.
  useEffect(()=>{
    const fetchComments = async () => {
      try {
        // 댓글 피칭
        const result = await getComments(postsId); 
        setCommentList(result);
      } catch (error) {
        console.log(error)
      }
    }
    fetchComments()
  },[postsId])
  // 새로운 코멘트 작성
  const fetchWriteComment  = useCallback(async(htmlContent)=>{
    try {
      await createComment(postsId, htmlContent)
      const result = await getComments(postsId); 
      setCommentList(result);
    } catch (error) {
      console.log(error);
    }
  },[postsId])
  // 코멘트 수정
  const fetchUpdateComment = useCallback(async(commentId, htmlContent)=>{
    try {
      await updateComment(commentId, htmlContent)
      const result = await getComments(postsId); 
      setCommentList(result);
    } catch (error) { 
      console.log(error);
    }
  },[postsId])
  // 코멘트 삭제
  const fetchDeleteComment = useCallback(async(commentId)=>{
    try {
      await deleteComment(commentId)
      const result = await getComments(postsId); 
      setCommentList(result);
    } catch (error) { 
      console.log(error);
    }
  },[postsId])
  // 코멘트 복구
  const fetchRestoreComment = useCallback(async(commentId)=>{
    try {
      await restoreComment(commentId)
      const result = await getComments(postsId); 
      setCommentList(result);
    } catch (error) { 
      console.log(error);
    }
  },[postsId])
  // 답글 작성
    return [commentList, fetchWriteComment, fetchUpdateComment, fetchDeleteComment, fetchRestoreComment]
}