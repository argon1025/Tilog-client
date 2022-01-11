import React, { Component } from "react";

// Icons
import { IconContext } from "react-icons";
import { FaRegComment } from "react-icons/fa";

export default class ArticleSkeleton extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    let title = "<TILog />";
    return (
      <div className="flex flex-col w-full animate-pulse justify-center items-center mt-7">
        {/* title */}
        <div className="flex flex-col w-full max-w-6xl justify-start items-start my-10 ml-5">
          <div className="w-full">
            {/* Title */}
            <div className="flex h-4 my-5">
              <div className="w-4 h-4  bg-gray-200 dark:bg-gray-600 rounded"></div>
              <div className="w-10 bg-gray-200 dark:bg-gray-600 m-1"></div>
            </div>
            <div className="w-3/4 h-10  bg-gray-200 dark:bg-gray-600 rounded"></div>
          </div>
          {/* Info */}
          <div className="flex flex-row my-10 w-full">
            <div className="w-10 h-4  bg-gray-200 dark:bg-gray-600 rounded mr-3"></div>
            <div className="w-10 h-4  bg-gray-200 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
        {/* title End */}
        <hr className="border-gray-200 w-full my-10 max-w-4xl mt-14" />
        {/* Content */}
        <div className="flex flex-col max-w-4xl w-full mt-10 ml-3">
          <div className="w-full h-72 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="w-3/4 h-2 mt-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="w-3/5 h-2 mt-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="w-7/12 h-2 mt-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <h1 className="text-7xl font-bold font-eng-sub-font-2 underline decoration-gray-100 text-gray-100 dark:text-blue-500 dark:decoration-gray-600 ">
            {title}
          </h1>
          <div className="w-6/12 h-2 mt-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="w-4/6 h-2 mt-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="w-3/4 h-2 mt-20 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="w-2/4 h-2 mt-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="w-2/5 h-2 mt-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
        </div>
        {/* Content End */}
        <hr className="border-gray-200 w-full my-10 mt-14" />
        {/* Comment */}
        <div className="flex flex-col w-full max-w-4xl justify-start items-start ml-3 my-10">
          <div className="flex text-gray-200 mr-3 my-5">
            {/* title */}
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
              <FaRegComment />
              <span className="text-xs">Comments</span>
            </IconContext.Provider>
          </div>
          {/* content */}
          <div className="w-full">
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg w-full h-28 mt-10">
              <div className="px-4 bg-gray-100 dark:bg-gray-700 w-full h-full rounded-l-lg text-base text-gray-500"></div>
            </div>
          </div>
        </div>
        {/* Comment End */}
      </div>
    );
  }
}
