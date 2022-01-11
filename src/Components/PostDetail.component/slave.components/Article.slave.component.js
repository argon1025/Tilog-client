// Components
import { Tiptap } from "./MarkdownViewer/MarkdownViewer.slave.component";
import TitleComponent from "./Title/Title.slave.component";
import TagsComponent from "./Tags/Tags.slave.component";
import { PostCommentComponent } from "../..";
import ArticleSkeleton from "./Skeleton/ArticleSkeleton.slave.component";
import LikeButtonComponent from "./LikeButton/LikeButton.slave.component";
// Icons
import { FaRegComment } from "react-icons/fa";
import { IconContext } from "react-icons";
import ArticleError from "./Skeleton/ArticleError.slave.component";

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
  getCommentsList,
  refreshPostData,
}) {
  // Skeleton Loading
  if (!postDataStatusCode || !commentsListStatusCode)
    return <ArticleSkeleton />;
  // Rendering
  return (
    <div className="mt-10 flex flex-col w-full justify-center items-center">
      {postDataError ? (
        <ArticleError
          errorMessage={postDataErrorMessage}
          errorCode={postDataStatusCode}
        />
      ) : (
        <>
          {/* Title */}
          <TitleComponent
            title={postData.title}
            createdAt={postData.createdAt}
            viewCounts={postData.viewCounts}
            categoryName={postData.categoryName}
            postId={postData.id}
            ownerId={postData.usersId}
          />

          <hr className="border-gray-200 w-full my-5 max-w-4xl" />

          {/* Markdown Contents */}
          <div className="flex flex-col max-w-4xl w-full mt-10">
            <Tiptap contentData={postData.markDownContent} />
          </div>

          <hr className="border-gray-200 w-full my-10" />

          {/* Tags 
          <TagsComponent tags={postData.TagData} />
        */}

          {/* Like, Comment Component */}
          <div className="flex flex-col w-full max-w-4xl justify-start items-start ">
            <div className="flex items-center w-full px-5">
              {/* Comments Title */}
              <div className="flex text-gray-600 mr-auto">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaRegComment />
                  <span className="text-xs">Comments</span>
                </IconContext.Provider>
              </div>
              {/* Like button */}
              <LikeButtonComponent
                postid={postid}
                isLiked={postData.isLiked}
                likeCount={postData.likes}
                refreshPostData={refreshPostData}
              />
            </div>

            {/* Comments */}
            <PostCommentComponent
              postid={postid}
              commentsList={commentsList}
              getCommentsList={getCommentsList}
            />
          </div>
        </>
      )}
    </div>
  );
}
