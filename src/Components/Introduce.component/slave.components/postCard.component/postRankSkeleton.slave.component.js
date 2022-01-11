import React from "react";

export default function PostRankSkeleton() {
  return (
    <div className="animate-pulse h-96 w-full sm:w-80 transition duration-700 ease-in-out bg-white border border-gray-200 hover:shadow-xl">
      <div className="flex justify-center items-center w-full h-36 bg-gray-200 text-gray-50 overflow-hidden">
        <span className="w-full break-words p-5 text-center"></span>
      </div>

      {/* content */}
      <div className="flex flex-col pt-3 h-60 p-3">
        {/* Category */}
        <div className="flex my-3">
          {/* content Icon */}
          <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
        </div>
        {/* Category End */}
        {/* Content */}
        <div className="flex flex-col justify-center h-full">
          {/* content title */}
          <div className="h-4 w-full bg-gray-200 rounded mr-3"></div>
          <div className="flex flex-row items-center w-full mt-auto">
            <div className="flex mr-auto items-center">
              {/* Profile */}
              <div className="h-5 w-5 rounded-full bg-gray-200 mr-1"></div>
              <div className="h-4 w-10 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 w-16 bg-gray-200 rounded mr-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
