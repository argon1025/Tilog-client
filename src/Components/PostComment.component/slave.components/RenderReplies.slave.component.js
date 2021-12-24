import React, { useState } from "react";
import {
  FaTimes,
  FaRegEdit,
  FaRegComments,
  FaCheck
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

export default function RenderReplies({replies, createReply, updateReply, deleteReply, restoreReply}) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [isReplyMode, setIsReplyMode] = useState(false);
  const [commentData, setCommentData] = useState(null);
  const session = useSelector((store) => store.AuthReducer.USERINFO);

  return(
    <div>
 {/* commentTree */}
 <div className="ml-7 pl-5 border-l-2">
          <div className="flex flex-row items-center mt-3">
          <img
            class="rounded-full w-8 h-8"
            src={replies.users_proFileImageURL}
            alt=""
          />
          <span class="ml-2 font-medium text-gray-800">{replies.users_userName}</span>
          <span class="ml-1 text-xs text-gray-400">{replies.comments_createdAt.slice(0,10)}</span>
          <div className="ml-auto">
          {
              // 작성자인가?
              session.id === replies.users_id ?
              <>
              {/** 삭제된 댓글인가?  */}
              {!replies.comments_deletedAt ? 
                /* 삭제*/
                <button className="text-gray-400" onClick={()=> deleteReply(replies.comments_id)}>
                  <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                    <FaTimes />
                  </IconContext.Provider>
                </button>  
                :
                /* 복원*/
                <button className="text-gray-400" onClick={()=> restoreReply(replies.comments_id)}>
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
          </div>
          </div>
          {/** 댓글 내용 */}
          <div className="w-full">
            {/** 댓글이 삭제되었는가? */}
            {!!replies.comments_deletedAt ?  <span>삭제된 댓글입니다.</span>
            : <>
              {
                // 수정 모드인가?
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
                      setCommentData(null);
                      setIsUpdateMode(!isUpdateMode)
                      updateReply(replies.comments_id, commentData)
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
        </div>
    </div>
  )
}
