import React, { Component } from "react";

// Icons
import { IconContext } from "react-icons";
import { GoTerminal, GoRepo, GoBook } from "react-icons/go";

export default class StatsSkeleton extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col w-full animate-pulse justify-center items-center">
        {/* 프로필 카드 */}
        <div className="flex lg:flex-row items-center lg:items-start flex-col max-w-5xl w-full bg-white mt-10 p-10 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="h-28 w-28 rounded-full bg-gray-200 dark:bg-gray-600"></div>
          {/** gitStatus */}
          <div className="flex flex-col m-5 w-9/12">
            {/* 이름 */}
            <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            {/** UserBlogCustomization */}
            {/** 직업 */}
            <div className="mt-1 h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            {/* 깃허브 통계 */}
            <div className="flex mt-3 items-center">
              {/** 스타 수 */}
              <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded mr-3"></div>
              {/** 풀리퀘스트 수 */}
              <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded mr-3"></div>
              {/** 커밋 수 */}
              <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded mr-3"></div>
            </div>
            {/** UserBlogCustomization */}
            {/** 자기소개 */}
            <div className="mt-3">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
        {/* 프로필 카드 끝 */}

        {/* 언어 통계 */}
        <div className="flex flex-col max-w-5xl w-full bg-white p-10 dark:bg-gray-900">
          {/* component title */}
          <div className="flex mb-5">
            <IconContext.Provider
              value={{ className: "mr-2 w-4 h-4 text-gray-300" }}
            >
              <GoTerminal />
              <span className="text-xs text-gray-300 ">TOP languages</span>
            </IconContext.Provider>
          </div>
          {/* content Card Area */}
          <div className="lg:flex lg:flex-row grid grid-cols-2 justify-center items-center">
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300 dark:bg-gray-800 dark:border-gray-700 mr-5"></div>
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300 dark:bg-gray-800 dark:border-gray-700 mr-5"></div>
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300 dark:bg-gray-800 dark:border-gray-700 mr-5"></div>
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300 dark:bg-gray-800 dark:border-gray-700 mr-5"></div>
          </div>
        </div>
        {/* 언어 통계 끝 */}
        <hr className="w-full dark:border-gray-700" />

        {/* 저장소 리스트 */}
        <div className="flex flex-col max-w-5xl w-full bg-white p-10 dark:bg-gray-900">
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
            <div className="flex flex-col w-full h-44 border border-gray-200 rounded-3xl bg-white filter drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              {/* Card title */}
              <div className="px-5 py-3">
                <div className="flex items-center">
                  <IconContext.Provider
                    value={{ className: "mr-1 w-4 h-4 text-gray-200" }}
                  >
                    <GoRepo />
                  </IconContext.Provider>
                  <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                {/* Card desc */}
                <div className="flex flex-col px-5 py-2">
                  <div className="h-4 w-2/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
              {/* Card category icon */}
              <div className="flex flex-row mx-5">
                {/* icon example-1 */}
                <div className="flex items-center justify-center w-9 h-9 border bg-gray-200 dark:bg-gray-600 rounded-xl mr-2"></div>
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
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="flex items-center ml-auto">
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded mr-1"></div>
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
            {/* Card End */}
            {/* Card */}
            <div className="flex flex-col w-full h-44 border border-gray-200 rounded-3xl bg-white filter drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              {/* Card title */}
              <div className="px-5 py-3">
                <div className="flex items-center">
                  <IconContext.Provider
                    value={{ className: "mr-1 w-4 h-4 text-gray-200" }}
                  >
                    <GoRepo />
                  </IconContext.Provider>
                  <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                {/* Card desc */}
                <div className="flex flex-col px-5 py-2">
                  <div className="h-4 w-2/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
              {/* Card category icon */}
              <div className="flex flex-row mx-5">
                {/* icon example-1 */}
                <div className="flex items-center justify-center w-9 h-9 border bg-gray-200 dark:bg-gray-600 rounded-xl mr-2"></div>
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
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="flex items-center ml-auto">
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded mr-1"></div>
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>
        {/* 저장소 리스트 끝 */}
        <hr className="w-full dark:border-gray-700" />
        {/* Recent Posts component */}
        <div className="flex flex-col max-w-5xl w-full bg-white p-10 dark:bg-gray-900">
          {/* component title */}
          <div className="flex mb-5">
            <IconContext.Provider
              value={{ className: "mr-2 w-4 h-4 text-gray-200" }}
            >
              <GoBook />
              <span className="text-xs text-gray-200">Recent Posts</span>
            </IconContext.Provider>
          </div>
          {/** post Card */}
          <div className="flex flex-col w-full lg:max-w-5xl">
            {/* Category */}
            <div className="flex flex-row items-center">
              {/* Category Icon */}
              <div className="flex h-3">
                <div className="h-3 w-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
              {/* Category Name */}
              <div className="flex ml-1">
                <div className="h-4 w-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
            {/* Category End */}
            {/* Post Info */}
            <div className="flex flex-row mt-2 items-center">
              <div className="flex flex-col w-full">
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                <div>
                  <div className="h-4 w-2/4 bg-gray-200 dark:bg-gray-600 rounded mt-1"></div>
                  <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded mt-1"></div>
                </div>
              </div>
              <div className="ml-auto">
                <div className="h-32 w-48 bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
            <hr className="border-gray-200 w-full my-10 dark:border-gray-700" />
          </div>
          {/** post Card End*/}
        </div>
      </div>
    );
  }
}
