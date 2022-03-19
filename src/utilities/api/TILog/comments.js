import request from './core';

///////////////// 인가가 필요한 요청 /////////////////

// 포스트에 새로운 댓글을 생성합니다.
const createComment = (postsId, htmlContent) => {
  return request({
    url: '/comments',
    method: 'post',
    data: {
      postsId: postsId,
      htmlContent: htmlContent,
    },
    withCredentials: true,
  });
};

// 댓글에 답글을 작성합니다.
const createReply = (commentId, postsId, htmlContent) => {
  return request({
    url: 'replies',
    method: 'post',
    data: {
      id: commentId,
      postsId: postsId,
      htmlContent: htmlContent,
      replyTo: 1,
    },
    withCredentials: true,
  });
};
// 댓글을 수정 합니다.
const updateComment = (commentId, htmlContent) => {
  return request({
    url: `/comments/${commentId}`,
    method: 'patch',
    data: {
      htmlContent: htmlContent,
    },
    withCredentials: true,
  });
};
// 포스트의 모든 코멘트를 삭제합니다.
const deleteComment = (commentId) => {
  return request({
    url: `/comments/${commentId}`,
    method: 'delete',
    withCredentials: true,
  });
};

// 포스트의 모든 코멘트를 삭제합니다.
const restoreComment = (commentId) => {
  return request({
    url: `/comments/restore/${commentId}`,
    method: 'patch',
    withCredentials: true,
  });
};

///////////////// 인가가 필요없는 요청 /////////////////

// 포스트의 모든 코멘트를 가져옵니다.
const getComments = (postId) => {
  return request({
    url: `/posts/comments/${postId}`,
    method: 'get',
    withCredentials: true,
  });
};

// 코멘트 모든 답글을 가져옵니다.
const getReplies = (commentid) => {
  return request({
    url: `/comments/replies/${commentid}`,
    method: 'get',
    withCredentials: true,
  });
};

const getCommentsWriteUsers = (postID) => {
  return request({
    url: `/comments/writeusers/post/${postID}`,
    method: 'get',
    withCredentials: true,
  });
};

// 특정 코멘트를 가져옵니다.
const getComment = (commentID) => {
  return request({
    url: `comments/${commentID}`,
    method: 'get',
    withCredentials: true,
  });
};

export {
  createComment,
  createReply,
  deleteComment,
  updateComment,
  getComments,
  getComment,
  getReplies,
  getCommentsWriteUsers,
  restoreComment,
};
