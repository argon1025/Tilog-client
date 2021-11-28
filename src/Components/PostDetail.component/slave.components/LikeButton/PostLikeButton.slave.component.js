import React, { useEffect, useState } from "react";
import {
  FaRegThumbsUp,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { setLikePost } from "../../../../utilities/api";

export default function PostLikeButtonComponent({ postID, likes }) {
    const [like, setlike] = useState(0)
    useEffect(()=>{
        setlike(likes)
    },[likes])
    const setLike = async(id) => {
        try {
            await setLikePost(id)
            setlike(like + 1)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-row">
        <button
        class="px-4 py-2 m-2 rounded-full bg-gray-100 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-300 focus:ring-blue-300 ring-opacity-50"
        type="submit"
        onClick={()=> setLike(postID)}
        >
        <IconContext.Provider
            value={{ className: "w-7 h-7 focus:outline-none focus:ring" }}
        >
            <FaRegThumbsUp />
            <span className="text-xs">{like}</span>
        </IconContext.Provider>
        </button>
    </div>
    )
}