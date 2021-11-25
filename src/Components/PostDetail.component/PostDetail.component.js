import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import PostBannerComponent from "./slave.components/Banner/PostBanner.slave.component";
import { useViewDetailPost } from "../../utilities/hooks";
import PostHeaderComponent from "./slave.components/Header/PostHeader.slave.component";
import PostLikeButtonComponent from "./slave.components/LikeButton/PostLikeButton.slave.component";
import PostTagsComponent from "./slave.components/Tags/PostTags.slave.component";
import PostCommentComponent from "../PostComment.component/PostComment.component"
export default function PostDetailComponent() {
  const postData = useViewDetailPost(3)
    return (
      <div>
        {/* Nav */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div className="ml-5 mt-5 p-1 px-4 bg-black">
              <h1 className="font-eng-sub-font-1 text-lg text-white">
                .log
              </h1>
            </div>
            {/* Login Button */}
            <div className="ml-auto mr-5">
              <button
                type="button"
                className="border text-black px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-black hover:border-black focus:outline-none focus:shadow-outline"
              >
                <div className="flex flex-row flex-nowrap align-middle justify-center items-center">
                  <span className="text-sm">Login with Github</span>
                  <IconContext.Provider value={{ className: "ml-2 w-7 h-7" }}>
                    <DiGithubBadge />
                  </IconContext.Provider>
                </div>
              </button>
            </div>
          </div>
        </div>
      {console.log(postData)}
        {/* Banner */}
        <PostBannerComponent thumbNailUrl={!postData ? <>fetching...</> : postData.thumbNailUrl} />

        {/* Content */}
        <div className="mt-10 flex flex-col w-full justify-center items-center">
          {/* header */}
        <PostHeaderComponent 
        title={!postData ? <>fetching...</> : postData.title} 
        createdAt={!postData ? <>fetching...</> : postData.createdAt} 
        viewCounts={!postData ? <>fetching...</> : postData.viewCounts}
        likes={!postData ? <>fetching...</> : postData.likes}
        categoryName={!postData ? <>fetching...</> : postData.categoryName}/>

          <hr className="border-gray-200 w-full mt-10" />

          {/* Markdown Content */}
          <div className="flex flex-col max-w-5xl w-full mt-10 ml-3">
            <div>{!postData ? <>fetching...</>: postData.markDownContent}</div>
          </div>

          <hr className="border-gray-200 w-full my-10" />
          {/* like Button */}
          <PostLikeButtonComponent likes={!postData ? <>fetching...</> : postData.likes} />
          {/* Tags */}
          <PostTagsComponent tags={!postData ? [] : postData.TagData}/>

          {/* Comments */}
          <PostCommentComponent />
        </div>
      </div>
    );
}
