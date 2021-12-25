import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";

// Hooks
import { useReplies } from "../../../../utilities/hooks";

// Components
import Replies from "../Replies/Replies.slave.component";
import InputReply from '../Replies/InputReply.slave.component';
import CommentIcons from "../Icons/CommentIcons.slave.component";

/**
 * @Todo 세션만료 이벤트
 * @Todo 각 이벤트 토스트
 * @Todo 스켈레톤 로딩, 수정 로딩
 */
export default function Comments({ postid, comment, deleteComment, restoreComment, updateComment }) {
  // 수정모드 상태값
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  // 입력 상태값
  const [commentData, setCommentData] = useState(null);
  // 답글 상태 및 클로저
  const [replies, getReply, createReply, updateReply, deleteReply, restoreReply] = useReplies(postid);
  // 유저 로그인 정보 (Local Storage)
  const session = useSelector((store) => store.AuthReducer.USERINFO);
  // render
  return(
    <div>
    <div className="flex flex-row items-center">
      {/** 댓글 작성자 이미지 */}
    <img
      class="rounded-full w-8 h-8"
      src={comment.users_proFileImageURL}
      alt=""
    />
    {/** 댓글 작성자 이름 */}
    <span class="ml-2 font-medium text-gray-800">{comment.users_userName}</span>
    {/** 댓글 작성일자 */}
    <span class="ml-1 text-xs text-gray-400">{comment.comments_createdAt.slice(0,10)}</span>
    <div className="ml-auto">
      {
        // 로컬에 저장된 세션과 댓글 작성자가 일치한다면
        session.id !== comment.users_id ? <></> : <CommentIcons commentId={comment.comments_id} replyId={null} deleteTo={deleteComment} restoreTo={restoreComment} deletedAt={comment.comments_deletedAt} setIsUpdateMode={setIsUpdateMode} isUpdateMode={isUpdateMode} />
      }
    </div>
    </div>
    {/** 댓글 내용 */}
    <div className="w-full">
      {/** 댓글이 삭제되었는가? */}
      {!!comment.comments_deletedAt ?  <span>삭제된 댓글입니다.</span> :
      <>
      {  // 수정 모드인가?
        !isUpdateMode ? <span>{comment.comments_htmlContent}</span> 
        :
        <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10">
          <input
            className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base text-gray-500 px-2 focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
            type="text"
            placeholder={comment.comments_htmlContent}
            onChange={(event)=>{
              setCommentData(event.target.value)
            }}
          />
          <button
            class="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
            type="submit"
            onClick={()=> {
              setIsUpdateMode(!isUpdateMode)
              updateComment(comment.comments_id, commentData)
            }}
          >
              Submit
          </button>
        </div>
      }
      </>
      }
    </div>
    {/** 답글 */}
      {!!replies ? 
      <> 
        {/** 답글, 답글 작성 렌더링 */}
        {replies.map(v=> <>
        <Replies commentId={comment.comments_id} replies={v} updateReply={updateReply} deleteReply={deleteReply} restoreReply={restoreReply}/></>)}
        <InputReply commentId={comment.comments_id} createReply={createReply} />
      </> 
          // 답글 펼치기
          : comment.childcount <= 0 
          ? <button onClick={()=> getReply(comment.comments_id)}>답글작성하기</button> 
          : <button onClick={()=> getReply(comment.comments_id)}>{comment.childcount}개의 답글 보기</button>}
    </div>
  )
}
