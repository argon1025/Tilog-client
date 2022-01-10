import React from "react";
import { IconContext } from "react-icons";
import { FaCheckDouble } from "react-icons/fa";
import PostRank from "../postCard.component/postRank.slave.component";
import { useDayTrendPosts } from "../../../../utilities/hooks";
import PostRankSkeleton from "../postCard.component/postRankSkeleton.slave.component";

export default function DayTrendPostsComponent({ searchScope }) {
  const [trendList, error, errorMessage, statusCode, getNextPostList] =
    useDayTrendPosts(searchScope);

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
  if (error) return <>{errorMessage}</>;
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* Card Area */}
      {/* Card */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap md:gap-x-14 gap-y-12 justify-center items-center">
        {trendList.map((post) => (
          <PostRank postData={post} />
        ))}
        {/* Card End */}
      </div>
      {/* Post Load Button */}
      <div className="flex w-full justify-center items-center mt-10">
        <IconContext.Provider
          value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
        >
          <FaCheckDouble />
        </IconContext.Provider>
        <p
          className="text-gray-400 text-xs"
          onClick={() => getNextPostList(searchScope)}
        >
          Load More
        </p>
      </div>
    </div>
  );
}
