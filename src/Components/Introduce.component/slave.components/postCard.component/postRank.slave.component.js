import React from "react";

// Icons Image
import { TechIconLoader } from "../../..";
// Icons
import { IconContext } from "react-icons";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";

export default function PostRank({ postData, idx }) {
  const onClickCard = () => {
    window.location.href = `/${postData.userName}/${postData.id}`;
  };
  return (
    <div
      className="cursor-pointer h-96 w-full sm:w-80 transition duration-700 ease-in-out bg-white border border-gray-200 hover:shadow-xl dark:bg-gray-800 dark:border-gray-600 "
      onClick={onClickCard}
    >
      {postData?.thumbNailUrl ? (
        <img
          src={postData.thumbNailUrl}
          alt="titleImage"
          className="object-cover w-full h-36"
        />
      ) : (
        <div className="flex justify-center items-center w-full h-36 bg-gray-800 text-gray-50 overflow-hidden dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-500">
          <span className="w-full break-words p-5 text-center">
            {postData.title}
          </span>
        </div>
      )}

      {/* content */}
      <div className="flex flex-col pt-3 h-60 p-3">
        {/* Category */}
        <div className="flex my-3">
          {/* content Icon */}
          <div className="w-3 h-3 mr-1 text-gray-500 dark:text-gray-200">
            <TechIconLoader iconName={postData?.categoryName} />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-200">
            {postData?.categoryName}
          </span>
        </div>
        {/* Category End */}
        {/* Content */}
        <div className="flex flex-col justify-center h-full">
          {/* content title */}
          <h1 className="text-xl font-semibold text-gray-800 break-words overflow-hidden max-h-28 dark:text-gray-100 dark:font-medium">
            {postData.title}
          </h1>
          <div className="flex flex-row items-center w-full mt-auto">
            <div className="flex mr-auto items-center">
              {/* Profile */}
              <img
                alt="Profile"
                className="w-5 h-5 bg-gray-100 object-cover object-center rounded-full mr-1"
                src={postData?.proFileImageUrl}
              />
              <h2 className="text-xs text-gray-700 dark:text-gray-100">
                {postData?.userName}
              </h2>
            </div>
            <IconContext.Provider
              value={{ className: "mr-1 w-3 h-3 text-red-400" }}
            >
              <AiFillHeart />
              {/* Likes */}
              <span className="text-xs text-gray-400 pr-3 border-r-2 dark:text-gray-100 dark:border-gray-700">
                {postData?.likes}
              </span>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                className: "ml-3 mr-1 w-4 h-4 text-gray-400 dark:text-gray-200",
              }}
            >
              <AiOutlineEye />
              {/* ViewCounts */}
              <span className="text-xs text-gray-400 dark:text-gray-100 ">
                {postData.viewCounts}
              </span>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="relative">
        <p className="absolute w-10 -top-96 -left-12 font-bold text-gray-300 text-2xl text-right">
          {idx}.
        </p>
      </div>
    </div>
  );
}
