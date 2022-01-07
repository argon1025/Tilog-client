import React, { useState } from "react";
import toast from "react-hot-toast";

export default function InputReply({ createReply, commentId }) {
  const [replyData, setReplyData] = useState("");
  return (
    <div className="bg-gray-100">
      {/* Reply input */}
      <div className="flex  w-full h-28 p-3">
        <input
          className="px-4 w-full h-full text-sm focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
          type="text"
          value={replyData}
          placeholder="답글을 작성해주세요."
          onChange={(event) => {
            setReplyData(event.target.value);
          }}
        />
        <button
          class="m-3 w-20 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
          type="submit"
          onClick={async () => {
            await createReply(commentId, replyData, toast);
            setReplyData("");
          }}
        >
          작성
        </button>
      </div>
    </div>
  );
}
