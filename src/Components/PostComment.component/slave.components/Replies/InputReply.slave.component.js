import React, { useState } from "react";

export default function InputReply({ createReply, commentId }) {
  const [replyData, setReplyData] = useState("");
  return (
    <div>
      {/* Reply input */}
      <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10">
        <input
          className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base text-gray-500 px-2 focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
          type="text"
          value={replyData}
          placeholder="답글을 작성해주세요."
          onChange={(event) => {
            setReplyData(event.target.value);
          }}
        />
        <button
          class="m-3 w-20 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
          type="submit"
          onClick={() => {
            setReplyData("");
            createReply(commentId, replyData);
          }}
        >
          작성
        </button>
      </div>
    </div>
  );
}
