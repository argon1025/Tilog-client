import React, { useState } from "react";
import toast from "react-hot-toast";

export default function InputReply({ createReply, commentId }) {
  const [replyData, setReplyData] = useState("");
  return (
    <div className="flex bg-gray-100 w-full h-28 dark:bg-gray-800">
      {/* Reply input */}
      <input
        className="text-sm px-4 bg-gray-100 w-full h-full focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-200"
        type="text"
        value={replyData}
        placeholder="답글을 작성해주세요."
        onChange={(event) => {
          setReplyData(event.target.value);
        }}
      />
      <button
        class="p-3 w-20 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50  dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        type="submit"
        onClick={async () => {
          await createReply(commentId, replyData, toast);
          setReplyData("");
        }}
      >
        작성
      </button>
    </div>
  );
}
