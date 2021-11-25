import React from "react";
import {
  FaRegThumbsUp,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function PostLikeButtonComponent({ likes }) {

    return (
        <div className="flex flex-row">
        <button
        class="px-4 py-2 m-2 rounded-full bg-gray-100 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-300 focus:ring-blue-300 ring-opacity-50"
        type="submit"
        >
        <IconContext.Provider
            value={{ className: "w-7 h-7 focus:outline-none focus:ring" }}
        >
            <FaRegThumbsUp />
            <span className="text-xs">{likes}</span>
        </IconContext.Provider>
        </button>
    </div>
    )
}