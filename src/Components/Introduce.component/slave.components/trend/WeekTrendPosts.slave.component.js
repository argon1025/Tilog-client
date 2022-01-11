import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaCheckDouble } from "react-icons/fa";
import PostRank from "../postCard.component/postRank.slave.component";
import { useWeekTrendPosts } from "../../../../utilities/hooks";
import PostRankSkeleton from "../postCard.component/postRankSkeleton.slave.component";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function WeekTrendPostsComponent({ searchScope }) {
  const [cursor, trendList, error, errorMessage, statusCode, getNextPostList] =
    useWeekTrendPosts(searchScope);
  const [load, setLoad] = useState(false);
  if (!statusCode)
    return (
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap md:gap-x-14 gap-y-12 justify-center items-center">
        <PostRankSkeleton />
        <PostRankSkeleton />
        <PostRankSkeleton />
        <PostRankSkeleton />
        <PostRankSkeleton />
        <PostRankSkeleton />
      </div>
    );
  if (cursor === 0 && error) return <>{errorMessage}</>;
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* Card Area */}
      {/* Card */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap md:gap-x-14 gap-y-12 justify-center items-center">
        {trendList.map((post, idx) => (
          <PostRank postData={post} idx={idx + 1} />
        ))}
        {/* Card End */}
      </div>
      {load ? (
        <div className="flex w-full justify-center items-center mt-10 cursor-pointer text-gray-400 hover:text-gray-800">
          <IconContext.Provider
            value={{
              className: "animate-spin mr-1 w-3 h-3 text-gray-400",
            }}
          >
            <AiOutlineLoading3Quarters />
          </IconContext.Provider>
          <p className="text-xs">Loading..</p>
        </div>
      ) : error ? (
        <></>
      ) : (
        /* Post Load Button */
        <div className="flex w-full justify-center items-center mt-10">
          <IconContext.Provider
            value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
          >
            <FaCheckDouble />
          </IconContext.Provider>
          <p
            className="text-gray-400 text-xs"
            onClick={async () => {
              setLoad(true);
              await getNextPostList(searchScope);
              setLoad(false);
            }}
          >
            Load More
          </p>
        </div>
      )}
    </div>
  );
}
