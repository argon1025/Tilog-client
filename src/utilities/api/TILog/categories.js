import request from './core';

// 카테고리를 생성합니다.
const createCategory = (categoryName) => {
  return request({
    url: '/categories',
    method: 'post',
    data: {
      categoryName: categoryName,
      iconUrl: '',
    },
    withCredential: true,
  });
};
// 카테고리를 검색
const searchCategory = (categoryName) => {
  return request({
    url: '/categories/search',
    method: 'get',
    params: {
      categoryName: categoryName,
    },
    withCredentials: true,
  });
};
export { createCategory, searchCategory };
