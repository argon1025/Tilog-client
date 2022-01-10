import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { FaRegThumbsUp, FaClock, FaLock, FaCheckDouble } from "react-icons/fa";
import TechIconLoader from "../Utility.components/techIconLoader";
import { formatDistance, subDays } from "date-fns";
import { useTrendPosts } from "../../utilities/hooks/posts/useTrendPosts";
import PostRank from "./slave.components/postCard.component/postRank.slave.component";

export default function TrendPostsComponent({ searchScope }) {
  const [dayTrendList, weekTrendList, monthTrendList, error, errorMessage, statusCode, getTrendPostList, getNextPostList] = useTrendPosts();

  useEffect(()=> {
    getTrendPostList(searchScope)
  },[getTrendPostList, searchScope])
  console.log(searchScope, dayTrendList, weekTrendList, monthTrendList, error, errorMessage, statusCode)
  if (!statusCode) return <>스캘래톤</>;
  if (error) return <>{errorMessage}</>;
  const RenderTrendList = () => {
    if(searchScope === "DAY") return dayTrendList.map((post) => (
      <PostRank
        key={post.id}
        id={post.id}
        title={post.title}
        username={post.users.userName}
        image={post.thumbNailUrl}/>))
    if(searchScope === "WEEK") return weekTrendList.map((post) => (
      <PostRank
        key={post.id}
        id={post.id}
        title={post.title}
        username={post.users.userName}
        image={post.thumbNailUrl}/>))
    if(searchScope === "MONTH") return monthTrendList.map((post) => (
      <PostRank
        key={post.id}
        id={post.id}
        title={post.title}
        username={post.users.userName}
        image={post.thumbNailUrl}/>))
  }
  const RenderLoadMoreTrendList = () => {
    if(searchScope === "DAY") ( <p className="text-gray-400 text-xs" onClick={()=> getNextPostList(searchScope)} >Load More</p> )
    if(searchScope === "WEEK") ( <p className="text-gray-400 text-xs" onClick={()=> getNextPostList(searchScope)} >Load More</p> )
    if(searchScope === "MONTH") ( <p className="text-gray-400 text-xs" onClick={()=> getNextPostList(searchScope)} >Load More</p> )
  }
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* Card Area */}
      {/* Card */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap md:gap-x-14 gap-y-12 justify-center items-center">
        <RenderTrendList />
        {/* Card End */}
      </div>
      {/* Post Load Button */}
      <div className="flex w-full justify-center items-center mt-10">
        <IconContext.Provider
          value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
        >
          <FaCheckDouble />
        </IconContext.Provider>
        <RenderLoadMoreTrendList />
      </div>
    </div>
  );
}
