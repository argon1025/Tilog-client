import React, { useEffect, useState } from "react";
// Toast
import { toast } from "react-hot-toast";

// 삭제 | 복원 렌더링
export default function CommentIcons({
  commentId,
  replyId,
  deleteTo,
  restoreTo,
  deletedAt,
  setIsUpdateMode,
  isUpdateMode,
  getCommentsList
}) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  // reply optional
  const Reply = () =>
    !deletedAt ? (
      <>
      {isDeleted || isUpdated? <>뺑글뺑글</> :
      <>
        {/* 삭제 */}
        <button
          className="text-gray-400"
          onClick={async() => {
            setIsDeleted(true);
            await deleteTo(commentId, replyId, toast);
            setIsDeleted(false);
          }}>
          <span class="ml-1 text-xs text-gray-500">삭제</span>
        </button>
        {/* 수정*/}
        <button
          className="text-gray-400"
          onClick={() => {
            setIsUpdated(true);
            setIsUpdateMode(!isUpdateMode); 
            setIsUpdated(false);
          }}>
          <span class="ml-1 text-xs text-gray-500">| 수정</span>
        </button>
        </>
        }
      </>
    ) : (
      <>
      {isDeleted ? <>뺑글뺑글</> :
      /* 복원*/
      <button
        className="text-gray-400"
        onClick={async() => {
          setIsDeleted(true);
          await restoreTo(commentId, replyId, toast); 
          setIsDeleted(false);
      }}>
        <span class="ml-1 text-xs text-gray-500">삭제 취소</span>
      </button>
      }
      </>
    );
  const Comments = () =>
    !deletedAt ? (
      <>
        {isDeleted || isUpdated ? <>뺑글뺑글</> : <>
        {/**삭제 */}
        <button className="text-gray-400" onClick={async() => {
          setIsDeleted(true);
          await deleteTo(commentId, toast);
          await getCommentsList()
          setIsDeleted(false);
          }}>
          <span class="ml-1 text-xs text-gray-500">삭제</span>
        </button>
        {/** 수정 */}
        <button
          className="text-gray-400"
          onClick={() => {
            setIsUpdated(true);
            setIsUpdateMode(!isUpdateMode)
            setIsUpdated(false);
          }}
        >
          <span class="ml-1 text-xs text-gray-500">| 수정</span>
        </button>
        </>
      }
      </>
    ) : (
      <>
      {isDeleted ? <>뺑글뺑글</> :
      /* 복원*/
      <button
        className="text-gray-400"
        onClick={async() => {
          setIsDeleted(true);
          await restoreTo(commentId, toast); 
          await getCommentsList()
          setIsDeleted(false);
      }}>
        <span class="ml-1 text-xs text-gray-500">삭제 취소</span>
      </button>
      }
      </>
    );
  return !replyId ? <Comments /> : <Reply />;
}
