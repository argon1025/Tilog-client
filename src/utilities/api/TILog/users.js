import request from './core';

// 유저 정보를 가져옵니다.
const getUserInfoToUserName = (username) => {
  return request({
    url: `/users/${username}`,
    method: 'get',
    withCredentials: true,
  });
};

export { getUserInfoToUserName };
