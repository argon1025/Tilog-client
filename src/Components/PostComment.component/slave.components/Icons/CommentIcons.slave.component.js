import React, { useState } from "react";
// Toast
import { toast } from "react-hot-toast";

// Icons
import { IconContext } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// 삭제 | 복원 렌더링
export default function CommentIcons({
  commentId,
  replyId,
  deleteTo,
  restoreTo,
  deletedAt,
  setIsUpdateMode,
  isUpdateMode,
  getCommentsList,
}) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  // reply optional
  const Reply = () =>
    !deletedAt ? (
      <>
        {isDeleted || isUpdated ? (
          <IconContext.Provider
            value={{
              className: "animate-spin mr-1 w-5 h-5 text-gray-400",
            }}
          >
            {/* 로딩 아이콘 */}
            <AiOutlineLoading3Quarters />
          </IconContext.Provider>
        ) : (
          <>
            {/* 삭제 */}
            <button
              className="transition duration-300 ease-in-out text-gray-800 hover:text-blue-500 dark:text-gray-200"
              onClick={async () => {
                setIsDeleted(true);
                await deleteTo(commentId, replyId, toast);
                setIsDeleted(false);
              }}
            >
              <span class="ml-1 text-xs ">답글 삭제</span>
            </button>
            {/* 수정*/}
            <button
              className="transition duration-300 ease-in-out text-gray-800 hover:text-blue-500 dark:text-gray-200"
              onClick={() => {
                setIsUpdated(true);
                setIsUpdateMode(!isUpdateMode);
                setIsUpdated(false);
              }}
            >
              <span class="ml-1 text-xs">| 답글 수정</span>
            </button>
          </>
        )}
      </>
    ) : (
      <>
        {isDeleted ? (
          <IconContext.Provider
            value={{
              className:
                "animate-spin mr-1 w-5 h-5 text-gray-400 dark:text-blue-500",
            }}
          >
            {/* 로딩 아이콘 */}
            <AiOutlineLoading3Quarters />
          </IconContext.Provider>
        ) : (
          /* 복원*/
          <button
            className="transition duration-300 ease-in-out text-gray-800 hover:text-blue-500 dark:text-gray-200"
            onClick={async () => {
              setIsDeleted(true);
              await restoreTo(commentId, replyId, toast);
              setIsDeleted(false);
            }}
          >
            <span class="ml-1 text-xs ">삭제 취소</span>
          </button>
        )}
      </>
    );
  const Comments = () =>
    !deletedAt ? (
      <>
        {isDeleted || isUpdated ? (
          <IconContext.Provider
            value={{
              className:
                "animate-spin mr-1 w-5 h-5 text-gray-400 dark:text-blue-500",
            }}
          >
            {/* 로딩 아이콘 */}
            <AiOutlineLoading3Quarters />
          </IconContext.Provider>
        ) : (
          <>
            {/**삭제 */}
            <button
              className="transition duration-300 ease-in-out text-gray-800 hover:text-blue-500 dark:text-gray-200"
              onClick={async () => {
                setIsDeleted(true);
                await deleteTo(commentId, toast);
                await getCommentsList();
                setIsDeleted(false);
              }}
            >
              <span class="ml-1 text-xs ">삭제</span>
            </button>
            {/** 수정 */}
            <button
              className="transition duration-300 ease-in-out text-gray-800 hover:text-blue-500 dark:text-gray-200"
              onClick={() => {
                setIsUpdated(true);
                setIsUpdateMode(!isUpdateMode);
                setIsUpdated(false);
              }}
            >
              <span class="ml-1 text-xs ">| 수정</span>
            </button>
          </>
        )}
      </>
    ) : (
      <>
        {isDeleted ? (
          <IconContext.Provider
            value={{
              className:
                "animate-spin mr-1 w-5 h-5 text-gray-400 dark:text-blue-500",
            }}
          >
            {/* 로딩 아이콘 */}
            <AiOutlineLoading3Quarters />
          </IconContext.Provider>
        ) : (
          /* 복원*/
          <button
            className="transition duration-300 ease-in-out text-gray-800 hover:text-blue-500 dark:text-gray-200"
            onClick={async () => {
              setIsDeleted(true);
              await restoreTo(commentId, toast);
              await getCommentsList();
              setIsDeleted(false);
            }}
          >
            <span class="ml-1 text-xs ">삭제 취소</span>
          </button>
        )}
      </>
    );
  return !replyId ? <Comments /> : <Reply />;
}
