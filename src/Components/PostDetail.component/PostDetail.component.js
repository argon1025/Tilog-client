import React, { useEffect, useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import queryString from "query-string";
import PostBannerComponent from "./slave.components/Banner/PostBanner.slave.component";
import { useViewDetailPost } from "../../utilities/hooks";
import PostHeaderComponent from "./slave.components/Header/PostHeader.slave.component";
import PostLikeButtonComponent from "./slave.components/LikeButton/PostLikeButton.slave.component";
import PostTagsComponent from "./slave.components/Tags/PostTags.slave.component";
import PostCommentComponent from "../PostComment.component/PostComment.component";
import { Tiptap } from "./slave.components/MarkdownViewer/MarkdownViewer.slave.component";
import { ProfileDropdownComponent } from "..";

export default function PostDetailComponent() {
  const [params, setParams] = useState(null);
  const postData = useViewDetailPost(params);

  useEffect(() => {
    const { postid } = queryString.parse(window.location.search);
    setParams(postid);
  }, []);

  /**
   * 로고 클릭 이벤트
   */
  const clickUserLogoButton = (userName) => {
    window.location.href = `blog?username=${userName}`;
  };
  /**
   * 메인 로고 클릭 이벤트
   */
  const clickLogoButton = () => {
    window.location.href = "/";
  };
  return (
    <div>
      {/* Nav */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row max-w-4xl w-full items-center">
          {/* Logo */}
          <div className="flex cursor-pointer">
            <h1
              onClick={clickLogoButton}
              className="font-eng-sub-font-2 text-2xl text-gray-700  transition ease-in-out duration-300 hover:text-sky-500 hover:drop-shadow-2xl"
            >
              {"#"}
            </h1>
            <h1 className="font-eng-sub-font-2 text-2xl text-blue-600/70">
              {">"}
            </h1>
            <h1
              onClick={() =>
                clickUserLogoButton(!postData ? null : postData.userName)
              }
              className="font-bold font-eng-sub-font-2 text-xl text-gray-800 underline decoration-gray-500 transition ease-in-out duration-700 hover:text-sky-500 hover:drop-shadow-2xl hover:decoration-sky-500"
            >
              {!postData ? null : postData.userName}.log
            </h1>
            <h1 className="font-bold font-eng-sub-font-2 text-xl text-gray-800  transition ease-in-out duration-700 hover:text-sky-500 hover:drop-shadow-2xl">
              /{!postData ? <>fetching...</> : postData.title}
            </h1>
          </div>
          {/* Login Button */}
          <div className="ml-auto">
            <ProfileDropdownComponent />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 flex flex-col w-full justify-center items-center">
        {/* header */}
        <PostHeaderComponent
          title={!postData ? <>fetching...</> : postData.title}
          createdAt={!postData ? <>fetching...</> : postData.createdAt}
          viewCounts={!postData ? <>fetching...</> : postData.viewCounts}
          categoryName={!postData ? <>fetching...</> : postData.categoryName}
        />

        {/* Markdown Content */}
        <div className="flex flex-col max-w-4xl w-full mt-10 ml-3">
          {!postData ? (
            <div></div>
          ) : (
            <Tiptap contentData={postData.markDownContent} />
          )}
        </div>

        <hr className="border-gray-200 w-full my-10" />
        {/* like Button */}
        <PostLikeButtonComponent
          postID={params}
          likes={!postData ? <>fetching...</> : postData.likes}
        />
        {/* Tags */}
        <PostTagsComponent tags={!postData ? [] : postData.TagData} />

        {/* Comments */}
        <PostCommentComponent postid={params} />
      </div>
    </div>
  );
}
