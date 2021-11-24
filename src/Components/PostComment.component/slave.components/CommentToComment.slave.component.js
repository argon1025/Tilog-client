import React, { useState } from "react";
import {
    FaTimes,
    FaRegEdit,
  } from "react-icons/fa";
  import { IconContext } from "react-icons";
  import { useSelector } from "react-redux";
  import UpdateCommentComponent from "./updateComment.slave.component"

export default function CommentToCommentComponent({ updatecomment, deletecomment, commentid, userinfo, htmlContent, createdAt}){
  const session = useSelector((store) => store.AuthReducer.USERINFO);
  const [updateBox, setUpdateBox] = useState(false);
  const updateCancel = () =>{
    setUpdateBox(false)
  }
return (
    <>
          {/* commentTree */}
          <div className="ml-7 pl-5 border-l-2">
          <div className="flex flex-row items-center mt-3">
          <img
            class="rounded-full w-8 h-8"
            src={!!userinfo && userinfo.proFileImageUrl}
            alt=""
          />
        <span class="ml-2 font-medium text-gray-800">{!!userinfo && userinfo.userName}</span>
            <span class="ml-1 text-xs text-gray-400">{createdAt}</span>
            {/* commentButtons */}
            {
              session === null ? <></>:
              session.id === userinfo.id
              ?
              <div className="ml-auto">
              <button className="text-gray-400"
                onClick={()=> deletecomment(commentid)}
              >
                <IconContext.Provider
                  value={{ className: "ml-1 w-4 h-4" }}
                  >
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
            </div>
            :
            <></>
            }
          </div>
          {
        updateBox ? <UpdateCommentComponent commentid={commentid} updatecomment={updatecomment} htmlcontent={htmlContent} cancel={updateCancel} /> 
        :
      <span>
          {htmlContent}
      </span>
      }
        </div>
    </>
  )
}