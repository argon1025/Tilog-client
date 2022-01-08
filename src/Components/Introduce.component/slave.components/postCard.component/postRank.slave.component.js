import React from "react";

// Icons Image
import { TechIconLoader } from "../../..";

export default function PostRank({ image, title, username }) {
  return (
    <div className="h-96 w-full sm:w-80 container bg-white rounded-lg shadow-xl overflow-hidden">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-32"
      />
      {/* content */}
      <div className="flex flex-col pt-3 px-3">
        {/* content Icon */}
        <div className="w-3 h-3">
          <TechIconLoader iconName="typescript" color="black" />
        </div>
        {/* content title */}
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-gray-800 cursor-pointer">
            {title}
          </h1>
          <span className="text-gray-500 text-xs">Read More</span>
          <h2 className="text-sm text-gray-400">by {username}</h2>
        </div>
      </div>
    </div>
  );
}
