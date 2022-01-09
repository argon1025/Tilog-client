import React from "react";
import { IconContext } from "react-icons";
import { FaRegThumbsUp, FaClock, FaLock, FaCheckDouble } from "react-icons/fa";
import TechIconLoader from "../Utility.components/techIconLoader";
import { formatDistance, subDays } from "date-fns";
import { useTrendPosts } from "../../utilities/hooks/posts/useTrendPosts";
import PostRank from "./slave.components/postCard.component/postRank.slave.component";

export default function TrendPostsComponent() {
  const [postList, error, errorMessage, statusCode, getNextPostList] =
    useTrendPosts("WEEK");
  const clickPostPage = (id) => {
    window.open(`/post?postid=${id}`, "_blank");
  };
  if (!statusCode) return <>스캘래톤</>;
  if (error) return <>{errorMessage}</>;
  console.log(postList);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* Card Area */}
      {/* Card */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap md:gap-x-14 gap-y-12 justify-center items-center">
        {postList.map((post) => (
          <div key={post.id}>
            <PostRank
              key={post.id}
              title={post.title}
              username={post.users.userName}
              image={post.thumbNailUrl}
            />
          </div>
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
        <p className="text-gray-400 text-xs">Load More</p>
      </div>
    </div>
  );
}
