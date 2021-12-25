import React from "react";

import { TechIconLoader } from "../../../";

export default function PostHeaderComponent({
  title,
  createdAt,
  viewCounts,
  likes,
  categoryName,
}) {
  return (
    <div className="flex flex-col w-full max-w-6xl justify-start items-start my-10 ml-5">
      <div>
        {/* Title */}
        <div className="flex h-4 my-5">
          <TechIconLoader iconName={`${categoryName}`} color="black" />
          <div className="w-10 bg-gray-800 m-1"></div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
      </div>
      {/* header Info */}
      <div className="flex flex-row my-10">
        <div className="flex text-gray-600 mr-3">
          <span className="text-xs">
            {new Date(createdAt).getFullYear()}-
            {new Date(createdAt).getMonth() + 1}-{new Date(createdAt).getDay()}
          </span>
        </div>
        <div className="flex text-gray-600  mr-3">
          <span className="text-xs">{viewCounts} viewed</span>
        </div>
        {/* <div className="flex text-gray-600  mr-3">
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaRegLaughSquint />
            <span className="text-xs">{likes} likes</span>
            </IconContext.Provider>
        </div> */}
      </div>
    </div>
  );
}
