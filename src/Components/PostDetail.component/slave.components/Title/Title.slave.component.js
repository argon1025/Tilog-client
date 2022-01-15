import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import { TechIconLoader } from "../../..";
import { useDeletePost } from "../../../../utilities/hooks/posts/useDeletePost";

export default function TitleComponent({
  title,
  createdAt,
  viewCounts,
  likes,
  categoryName,
  postId,
  ownerId,
}) {
  // 세션
  const session = useSelector((store) => store.AuthReducer.USERINFO);
  const fetchDeletePost = useDeletePost();
  // 수정 버튼
  const onClickModifyPost = () => {
    window.location.href = `/post/modify/${postId}`;
  };
  // 삭제 버튼
  const onClickRemovePost = async () => {
    await fetchDeletePost(postId, toast);
  };
  const RenderPostTools = () => {
    // 유저 세션이 없다면.
    if (!session) return <></>;
    // 세션과 코멘트 아이디가 틀리다면
    if (session.id !== ownerId) return <></>;
    return (
      <div className="ml-auto flex">
        <div
          className="flex text-gray-600 hover:text-blue-500 mr-3 cursor-pointer transition duration-300 ease-in-out dark:text-gray-300"
          onClick={onClickModifyPost}
        >
          <span className="text-xs ">게시글 수정</span>
        </div>
        <div
          className="flex text-gray-600 hover:text-blue-500 mr-3 cursor-pointer transition duration-300 ease-in-out dark:text-gray-300"
          onClick={onClickRemovePost}
        >
          <span className="text-xs">삭제</span>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col w-full max-w-6xl justify-start items-start my-10 px-10 overflow-hidden">
      <div>
        {/* Title */}
        <div className="flex h-5 my-5">
          <div className="w-5 h-5 text-gray-800 dark:text-blue-500">
            <TechIconLoader iconName={`${categoryName}`} />
          </div>
          <div className="w-10 bg-gray-800 m-2 dark:bg-blue-500"></div>
        </div>
        <h1 className="text-5xl font-medium text-gray-800 dark:text-gray-100">
          {title}
        </h1>
      </div>
      {/* Info */}
      <div className="flex flex-row my-10 w-full">
        <div className="flex text-gray-600 mr-3">
          <span className="text-xs dark:text-gray-300">
            {new Date(createdAt).getFullYear()}-
            {new Date(createdAt).getMonth() + 1}-{new Date(createdAt).getDay()}
          </span>
        </div>
        <div className="flex text-gray-600 mr-3 dark:text-gray-300">
          <span className="text-xs">{viewCounts} viewed</span>
        </div>
        <RenderPostTools />
        {/* <div className="flex text-gray-600  mr-3">
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaRegLaughSquint />
            <span className="text-xs">{likes} likes</span>
            </IconContext.Provider>
        </div> */}
      </div>
    </div>
  );
}
