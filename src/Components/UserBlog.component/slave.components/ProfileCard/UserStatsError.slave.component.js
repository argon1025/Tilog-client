import React, { Component } from "react";

export default class UserStatsError extends Component {
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
        {/* 프로필 카드 */}
        <div className="flex lg:flex-row items-center lg:items-start flex-col max-w-5xl w-full bg-white mt-10 p-10 rounded-lg border border-gray-200">
          <div className="h-28 w-28 rounded-full bg-gray-100"></div>
          {/** gitStatus */}
          <div className="flex flex-col m-5 w-9/12">
            {/* 이름 */}
            <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
            {/** UserBlogCustomization */}
            {/** 직업 */}
            <div className="mt-1 h-4 w-1/4 bg-gray-100 rounded"></div>
            {/* 깃허브 통계 */}
            <div className="flex mt-3 items-center">
              {/** 스타 수 */}
              <div className="h-4 w-10 bg-gray-100 rounded mr-3"></div>
              {/** 풀리퀘스트 수 */}
              <div className="h-4 w-10 bg-gray-100 rounded mr-3"></div>
              {/** 커밋 수 */}
              <div className="h-4 w-10 bg-gray-100 rounded mr-3"></div>
            </div>
            {/** UserBlogCustomization */}
            {/** 자기소개 */}
            <div className="mt-3">
              <div className="h-4 w-full bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
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
