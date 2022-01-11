import React from "react";
// Components
import Comments from "./slave.components/Comments/Comments.slave.component";
import InputComment from "./slave.components/Comments/InputComment.slave.component";
import { useCommentTools } from "../../utilities/hooks/comments/useCommentTools";

/**
 * @Todo 스켈레톤 로딩
 * @Todo 로그인 안한 유저
 */
export default function PostCommentComponent({
  postid,
  commentsList,
  getCommentsList,
}) {
  const [createComment, updateComment, deleteComment, restoreComment] =
    useCommentTools(postid);
  return (
    <div className="flex flex-col w-full justify-start items-start my-10 px-5">
      {/* content */}
      <div className="w-full">
        {commentsList.length === 0 ? (
          <>댓글이 없습니다!</>
        ) : (
          commentsList.map((comment) => (
            <div key={comment.comments_id}>
              <Comments
                postid={postid}
                comment={comment}
                getCommentsList={getCommentsList}
                updateComment={updateComment}
                deleteComment={deleteComment}
                restoreComment={restoreComment}
              />
            </div>
          ))
        )}
        <InputComment
          createComment={createComment}
          getCommentsList={getCommentsList}
        />
      </div>
    </div>
  );
}
