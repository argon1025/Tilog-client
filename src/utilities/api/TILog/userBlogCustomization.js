import request from './core';

///////////////// 인가가 필요한 요청 /////////////////

// 유저 블로그 커스텀 데이터를 등록합니다.
const createUserBlogCustomization = (body) => {
  return request({
    url: 'user-blog-customizaion',
    method: 'post',
    data: {
      blogTitle: body.blogTitle,
      statusMessage: body.statusMessage,
      selfIntroduction: body.selfIntroduction,
    },
    withCredentials: true,
  });
};
// 유저 블로그 커스텀 데이터를 수정합니다.
const updateUserBlogCustomization = (body) => {
  return request({
    url: 'user-blog-customizaion',
    method: 'patch',
    data: {
      blogTitle: body.blogTitle,
      statusMessage: body.statusMessage,
      selfIntroduction: body.selfIntroduction,
    },
    withCredentials: true,
  });
};
// 유저 블로그 커스텀 데이터를 삭제합니다.
const deleteUserBlogCustomization = () => {
  return request({
    url: 'user-blog-customizaion',
    method: 'delete',
    withCredentials: true,
  });
};

///////////////// 인가가 필요없는 요청 /////////////////

// 유저 블로그 커스텀 데이터를 가져옵니다.
const getUserBlogCustomization = (userID) => {
  return request({
    url: `/user-blog-customizaion/${userID}`,
    method: 'get',
    withCredentials: true,
  });
};

export {
  createUserBlogCustomization,
  updateUserBlogCustomization,
  deleteUserBlogCustomization,
  getUserBlogCustomization,
};
