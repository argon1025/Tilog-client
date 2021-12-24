import React, { useState } from "react";

export default function RenderInputReply({createReply, commentId}) {
  const [replyData, setReplyData] = useState(null);
  return(
  <div>
    {/* Reply input */}
    <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10">
      <input
        className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base text-gray-500 px-2 focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
        type="text"
        placeholder=""
        onChange={(event)=>{
          setReplyData(event.target.value)
        }}
      />
      <button
        class="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
        type="submit"
        onClick={()=> {
          setReplyData(null);
          createReply(commentId, replyData)
        }}
      >
        Submit
      </button>
    </div>
  </div>
  )
}
