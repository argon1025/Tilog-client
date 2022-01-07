import React, { useEffect, useState } from "react";
import {
  FaRegThumbsUp,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useLike } from "../../../../utilities/hooks/posts/useLike";
import toast from "react-hot-toast";

/**
 * @TODO BackEnd 작업 끝나고 라이크 시작.
 */
export default function LikeButtonComponent({  postid, isLiked, likeCount, refreshPostData }) {
    const [setLike, unSetLike] = useLike(postid);
    const [load, setLoad] = useState(false);
    return (
        // 1. 페이크 좋아요 설정
        // 2. 몇초 대기. 후 서버 반영
        <div className="flex flex-row">
            {
            load ? <>뺑글뺑글</> :
            isLiked ? (
                <button
                class="px-4 py-2 m-2 rounded-full bg-gray-100 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-300 focus:ring-blue-300 ring-opacity-50"
                type="submit"
                onClick={async()=> {
                    setLoad(true)
                    await unSetLike(postid, toast)
                    await refreshPostData(postid)
                    setLoad(false)
                }}
                >
                <IconContext.Provider
                    value={{ className: "w-7 h-7 focus:outline-none focus:ring" }}
                >
                    <FaRegThumbsUp />
                    <span className="text-xs">{likeCount}</span>
                </IconContext.Provider>
                </button>
            ) : (
                <button
                class="px-4 py-2 m-2 rounded-full bg-gray-100 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-300 focus:ring-blue-300 ring-opacity-50"
                type="submit"
                onClick={async()=>{ 
                    setLoad(true)
                    await setLike(postid, toast)
                    await refreshPostData(postid)
                    setLoad(false)
                }}
                >
                <IconContext.Provider
                    value={{ className: "w-7 h-7 focus:outline-none focus:ring" }}
                >
                    <FaRegThumbsUp />
                    <span className="text-xs">{likeCount}</span>
                </IconContext.Provider>
                </button>
            )}
    </div>
    )
}