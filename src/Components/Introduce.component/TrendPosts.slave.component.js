import React from "react";
import { IconContext } from "react-icons";
import { FaRegThumbsUp, FaClock, FaLock, FaCheckDouble } from "react-icons/fa";
import TechIconLoader from "../Utility.components/techIconLoader";
import { formatDistance, subDays } from "date-fns";
import { useTrendPosts } from "../../utilities/hooks/posts/useTrendPosts";
import PostRank from "./slave.components/postCard.component/postRank.slave.component";

export default function TrendPostsComponent() {
  const [postList, error, errorMessage, statusCode, getNextPostList] = useTrendPosts("WEEK")
  const clickPostPage= (id) => {
    window.open(`/post?postid=${id}`, "_blank");
  };
  if(!statusCode) return <>스캘래톤</>
  if(error) return <>{errorMessage}</>
  console.log(postList)
  return (
    <div className="flex flex-col max-w-5xl w-full bg-white dark:bg-gray-800 p-10">
      {/* Card Area */}
      {/* Card */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl gap-5">
        {
          postList.map((post) => (
            <div key={post.id}>
              <PostRank title={post.title} username={post.users.userName} image={post.thumbNailUrl} />
            </div>
          ))
        }
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
