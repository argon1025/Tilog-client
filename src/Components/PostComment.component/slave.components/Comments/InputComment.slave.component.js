import React, { useState } from "react";
import toast from "react-hot-toast";

export default function InputComment({ createComment, getCommentsList }) {
  const [commentData, setCommentData] = useState("");
  return (
    /* Comment input */
    <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10">
      <input
        className="px-4 border border-gray-300 w-full h-full rounded-l-lg text-sm  focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
        type="text"
        value={commentData}
        placeholder="댓글을 작성해주세요."
        onChange={(event) => {
          setCommentData(event.target.value);
        }}
      />
      <button
        class="p-3 w-20 border-t border-b border-r border-gray-300 rounded-r-lg text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
        type="submit"
        onClick={async () => {
          await createComment(commentData, toast);
          await getCommentsList();
          setCommentData("");
        }}
      >
        작성
      </button>
    </div>
  );
}
