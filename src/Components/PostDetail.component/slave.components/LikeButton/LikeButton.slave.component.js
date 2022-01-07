import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useLike } from "../../../../utilities/hooks/posts/useLike";
import toast from "react-hot-toast";

// Icons
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/go";
import { BsCaretDownFill } from "react-icons/bs";
import {
  AiOutlineLoading3Quarters,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

/**
 * @TODO BackEnd 작업 끝나고 라이크 시작.
 */
export default function LikeButtonComponent({
  postid,
  isLiked,
  likeCount,
  refreshPostData,
}) {
  const [setLike, unSetLike] = useLike(postid);
  const [load, setLoad] = useState(false);
  return (
    // 1. 페이크 좋아요 설정
    // 2. 몇초 대기. 후 서버 반영
    <div className="flex flex-row">
      {load ? ( // 로딩 컴포넌트
        <div className="flex text-xs text-gray-600  items-center">
          <IconContext.Provider
            value={{
              className: "animate-pulse mr-1 w-5 h-5",
            }}
          >
            <AiFillHeart />
          </IconContext.Provider>
          <p>{likeCount}</p>
        </div>
      ) : isLiked ? (
        <button
          class="flex text-xs text-gray-600 items-center"
          type="submit"
          onClick={async () => {
            setLoad(true);
            await unSetLike(postid, toast);
            await refreshPostData(postid);
            setLoad(false);
          }}
        >
          <IconContext.Provider
            value={{ className: "mr-1 w-5 h-5 text-red-400" }}
          >
            <AiFillHeart />
            <span className="text-xs">{likeCount}</span>
          </IconContext.Provider>
        </button>
      ) : (
        <button
          class="flex text-xs text-gray-600 items-center"
          type="submit"
          onClick={async () => {
            setLoad(true);
            await setLike(postid, toast);
            await refreshPostData(postid);
            setLoad(false);
          }}
        >
          <IconContext.Provider value={{ className: "mr-1 w-5 h-5" }}>
            <AiOutlineHeart />
            <span className="text-xs">{likeCount}</span>
          </IconContext.Provider>
        </button>
      )}
    </div>
  );
}
