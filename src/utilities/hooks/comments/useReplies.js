import { useCallback, useState } from "react"
import { createReply, deleteComment, getReplies, restoreComment, updateComment } from "../../api";

// 1. 댓글 가져오기
// 2. 댓글 작성

export function useReplies(postsId) {
  const [repliesList, setRepliesList] = useState(null);
  const lazyLoding = (commentId) => {
    setTimeout(async() => {
      const result = await getReplies(commentId); 
      setRepliesList(result);
    }, 1000);
  }
const fetchReplies = useCallback(async (commentId, toast) => {
    try {
      // 댓글 피칭
      lazyLoding(commentId);
    } catch (error) {
      console.log(error)
      toast.error(error.message.kr)
    }
  },[])
  // 새로운 코멘트 작성
  const fetchWriteReply  = useCallback(async (commentId, htmlContent, toast)=>{
    try {
      await createReply(commentId, postsId, htmlContent)
      const result = await getReplies(commentId); 
      setRepliesList(result);
    } catch (error) {
      console.log(error);
      toast.error(error.message.kr)
    }
  },[postsId])
  // 코멘트 수정
  const fetchUpdateReply = useCallback(async(commentId, repliyId, htmlContent, toast)=>{
    try {
      await updateComment(repliyId, htmlContent)
      const result = await getReplies(commentId); 
      setRepliesList(result);
      toast.success("답글이 수정되었습니다.")
    } catch (error) { 
      console.log(error);
      toast.error(error.message.kr)
    }
  },[])
  // 코멘트 삭제
  const fetchDeleteReply = useCallback(async(commentId, repliyId, toast)=>{
    try {
      await deleteComment(repliyId)
      const result = await getReplies(commentId); 
      setRepliesList(result);
      toast.success("답글이 삭제되었습니다.")
    } catch (error) { 
      console.log(error);
      toast.error(error.message.kr)
    }
  },[])
  // 코멘트 복구
  const fetchRestoreReply = useCallback(async(commentId, repliyId, toast)=>{
    try {
      await restoreComment(repliyId)
      const result = await getReplies(commentId); 
      setRepliesList(result);
      toast.success("답글이 복구되었습니다.")
    } catch (error) { 
      console.log(error);
      toast.error(error.message.kr)
    }
  },[])
  // 답글 작성
    return [repliesList, fetchReplies, fetchWriteReply, fetchUpdateReply, fetchDeleteReply, fetchRestoreReply]
}