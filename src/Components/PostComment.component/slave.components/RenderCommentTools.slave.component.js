import { useState } from "react";
import { useSelector } from "react-redux";
import {
    FaTimes,
    FaRegEdit,
    FaRegComments,
    FaCheck
  } from "react-icons/fa";
  import { IconContext } from "react-icons";

export default function RenderCommentTools({ comment, deleteComment, restoreComment }) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const session = useSelector((store) => store.AuthReducer.USERINFO);
    return (
        <div className="ml-auto">
            {/** 댓글 오너 확인 */}
            {session.id !== comment.users_id ? <></> : <>
                {/** 삭제 여부 확인 */}
                {!comment.comments_deletedAt ? 
                    <button className="text-gray-400" onClick={()=> deleteComment(comment.comments_id)}>
                    {/* 삭제*/}
                        <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                        <FaTimes />
                        </IconContext.Provider>
                    </button>  
                    :
                    <button className="text-gray-400" onClick={()=> restoreComment(comment.comments_id)}>
                    {/* 복원*/}
                        <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                        <FaCheck />
                        </IconContext.Provider>
                    </button>  
                }
                {/** 수정 */}
                <button className="text-gray-400" onClick={()=> setIsUpdateMode(comment.comments_id)}>
                <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                    <FaRegEdit />
                </IconContext.Provider>
                </button>
            </>}
        </div>
    )
}