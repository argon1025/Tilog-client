import React from "react";

// Icons Image
import { TechIconLoader } from "../../..";

export default function PostRank() {
  return (
    <div className="h-96 w-full sm:w-80 container bg-white rounded-lg shadow-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80"
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
            Title
          </h1>
          <span className="text-gray-500 text-xs">Read More</span>
          <h2 className="text-sm text-gray-400">by argon1025</h2>
        </div>
      </div>
    </div>
  );
}
