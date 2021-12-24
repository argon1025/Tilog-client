import React, { useState } from "react";
import {
  FaTimes,
  FaRegEdit,
  FaCheck
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { useReplies } from "../../../utilities/hooks";
import RenderReplies from "./RenderReplies.slave.component";
import RenderInputReply from "./RenderInputReply.slave.component";

export default function RenderComments({ postid, comment, deleteComment, restoreComment, updateComment }) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [replies, getReply, createReply, updateReply, deleteReply, restoreReply] = useReplies(postid);
  const [commentData, setCommentData] = useState(null);
  const session = useSelector((store) => store.AuthReducer.USERINFO);

  return(
    <div key={comment.comments_id}>
          <div>
          <div className="flex flex-row items-center">
          <img
            class="rounded-full w-8 h-8"
            src={comment.users_proFileImageURL}
            alt=""
          />
          <span class="ml-2 font-medium text-gray-800">{comment.users_userName}</span>
          <span class="ml-1 text-xs text-gray-400">{comment.comments_createdAt.slice(0,10)}</span>
          <div className="ml-auto">
          {
              // 작성자인가?
              session.id === comment.users_id ?
              <>
              {/** 삭제된 댓글인가?  */}
              {!comment.comments_deletedAt ? 
                /* 삭제*/
                <button className="text-gray-400" onClick={()=> deleteComment(comment.comments_id)}>
                  <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                    <FaTimes />
                  </IconContext.Provider>
                </button>  
                :
                /* 복원*/
                <button className="text-gray-400" onClick={()=> restoreComment(comment.comments_id)}>
                  <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                    <FaCheck />
                  </IconContext.Provider>
                </button>  
              }
                {/* 수정*/}
              <button className="text-gray-400"
                onClick={()=> setIsUpdateMode(!isUpdateMode)}
              >
                <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                  <FaRegEdit />
                </IconContext.Provider>
              </button>
            </>
            :
            <></>
            }
            {/* 대댓*/}
            {/* <button className="text-gray-400"
            // onClick={()=> setInputBox(!inputBox)}
            >
              <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                <FaRegComments />
              </IconContext.Provider>
          </button> */}
          </div>
          </div>
          {/** 댓글 내용 */}
          <div className="w-full">
            {/** 댓글이 삭제되었는가? */}
            {!!comment.comments_deletedAt ?  <span>삭제된 댓글입니다.</span>
            : <>
              {
                // 수정 모드인가?
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
                      setCommentData(null);
                      setIsUpdateMode(!isUpdateMode)
                      updateComment(comment.comments_id, commentData)
                    }}
                  >
                      Submit
                  </button>
                </div>
              }
            </>
            // 
            }
          </div>
          {/** 답글 */}
            {!!replies ? <> {replies.map(v=> <>
              <RenderReplies replies={v} createReply={createReply} updateReply={updateReply} deleteReply={deleteReply} restoreReply={restoreReply}/></>)}<RenderInputReply commentId={comment.comments_id} createReply={createReply} />
              </> : comment.childcount <= 0 ? <button onClick={()=> getReply(comment.comments_id)}>답글작성하기</button> : <button onClick={()=> getReply(comment.comments_id)}>{comment.childcount}개의 답글 보기</button>}
          </div>
    </div>
  )
}
