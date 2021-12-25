import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
// Component
import IsDeletedComments from "../Icons/CommentIcons.slave.component";

export default function Replies({replies, commentId, updateReply, deleteReply, restoreReply}) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [commentData, setCommentData] = useState(null);
  const session = useSelector((store) => store.AuthReducer.USERINFO);

  return(
    <div key={replies.comments_id}>
        {/* commentTree */}
        <div className="ml-7 pl-5 border-l-2">
          <div className="flex flex-row items-center mt-3">
          <img
            class="rounded-full w-8 h-8"
            src={replies.users_proFileImageURL}
            alt=""
          />
          <span>코멘트{commentId}</span>
          <span>답글{replies.comments_id}</span>
          <span class="ml-2 font-medium text-gray-800">{replies.users_userName}</span>
          <span class="ml-1 text-xs text-gray-400">{replies.comments_createdAt.slice(0,10)}</span>
          <div className="ml-auto">
      {
        // 로컬에 저장된 세션과 댓글 작성자가 일치한다면
        session.id !== replies.users_id ? <></> : <IsDeletedComments commentId={commentId} replyId={replies.comments_id} deleteTo={deleteReply} restoreTo={restoreReply} deletedAt={replies.comments_deletedAt} setIsUpdateMode={setIsUpdateMode} isUpdateMode={isUpdateMode} />
      }
          </div>
          </div>
          {/** 댓글 내용 */}
          <div className="w-full">
            {/** 댓글이 삭제되었는가? */}
            {!!replies.comments_deletedAt ?  <span>삭제된 답글입니다.</span>
            : <>
              { // 수정 모드인가?
                !isUpdateMode ? <span>{replies.comments_htmlContent}</span> 
                :
                <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10">
                  <input
                    className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base text-gray-500 px-2 focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                    type="text"
                    placeholder={replies.comments_htmlContent}
                    onChange={(event)=>{
                      setCommentData(event.target.value)
                    }}
                  />
                  <button
                    class="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                    type="submit"
                    onClick={()=> {
                      setIsUpdateMode(!isUpdateMode)
                      updateReply(commentId, replies.comments_id, commentData)
                    }}
                  >
                      Submit
                  </button>
                </div>
              }
            </>
            }
          </div>
        </div>
    </div>
  )
}
