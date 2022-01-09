import React from "react";

// Icons Image
import { TechIconLoader } from "../../..";
// Icons
import { IconContext } from "react-icons";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export default function PostRank({ key, image, title, username }) {
  return (
    <div
      key={key}
      className="cursor-pointer h-96 w-full sm:w-80 transition duration-700 ease-in-out bg-white border border-gray-200 hover:shadow-xl"
    >
      {image ? (
        <img
          src={image}
          alt="titleImage"
          className="object-cover w-full h-36"
        />
      ) : (
        <div className="flex justify-center items-center w-full h-36 bg-gray-800 text-gray-50 overflow-hidden">
          <span className="w-full break-words p-5 text-center">{title}</span>
        </div>
      )}

      {/* content */}
      <div className="flex flex-col pt-3 h-60 p-3">
        {/* Category */}
        <div className="flex my-3">
          {/* content Icon */}
          <div className="w-3 h-3">
            <TechIconLoader iconName="typescript" color="rgb(107 114 128)" />
          </div>
          <span className="text-xs text-gray-500">Typescript</span>
        </div>
        {/* Category End */}
        {/* Content */}
        <div className="flex flex-col justify-center h-full">
          {/* content title */}
          <h1 className="text-xl font-semibold text-gray-800 break-words overflow-hidden max-h-28">
            {title}
          </h1>
          <div className="flex flex-row items-center w-full mt-auto">
            <div className="flex mr-auto items-center">
              {/* Profile */}
              <img
                alt="Profile"
                class="w-5 h-5 bg-gray-100 object-cover object-center rounded-full mr-1"
                src="https://dummyimage.com/98x98"
              />
              <h2 className="text-xs text-gray-700">{username}</h2>
            </div>
            <IconContext.Provider
              value={{ className: "mr-1 w-3 h-3 text-red-400" }}
            >
              <AiFillHeart />
              {/* Likes */}
              <span className="text-xs text-gray-400 pr-3 border-r-2">3</span>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "ml-3 mr-1 w-4 h-4 text-gray-400" }}
            >
              <AiOutlineEye />
              {/* ViewCounts */}
              <span className="text-xs text-gray-400 border-r-2 pr-3 ">
                832
              </span>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="relative">
        <p className="absolute w-10 -top-96 -left-12 font-bold text-gray-300 text-2xl text-right">
          {key}.
        </p>
      </div>
    </div>
  );
}
