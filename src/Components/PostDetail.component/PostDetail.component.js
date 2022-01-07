import React from "react";
// Dom-Router
import { useParams } from "react-router-dom";
// Components
import ArticleComponent from "./slave.components/Article.slave.component";
import HeaderComponent from "../Header.component/Header.component";
// Hooks
import { useComments, useViewDetailPost } from "../../utilities/hooks";
// helmet
import { HelmetComponent } from "../";

export default function PostDetailComponent() {
  // Get Params
  const { username, postid } = useParams();
  // Fetching Post Detail
  const [postData, postDataError, postDataErrorMessage, postDataStatusCode] = useViewDetailPost(postid);
  // Fetching Comment Data
  const [commentsList, commentsListError, commentsListErrorMessage, commentsListStatusCode, getCommentsList] = useComments(postid);
  return (
    <div className="flex flex-col justify-center items-center">
      {!postData ? (
        <></>
      ) : (
        <HelmetComponent
          title={postData?.title}
          ogImage={postData?.thumbNailUrl}
        />
      )}

      {/* Navigationbar & UserProfile */}
      <HeaderComponent
        navitype="PostDetail"
        username={username}
        postdata={postData}
      />
      {/* Article */}
      <ArticleComponent
        postid={postid}
        postDataError={postDataError}
        commentsListError={commentsListError}
        postDataErrorMessage={postDataErrorMessage}
        commentsListErrorMessage={commentsListErrorMessage}
        postDataStatusCode={postDataStatusCode}
        commentsListStatusCode={commentsListStatusCode}
        postData={postData}
        commentsList={commentsList}
        getCommentsList={getCommentsList}
      />
    </div>
  );
}
