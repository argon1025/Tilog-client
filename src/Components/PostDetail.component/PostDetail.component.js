import React from "react";
// Dom-Router
import { useParams } from "react-router-dom";
// Components
import ArticleComponent from "./slave.components/Article.slave.component";
import HeaderComponent from "../Header.component/Header.component";
// Hooks
import { useViewDetailPost } from "../../utilities/hooks";

export default function PostDetailComponent() {
  // Get Params
  const { username, postid } = useParams();
  // Fetching Post Detail
  const [postData, error, statusCode] = useViewDetailPost(postid);
  return (
    <>
      {/* Navigationbar & UserProfile */}    
      <HeaderComponent navitype="PostDetail" username={username} postdata={postData}  />
      {/* Article */}
      <ArticleComponent postid={postid} error={error} statusCode={statusCode} postData={postData} />
    </>
  );
}
