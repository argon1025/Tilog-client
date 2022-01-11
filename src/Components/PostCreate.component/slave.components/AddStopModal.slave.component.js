import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";

import { FaBookmark, FaTrashAlt } from "react-icons/fa";
import TechIconLoader from "../../Utility.components/techIconLoader";

export default class AddStepModal extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    let recommendList;
    if (this.props.categoryRecommend.length > 0) {
      recommendList = this.props.categoryRecommend.map((listData) => {
        return (
          <li
            id={listData.id}
            key={listData.id}
            className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={this.props.setCategoryIdData}
          >
            <div className="flex justify-center items-center">
              <div className="w-6 h-6 text-gray-800 dark:text-gray-200">
                <TechIconLoader iconName={listData.categoryName} />
              </div>
            </div>
            <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
              <h3 className="text-gray-900 font-medium text-md dark:text-gray-200">
                {listData.categoryName}
              </h3>
            </div>
          </li>
        );
      });
    } else {
      recommendList = <div></div>;
    }
    return (
      <div className="flex justify-center h-screen items-center bg-gray-200 antialiased dark:bg-gray-900">
        {/* 추가정보 모달 */}
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl dark:border-gray-700">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg dark:bg-gray-800">
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              게시글 분류
            </p>
          </div>
          {/* content */}
          <div className="flex flex-col px-6 py-5 bg-gray-50 dark:bg-gray-700">
            {/* Add Categories */}
            <div className="flex flex-col text-gray-600 mr-3 relative mt-3 dark:text-gray-200">
              <div className=" flex flex-row">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaBookmark />
                  <span className="text-xs">카테고리 등록</span>
                </IconContext.Provider>
              </div>
              {this.props.categoryIdData.id === undefined ? (
                <input
                  type="category"
                  name="category"
                  placeholder="관련있는 기술태그를 검색후 지정하세요"
                  className="p-3 my-5 bg-white border border-gray-200 rounded shadow-sm focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                  onChange={this.props.setCategoryInput}
                  autoComplete="off"
                />
              ) : (
                <div className="w-full relative">
                  <input
                    type="category"
                    name="category"
                    placeholder={this.props.categoryIdData.name}
                    value={this.props.categoryIdData.name}
                    className="w-full p-3 my-5 bg-gray-200 border border-gray-400 cursor-default rounded shadow-sm dark:bg-gray-700"
                    autoComplete="off"
                    disabled
                  />
                  <div
                    className="flex absolute right-3 top-9 cursor-pointer"
                    onClick={this.props.removeCategoryData}
                  >
                    <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                      <FaTrashAlt />
                      <span className="text-xs">삭제</span>
                    </IconContext.Provider>
                  </div>
                </div>
              )}
              {/* Recommend Categories */}
              <div
                className={
                  this.props.categoryRecommend.length > 0
                    ? "absolute left-0 right-0 top-20"
                    : "hidden"
                }
              >
                <ul className="rounded-md shadow-md bg-white mt-3 p-3 w-full dark:bg-gray-800 dark:border dark:border-gray-500">
                  <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2 dark:text-gray-100">
                    추천 카테고리
                  </li>
                  {recommendList}
                </ul>
              </div>
              {/* Recommend Categories End */}
            </div>
            {/* Add Categories End */}
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg dark:bg-gray-800">
            <p
              onClick={this.props.closeAddStepModal}
              className="font-semibold text-gray-600 cursor-pointer transition duration-300 ease-in-out hover:text-blue-500 dark:text-gray-200"
            >
              에디터로 돌아가기
            </p>
            <button
              type="button"
              className="border text-gray-400 px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 hover:border-gray-700 focus:outline-none focus:shadow-outline dark:text-gray-200 "
              onClick={this.props.setPostRequest}
            >
              <div className="flex flex-row flex-nowrap align-middle justify-center items-center ">
                <span className="text-sm">게시글 발행하기</span>
                <IconContext.Provider value={{ className: "ml-2 w-7 h-7" }}>
                  <FaTelegramPlane />
                </IconContext.Provider>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
