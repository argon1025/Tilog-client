import React from "react";
import {
  FaRegLaughSquint,
  FaRegCalendarAlt,
  FaRegEye,
  FaBookmark,
} from "react-icons/fa";
import { IconContext } from "react-icons";


export default function PostHeaderComponent({ title, createdAt, viewCounts, likes, categoryName }) {
    return (
        <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3">
        <div>
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800">
            {title}
        </h1>
        </div>
        {/* header Info */}
        <div className="flex flex-row pt-3">
        <div className="flex text-gray-600 mr-3">
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaRegCalendarAlt />
            <span className="text-xs">{createdAt}</span>
            </IconContext.Provider>
        </div>
        <div className="flex text-gray-600  mr-3">
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaRegEye />
            <span className="text-xs">
                {viewCounts} viewed
            </span>
            </IconContext.Provider>
        </div>
        <div className="flex text-gray-600  mr-3">
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaRegLaughSquint />
            <span className="text-xs">{likes} likes</span>
            </IconContext.Provider>
        </div>
        <div className="flex text-gray-600  mr-3">
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaBookmark />
            <span className="text-xs">{categoryName}</span>
            </IconContext.Provider>
        </div>
        </div>
    </div>
    )
}