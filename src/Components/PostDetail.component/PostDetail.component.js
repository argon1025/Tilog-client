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
  const clickLogoButton = (userName) => {
    window.location.href = `blog?username=${userName}`;
  };
  return (
    <div>
      {/* Nav */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row max-w-5xl w-full">
          {/* Logo */}
          <div
            className="ml-5 mt-5 p-1 px-4 bg-black cursor-pointer"
            onClick={() =>
              clickLogoButton(!postData ? null : postData.userName)
            }
          >
            <h1 className="font-eng-sub-font-1 text-lg text-white">
              {!postData ? null : postData.userName}.log
            </h1>
          </div>
          {/* Login Button */}
          <div className="ml-auto mr-5">
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

        <hr className="border-gray-200 w-full mt-10" />

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
