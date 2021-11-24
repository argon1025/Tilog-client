import React, { useState } from "react";
import {
    FaTimes,
    FaRegEdit,
    FaRegComments,
  } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import InputCommentToComment from "./InputCommentToComment.slave.component";
import UpdateCommentComponent from "./updateComment.slave.component";


export default function CommentComponent({ updatecomment, deletecomment, writecommenttocomment, commentid, userinfo, htmlContent, createdAt, children }){
  const session = useSelector((store) => store.AuthReducer.USERINFO);
  const [inputBox, setInputBox] = useState(false);
  const [updateBox, setUpdateBox] = useState(false);
  const updateCancel = () =>{
    setUpdateBox(false)
  }
return (
    <>
      {/* commentHeader */}
      <div className="flex flex-row items-center">
      <img
        class="rounded-full w-8 h-8"
        src={!!userinfo && userinfo.proFileImageUrl}
        alt=""
      />
      <span class="ml-2 font-medium text-gray-800">{!!userinfo && userinfo.userName}</span>
      <span class="ml-1 text-xs text-gray-400">{createdAt}</span>
      {/* commentButtons */}
      {
        !session && session === null ? <></>:
        updateBox ? <></>:
        session.id === userinfo.id ?
      <div className="ml-auto">
        <button className="text-gray-400"
                onClick={()=> deletecomment(commentid)}
                >
          {/* 삭제*/}
          <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaTimes />
          </IconContext.Provider>
        </button>
          {/* 수정*/}
        <button className="text-gray-400"
          onClick={()=> setUpdateBox(true)}
        >
          <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaRegEdit />
          </IconContext.Provider>
        </button>
          {/* 대댓*/}
        <button className="text-gray-400"
        onClick={()=> setInputBox(!inputBox)}
        >
          <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
            <FaRegComments />
          </IconContext.Provider>
        </button>
      </div>
    :
    <></>
      }
    </div>
      {/* commentContent */}
    <div className="w-full">
      {
        updateBox ? <UpdateCommentComponent commentid={commentid} updatecomment={updatecomment} htmlcontent={htmlContent} cancel={updateCancel} /> 
        :
      <span>
          {htmlContent}
      </span>
      }
      {children}
      {inputBox ? <InputCommentToComment writecommenttocomment={writecommenttocomment}  commentid={commentid}  /> : <></>}
    </div>
    <>
    </>
    </>
  )
}