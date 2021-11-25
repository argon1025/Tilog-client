import React from "react";
import { IconContext } from "react-icons";
import {
  GoBook,
} from "react-icons/go";
import { FaRegThumbsUp, FaClock, FaLock, FaCheckDouble } from "react-icons/fa";
import TechIconLoader from "../../../Utility.components/techIconLoader";
import { useAllFindByUserID } from "../../../../utilities/hooks";
import { formatDistance, subDays } from "date-fns"
export default function RecentPostsComponent({ username }) {
    let nextCursorNumber = 0
    let postList = useAllFindByUserID(username, nextCursorNumber)

    return (
        <div className="flex flex-col max-w-5xl w-full bg-white p-10">
        {/* component title */}
        <div className="flex mb-5">
          <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <GoBook />
            <span className="text-xs">{username}'s Recent Posts</span>
          </IconContext.Provider>
        </div>
        {/* Card Area */}
          {/* Card */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl gap-5">
            {
                !postList ? <>fetching...</> : postList.postListData.map( post => (
                    <div key={post.posts_id} className="rounded-lg w-full h-72 bg-white shadow-lg">
                    {/* Category Icon */}
                    <div className="absolute m-3 bg-white flex items-center justify-center w-9 h-9 rounded-xl shadow-lg">
                      <TechIconLoader iconName={post.category_categoryName} color="#393939" />
                    </div>
                    {/* Image */}
                    <img
                      class="rounded-t-lg h-44 w-full object-cover"
                      src={post.posts_thumbNailURL}
                      alt=""
                    />
                    {/* Card content */}
                    <div>
                      {/* title */}
                      <div className="relative p-3">
                        <h5 class="text-gray-800 font-bold text-base tracking-tight w-full h-12 truncate">
                            {post.posts_title}
                        </h5>
                      </div>
                      <hr className="w-full" />
                      {/* Info */}
                      <div className="flex items-center mt-3 mx-3">
                        <div className="flex items-center mr-auto">
                          <IconContext.Provider
                            value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
                          >
                            <FaRegThumbsUp />
                          </IconContext.Provider>
                          <p className="text-gray-400 text-xs">{post.posts_likes}</p>
                        </div>
                        <div className="flex mr-3 items-center">
                          <IconContext.Provider
                            value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
                          >
                            <FaClock />
                          </IconContext.Provider>
                          <p className="text-gray-400 text-xs">{formatDistance(subDays(new Date(post.posts_createdAt), 3), new Date(), { addSuffix: true })}</p>
                        </div>
                        {
                            post.posts_private === 0 ? <></>
                            : <div className="flex items-center">
                            <IconContext.Provider
                                value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
                            >
                                <FaLock />
                            </IconContext.Provider>
                            <p className="text-gray-400 text-xs">Locked</p>
                            </div>
                        }
                        </div>
                    </div>
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
    )
}