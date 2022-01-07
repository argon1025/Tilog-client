import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";

// Hooks
import { useReplies } from "../../../../utilities/hooks";

// Components
import Replies from "../Replies/Replies.slave.component";
import InputReply from "../Replies/InputReply.slave.component";
import CommentIcons from "../Icons/CommentIcons.slave.component";

// Toast
import { toast } from "react-hot-toast";

/**
 * @Todo 스켈레톤 로딩
 */
export default function Comments({
  postid,
  comment,
  getCommentsList,
  deleteComment,
  restoreComment,
  updateComment,
}) {
  // 수정모드 상태값
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  // 답글 열닫 상태 값
  const [isRepliesOpened, setIsRepliesOpened] = useState(false);
  // 입력 상태값
  const [commentData, setCommentData] = useState(null);
  // 답글 상태 및 클로저
  const [
    replies,
    getReply,
    createReply,
    updateReply,
    deleteReply,
    restoreReply,
  ] = useReplies(postid);
  // 유저 로그인 정보 (Local Storage)
  const session = useSelector((store) => store.AuthReducer.USERINFO);
  const onClickUserImage = (username) => {
    window.location.href = `/${username}`;
  };
  // 댓글 기능 렌더링
  const RenderCommentTools = () => {
    // 유저 세션이 없다면.
    if (!session) return <></>;
    // 세션과 코멘트 아이디가 틀리다면
    if (session.id !== comment.comments_usersID) return <></>;
    // 최종 렌더링
    return (
      <div className="ml-auto">
        <CommentIcons
          commentId={comment.comments_id}
          replyId={null}
          deleteTo={deleteComment}
          restoreTo={restoreComment}
          deletedAt={comment.comments_deletedAt}
          setIsUpdateMode={setIsUpdateMode}
          isUpdateMode={isUpdateMode}
          getCommentsList={getCommentsList}
        />
      </div>
    );
  };
  // 댓글 내용 렌더링
  const RednerCommentContents = () => {
    // 삭제된 댓글
    if (!!comment.comments_deletedAt)
      return <span className="text-gray-600">삭제된 댓글입니다.</span>;
    // 최종 렌더링
    return <span>{comment.comments_htmlContent}</span>;
  };
  // 답글 렌더링
  const RenderReplies = () => {
    if (isRepliesOpened) {
      return (
        <>
          {replies.map((reply) => (
            <div key={reply.comments_id} className="px-4 bg-gray-100">
              <Replies
                commentId={comment.comments_id}
                replies={reply}
                updateReply={updateReply}
                deleteReply={deleteReply}
                restoreReply={restoreReply}
              />
            </div>
          ))}
          <InputReply
            createReply={createReply}
            commentId={comment.comments_id}
          />
        </>
      );
    }
    return <></>;
  };
  // 답글 보기 숨기기
  const RednerRepliesOpened = () => {
    // 펼쳐있으면.
    if (isRepliesOpened)
      return (
        <button
          className="ml-auto"
          onClick={async () => {
            if (!replies) await getReply(comment.comments_id);
            setIsRepliesOpened(false);
          }}
        >
          <span class="ml-1 text-xs text-gray-500">숨기기</span>
        </button>
      );
    // 닫혀있고 답글이 없을 경우
    if (comment.childcount > 0 && !isRepliesOpened)
      return (
        <button
          className="ml-auto"
          onClick={async () => {
            if (!replies) await getReply(comment.comments_id);
            setIsRepliesOpened(true);
          }}
        >
          <span class="ml-1 text-xs text-gray-500">
            {comment.childcount}개의 답글 보기
          </span>
        </button>
      );
    //
    return (
      <button
        className="ml-auto"
        onClick={async () => {
          if (!replies) await getReply(comment.comments_id);
          setIsRepliesOpened(true);
        }}
      >
        <span class="ml-1 text-xs text-gray-500">Add Reply</span>
      </button>
    );
  };
  // render
  return (
    <div className="flex flex-col my-3">
      <div className="flex flex-row items-center">
        {/** 댓글 작성자 이미지 */}
        <img
          class="rounded-full w-10 h-10"
          src={comment.users_proFileImageURL}
          alt=""
        />
        {/** 댓글 작성자 이름 */}
        <span
          class="ml-2 font-medium text-gray-800"
          onClick={() => onClickUserImage(comment.users_userName)}
        >
          {comment.users_userName}
        </span>
        {/** 댓글 작성일자 */}
        <span class="ml-1 text-xs text-gray-400">
          {comment.comments_createdAt.slice(0, 10)}
        </span>
        {/** 댓글 기능 */}
        <RenderCommentTools />
      </div>
      {/** 댓글 내용 */}
      <div className="w-full px-12 py-4">
        {/* 업데이트 모드 */}
        {!isUpdateMode ? (
          <RednerCommentContents />
        ) : (
          <div className="flex bg-gray-100 rounded-lg w-full h-28">
            <input
              className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
              type="text"
              placeholder={comment.comments_htmlContent}
              onChange={(event) => setCommentData(event.target.value)}
            />
            <button
              class="m-3 w-20 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
              type="submit"
              onClick={async () => {
                await updateComment(comment.comments_id, commentData, toast);
                await getCommentsList();
                setIsUpdateMode(!isUpdateMode);
              }}
            >
              수정
            </button>
          </div>
        )}
      </div>
      {/** 답글 펼치기*/}
      <RednerRepliesOpened />
      {/** 답글 */}
      <RenderReplies />
      <hr className="border-gray-200 w-full my-2" />
    </div>
  );
}
