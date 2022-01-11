import React, { Component } from "react";

// Icons
import { IconContext } from "react-icons";
import { GoRepo } from "react-icons/go";

export default class UserPinnedRepoError extends Component {
  state = {
    errorCode: 0,
    errorMessage: "",
  };
  constructor(props) {
    super(props);

    this.state.errorCode = props.errorCode || undefined;
    this.state.errorMessage = props.errorMessage || undefined;
  }

  render() {
    return (
      <div className="flex flex-col w-full animate-pulse justify-center items-center">
        {/* 저장소 리스트 */}
        <div className="flex flex-col max-w-5xl w-full bg-white p-10">
          {/* component title */}
          <div className="flex mb-5">
            <IconContext.Provider
              value={{ className: "mr-2 w-4 h-4 text-gray-300" }}
            >
              <GoRepo />
              <span className="text-xs text-gray-300">Pinned Repository</span>
            </IconContext.Provider>
          </div>
          {/* content Card Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
            {/* Card */}
            <div className="flex flex-col w-full h-44 border border-gray-200 rounded-3xl bg-white filter drop-shadow-2xl">
              {/* Card title */}
              <div className="px-5 py-3">
                <div className="flex items-center">
                  <IconContext.Provider
                    value={{ className: "mr-1 w-4 h-4 text-gray-200" }}
                  >
                    <GoRepo />
                  </IconContext.Provider>
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                </div>
                {/* Card desc */}
                <div className="flex flex-col px-5 py-2">
                  <div className="h-4 w-2/4 bg-gray-200 rounded"></div>
                </div>
              </div>
              {/* Card category icon */}
              <div className="flex flex-row mx-5">
                {/* icon example-1 */}
                <div className="flex items-center justify-center w-9 h-9 border bg-gray-200 rounded-xl mr-2"></div>
                {/* icon example-2 */}
                {/* <div className="flex items-center justify-center w-9 h-9 border border-gray-400 rounded-xl  mr-2">
              <TechIconLoader iconName="html" color="#393939" />
            </div> */}
              </div>
              {/* progress bar */}
              <div className="w-full h-1 bg-gray-100 round-full my-3">
                {/* <div className="w-2/3 h-full bg-blue-500"></div> */}
              </div>
              {/* desc content */}
              <div className="flex mx-5">
                <div>
                  <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center ml-auto">
                  <div className="h-4 w-10 bg-gray-200 rounded mr-1"></div>
                  <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            {/* Card End */}
            {/* Card */}
            <div className="flex flex-col w-full h-44 border border-gray-200 rounded-3xl bg-white filter drop-shadow-2xl ">
              {/* Card title */}
              <div className="px-5 py-3">
                <div className="flex items-center">
                  <IconContext.Provider
                    value={{ className: "mr-1 w-4 h-4 text-gray-200" }}
                  >
                    <GoRepo />
                  </IconContext.Provider>
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                </div>
                {/* Card desc */}
                <div className="flex flex-col px-5 py-2">
                  <div className="h-4 w-2/4 bg-gray-200 rounded"></div>
                </div>
              </div>
              {/* Card category icon */}
              <div className="flex flex-row mx-5">
                {/* icon example-1 */}
                <div className="flex items-center justify-center w-9 h-9 border bg-gray-200 rounded-xl mr-2"></div>
                {/* icon example-2 */}
                {/* <div className="flex items-center justify-center w-9 h-9 border border-gray-400 rounded-xl  mr-2">
              <TechIconLoader iconName="html" color="#393939" />
            </div> */}
              </div>
              {/* progress bar */}
              <div className="w-full h-1 bg-gray-100 round-full my-3">
                {/* <div className="w-2/3 h-full bg-blue-500"></div> */}
              </div>
              {/* desc content */}
              <div className="flex mx-5">
                <div>
                  <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center ml-auto">
                  <div className="h-4 w-10 bg-gray-200 rounded mr-1"></div>
                  <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>
        {/* 저장소 리스트 끝 */}
        {/* 프로필 카드 끝 */}
        <div className="relative">
          <div className="absolute w-60 -top-40 -left-28 text-center">
            <p className="font-bold text-gray-400 text-4xl ">
              {this.state.errorCode} ERROR
            </p>
            <p className="text-gray-400 text-sm ">{this.state.errorMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}
