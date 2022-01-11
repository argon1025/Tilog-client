import React, { useState } from "react";
import toast from "react-hot-toast";

export default function InputComment({ createComment, getCommentsList }) {
  const [commentData, setCommentData] = useState("");
  return (
    /* Comment input */
    <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10 dark:bg-gray-700">
      <input
        className="px-4 border border-gray-300 w-full h-full rounded-l-lg text-sm  focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50  dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
        type="text"
        value={commentData}
        placeholder="댓글을 작성해주세요."
        onChange={(event) => {
          setCommentData(event.target.value);
        }}
      />
      <button
        class="p-3 w-20 border-t border-b border-r border-gray-300 rounded-r-lg text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        type="submit"
        onClick={async () => {
          await createComment(commentData, toast);
          await getCommentsList();
          setCommentData("");
        }}
      >
        남기기
      </button>
    </div>
  );
}
