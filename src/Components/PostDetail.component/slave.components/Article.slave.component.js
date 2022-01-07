// Components
import { Tiptap } from "./MarkdownViewer/MarkdownViewer.slave.component";
import TitleComponent from "./Title/Title.slave.component";
import TagsComponent from "./Tags/Tags.slave.component";
import { PostCommentComponent } from "../..";
import ArticleSkeleton from "./ArticleSkeleton.slave.component";

export default function ArticleComponent({
  postid,
  postDataError,
  commentsListError,
  postDataErrorMessage,
  commentsListErrorMessage,
  postDataStatusCode,
  commentsListStatusCode,
  postData,
  commentsList,
  getCommentsList
}) {
  // Skeleton Loading
  if (!postDataStatusCode || !commentsListStatusCode) return <ArticleSkeleton />;
  // Rendering
  return (
    <div className="mt-10 flex flex-col w-full justify-center items-center">
      {postDataError ? <>{postDataStatusCode}/{postDataErrorMessage}</> :
      <>
      {/* Title */}
      <TitleComponent
        title={postData.title}
        createdAt={postData.createdAt}
        viewCounts={postData.viewCounts}
        categoryName={postData.categoryName}
      />
      <hr className="border-gray-200 w-full my-5 max-w-4xl" />
      {/* Markdown Contents */}
      <div className="flex flex-col max-w-4xl w-full mt-10">
        <Tiptap contentData={postData.markDownContent} />
      </div>
      <hr className="border-gray-200 w-full my-10" />
        {/*
          <PostLikeButtonComponent
          postID={params}
          likes={!postData ? <>fetching...</> : postData.likes}
          />
          */}
      {/* Tags */}
      <TagsComponent tags={postData.TagData} />
      {/* Comments */}
      <PostCommentComponent postid={postid} commentsList={commentsList} getCommentsList={getCommentsList} />
      </>
      }
    </div>
  );
}
