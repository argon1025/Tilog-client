import React from "react";
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/go";
import { FaRegThumbsUp, FaClock, FaLock, FaCheckDouble } from "react-icons/fa";
import TechIconLoader from "../../../Utility.components/techIconLoader";
import { useAllFindByUserID } from "../../../../utilities/hooks";
import { formatDistance, subDays } from "date-fns";

export default function RecentPostsComponent({ username }) {
  let nextCursorNumber = 0;
  let postList = useAllFindByUserID(username, nextCursorNumber);
  const clickPostPage = (id) => {
    window.open(`/post?postid=${id}`, "_blank");
  };
  return (
    <div className="flex flex-col max-w-5xl w-full bg-white p-10">
      {/* component title */}
      <div className="flex mb-5">
        <IconContext.Provider value={{ className: "mr-2 w-4 h-4 " }}>
          <GoBook />
          <span className="text-xs">{username}'s Recent Posts</span>
        </IconContext.Provider>
      </div>
      {/* Card Area */}
      {/* Card */}
      <div className="flex flex-col w-full lg:max-w-5xl">
        {!postList ? (
          <p className="text-sm text-gray-400">저희 서비스 회원이 아니에요.</p>
        ) : (
          postList.postListData.map((post) => (
            <div
              key={post.posts_id}
              className="flex flex-col w-full cursor-pointer"
              onClick={() => clickPostPage(post.posts_id)}
            >
              {/* Category */}
              <div className="flex flex-row items-center">
                {/* Category Icon */}
                <div className="flex h-3">
                  <TechIconLoader
                    iconName={post.category_categoryName}
                    color="#393939"
                  />
                </div>
                {/* Category Name */}
                <div className="flex ml-1">
                  <span className="text-xs">{post.category_categoryName}</span>
                </div>
              </div>
              {/* Category End */}
              {/* Post Info */}
              <div className="flex flex-row mt-2 items-center">
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-gray-800">
                    {post.posts_title}
                  </h1>
                  <div>
                    <span className="text-gray-500 text-xs">
                      {formatDistance(
                        subDays(new Date(post.posts_createdAt), 1),
                        new Date(),
                        { addSuffix: true }
                      ) + " "}
                      ·{" "}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {post.posts_likes} Read
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  <img
                    className="rounded h-32 w-48 object-cover"
                    src={post.posts_thumbNailURL}
                    alt=""
                  />
                </div>
              </div>
              <hr className="border-gray-200 w-full my-10" />
            </div>
          ))
        )}
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
