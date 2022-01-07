import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
// Component
import IsDeletedComments from "../Icons/CommentIcons.slave.component";
// Toast
import { toast } from "react-hot-toast";
import CommentIcons from "../Icons/CommentIcons.slave.component";

export default function Replies({
  replies,
  commentId,
  updateReply,
  deleteReply,
  restoreReply,
}) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [commentData, setCommentData] = useState(null);
  const session = useSelector((store) => store.AuthReducer.USERINFO);
  const onClickUserImage = (username) => {
    window.location.href = `/${username}`;
  };
  // 댓글 기능 렌더링
  const RenderRepliesTools = () => {
    // 유저 세션이 없다면.
    if (!session) return <></>;
    // 세션과 코멘트 아이디가 틀리다면
    if (session.id !== replies.comments_usersID) return <></>;
    // 최종 렌더링
    return (
      <CommentIcons
        commentId={commentId}
        replyId={replies.comments_id}
        deleteTo={deleteReply}
        restoreTo={restoreReply}
        deletedAt={replies.comments_deletedAt}
        setIsUpdateMode={setIsUpdateMode}
        isUpdateMode={isUpdateMode}
      />
    );
  };
  // 댓글 내용 렌더링
  const RenderRepliesContents = () => {
    // 삭제된 댓글
    if (!!replies.comments_deletedAt)
      return <span className="text-sm text-zinc-600">삭제된 댓글입니다.</span>;
    // 업데이트 모드
    if (isUpdateMode)
      return (
        <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10 px-4">
          <input
            className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
            type="text"
            placeholder={replies.comments_htmlContent}
            onChange={(event) => {
              setCommentData(event.target.value);
            }}
          />
          <button
            class="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
            type="submit"
            onClick={async () => {
              await updateReply(
                commentId,
                replies.comments_id,
                commentData,
                toast
              );
              setIsUpdateMode(!isUpdateMode);
            }}
          >
            작성
          </button>
        </div>
      );
    // 최종 렌더링
    return (
      <span className="text-sm text-gray-800">
        {replies.comments_htmlContent}
      </span>
    );
  };
  return (
    <div key={replies.comments_id} className="px-3">
      {/* commentTree */}
      <div className="pb-5">
        <div className="flex flex-row items-center pt-5">
          <img
            class="rounded-full w-8 h-8"
            src={replies.users_proFileImageURL}
            alt=""
          />
          <span
            class="ml-2 font-medium text-gray-800"
            onClick={() => onClickUserImage(replies.users_userName)}
          >
            {replies.users_userName}
          </span>
          <span class="ml-1 text-xs text-gray-400">
            {replies.comments_createdAt.slice(0, 10)}
          </span>
          <div className="ml-auto">
            <RenderRepliesTools />
          </div>
        </div>
        {/** 댓글 내용 */}
        <div className="w-full px-5 py-4">
          {!isUpdateMode ? (
            <RenderRepliesContents />
          ) : (
            <div className="flex w-full h-28">
              <input
                className="px-4 w-full h-full text-base focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                type="text"
                placeholder={replies.comments_htmlContent}
                onChange={(event) => {
                  setCommentData(event.target.value);
                }}
              />
              <button
                class="m-3 w-20 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                type="submit"
                onClick={async () => {
                  await updateReply(
                    commentId,
                    replies.comments_id,
                    commentData,
                    toast
                  );
                  setIsUpdateMode(!isUpdateMode);
                }}
              >
                수정
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-gray-200 w-full" />
    </div>
  );
}
