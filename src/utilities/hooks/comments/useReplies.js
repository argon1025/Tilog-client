import { useCallback, useState } from "react"
import { createReply, deleteComment, getReplies, restoreComment, updateComment } from "../../api";

// 1. 댓글 가져오기
// 2. 댓글 작성

export function useReplies(postsId) {
  const [repliesList, setRepliesList] = useState(null);
  // 훅이 처음 호출되었을때.

const fetchReplies = useCallback(async (commentId) => {
    try {
      // 댓글 피칭
      const result = await getReplies(commentId); 
      setRepliesList(result);
    } catch (error) {
      console.log(error)
    }
  },[])
  // 새로운 코멘트 작성
  const fetchWriteReply  = useCallback(async (commentId, htmlContent)=>{
    try {
      await createReply(commentId, postsId, htmlContent)
      const result = await getReplies(commentId); 
      setRepliesList(result);
    } catch (error) {
      console.log(error);
    }
  },[postsId])
  // 코멘트 수정
  const fetchUpdateReply = useCallback(async(commentId, repliyId, htmlContent)=>{
    try {
      await updateComment(repliyId, htmlContent)
      const result = await getReplies(commentId); 
      setRepliesList(result);
    } catch (error) { 
      console.log(error);
    }
  },[])
  // 코멘트 삭제
  const fetchDeleteReply = useCallback(async(commentId, repliyId)=>{
    try {
      await deleteComment(repliyId)
      const result = await getReplies(commentId); 
      setRepliesList(result);
    } catch (error) { 
      console.log(error);
    }
  },[])
  // 코멘트 복구
  const fetchRestoreReply = useCallback(async(commentId, repliyId)=>{
    try {
      await restoreComment(repliyId)
      const result = await getReplies(commentId); 
      setRepliesList(result);
    } catch (error) { 
      console.log(error);
    }
  },[])
  // 답글 작성
    return [repliesList, fetchReplies, fetchWriteReply, fetchUpdateReply, fetchDeleteReply, fetchRestoreReply]
}