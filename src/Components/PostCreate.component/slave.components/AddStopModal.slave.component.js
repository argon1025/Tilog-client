import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";

import { FaBookmark, FaHashtag } from "react-icons/fa";

export default class AddStepModal extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="flex justify-center h-screen items-center bg-gray-200 antialiased">
        {/* 추가정보 모달 */}
        <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p class="font-semibold text-gray-800">게시글 분류</p>
          </div>
          {/* content */}
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            {/* Add Categories */}
            <div className="flex flex-col text-gray-600  mr-3 relative mt-3">
              <div className=" flex flex-row">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaBookmark />
                  <span className="text-xs">카테고리 등록</span>
                </IconContext.Provider>
              </div>
              <input
                type="category"
                name="category"
                placeholder="원하는 카테고리를 입력하고 엔터!"
                className="p-3 my-5 bg-white border border-gray-200 rounded shadow-sm focus:outline-none"
                onChange={this.props.setCategoryInput}
              />
              {/* Recommend Categories */}
              <div className="absolute  left-0 right-0 top-20 hidden">
                <ul class="rounded-md shadow-md bg-white mt-3 p-3 w-full">
                  <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                    추천 카테고리
                  </li>
                  <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                    <div class="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-pink-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                      <h3 class="text-gray-900 font-medium text-md">
                        Health Elixir
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Recommend Categories End */}
            </div>
            {/* Add Categories End */}
          </div>
        </div>
      </div>
    );
  }
}
