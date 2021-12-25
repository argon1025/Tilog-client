import React from "react";
// Icons
import {
  FaRegComment,
} from "react-icons/fa";
import { IconContext } from "react-icons";

// Hooks
import { useComments } from "../../utilities/hooks"

// Components
import Comments from "./slave.components/Comments/Comments.slave.component";
import InputComment from "./slave.components/Comments/InputComment.slave.component";


export default function PostCommentComponent({postid}){
  const [comments, createComment, updateComment, deleteComment, restoreComment] = useComments(postid);
  return (
    <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3 my-10">
      <div className="flex text-gray-600 mr-3 my-5">
      {/* title */}
        <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
          <FaRegComment />
          <span className="text-xs">Comments</span>
        </IconContext.Provider>
      </div>
      {/* content */}
      <div className="w-full">
      {!comments ? <>fetching...</> : 
        comments.map(comment=>(
        <Comments
          key={comment.comments_id}
          postid={postid}
          comment={comment} 
          updateComment={updateComment}
          deleteComment={deleteComment} 
          restoreComment={restoreComment}
        />))}
        <InputComment createComment={createComment}/>
      </div>
    </div>
  );
}
