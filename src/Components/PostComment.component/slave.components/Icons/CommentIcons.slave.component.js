import React from "react";
// Icons
import {
  FaTimes,
  FaRegEdit,
  FaCheck
} from "react-icons/fa";
import { IconContext } from "react-icons";

// 삭제 | 복원 렌더링
export default function CommentIcons({commentId, replyId, deleteTo, restoreTo, deletedAt, setIsUpdateMode, isUpdateMode}) {
    // reply optional
    const Reply = () => (
        !deletedAt ? 
        <>
        {/* 삭제 */ }
        <button className="text-gray-400" onClick={()=> deleteTo(commentId, replyId)}>
            <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaTimes />
            </IconContext.Provider>
        </button> 
            {/* 수정*/}
            <button className="text-gray-400" onClick={()=> setIsUpdateMode(!isUpdateMode)}>
            <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaRegEdit />
            </IconContext.Provider>
        </button>
        </>
        :
        /* 복원*/
        <button className="text-gray-400" onClick={()=> restoreTo(commentId, replyId)}>
            <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaCheck />
            </IconContext.Provider>
        </button>  
    )
    const Comments = () => (
        !deletedAt ? 
        <>
        {/* 삭제 */ }
        <button className="text-gray-400" onClick={()=> deleteTo(commentId)}>
            <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaTimes />
            </IconContext.Provider>
        </button> 
            {/* 수정*/}
            <button className="text-gray-400" onClick={()=> setIsUpdateMode(!isUpdateMode)}>
            <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaRegEdit />
            </IconContext.Provider>
        </button>
        </>
        :
        /** 복원 */
        <button className="text-gray-400" onClick={()=> restoreTo(commentId)}>
            <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaCheck />
            </IconContext.Provider>
        </button> 
    )
    return(
        !replyId ? <Comments /> : <Reply />
  )}