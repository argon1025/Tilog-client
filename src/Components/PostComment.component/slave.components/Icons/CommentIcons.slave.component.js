import React from "react";
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
}) {
  // reply optional
  const Reply = () =>
    !deletedAt ? (
      <>
        {/* 삭제 */}
        <button
          className="text-gray-400"
          onClick={() => deleteTo(commentId, replyId, toast)}
        >
          <span class="ml-1 text-xs text-gray-500">삭제</span>
        </button>
        {/* 수정*/}
        <button
          className="text-gray-400"
          onClick={() => setIsUpdateMode(!isUpdateMode)}
        >
          <span class="ml-1 text-xs text-gray-500">| 수정</span>
        </button>
      </>
    ) : (
      /* 복원*/
      <button
        className="text-gray-400"
        onClick={() => restoreTo(commentId, replyId, toast)}
      >
        <span class="ml-1 text-xs text-gray-500">삭제 취소</span>
      </button>
    );
  const Comments = () =>
    !deletedAt ? (
      <>
        {/* 삭제 */}
        <button className="text-gray-400" onClick={() => deleteTo(commentId, toast)}>
          <span class="ml-1 text-xs text-gray-500">삭제</span>
        </button>
        {/* 수정*/}
        <button
          className="text-gray-400"
          onClick={() => setIsUpdateMode(!isUpdateMode)}
        >
          <span class="ml-1 text-xs text-gray-500">| 수정</span>
        </button>
      </>
    ) : (
      /** 복원 */
      <button className="text-gray-400" onClick={() => restoreTo(commentId, toast)}>
        <span class="ml-1 text-xs text-gray-500">삭제 취소</span>
      </button>
    );
  return !replyId ? <Comments /> : <Reply />;
}
