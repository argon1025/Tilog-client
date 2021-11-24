import React, { Component } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import {
  GoGitPullRequest,
  GoGitCommit,
  GoTerminal,
  GoStar,
  GoBook,
  GoRepo,
  GoLink,
} from "react-icons/go";
import { FaRegThumbsUp, FaClock, FaLock, FaCheckDouble } from "react-icons/fa";
import { SiTypescript, SiHtml5 } from "react-icons/si";
import TechIconLoader from "../Utility.components/techIconLoader";

export default class UserBlogComponent extends Component {
  state = {};
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const title = "</>";
    return (
      <div className="flex flex-col">
        {/* Nav */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div className="ml-5 mt-5 p-1 px-4 bg-black">
              <h1 className="font-eng-sub-font-1 text-lg text-white">
                {title}
              </h1>
            </div>
            {/* Login Button */}
            <div className="ml-auto mr-5">
              <button
                type="button"
                className="border text-black px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-black hover:border-black focus:outline-none focus:shadow-outline"
                onClick={this.getPostDetail}
              >
                <div className="flex flex-row flex-nowrap align-middle justify-center items-center">
                  <span className="text-sm">Login with Github</span>
                  <IconContext.Provider value={{ className: "ml-2 w-7 h-7" }}>
                    <DiGithubBadge />
                  </IconContext.Provider>
                </div>
              </button>
            </div>
          </div>

          {/* Profile card */}
          <div className="flex lg:flex-row items-center lg:items-start flex-col max-w-5xl w-full bg-white mt-10 p-10 rounded-lg border border-gray-00">
            <img
              className="h-28 w-28 object-cover object-center rounded-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="photo"
            />
            <div className="m-5">
              {/* Name, message */}
              <p className="text-xl text-gray-700 font-bold">Dany Bailey</p>
              <p className="text-sm text-gray-400">@Software Engineer</p>
              {/* user gitInfo */}
              <div className="flex mt-3 items-center">
                <IconContext.Provider value={{ className: "w-4 h-4" }}>
                  <GoStar />
                  <p className="text-sm text-gray-700 font-bold mr-1">30</p>
                  <p className="text-sm text-gray-400">stars</p>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "ml-2 w-4 h-4" }}>
                  <GoGitPullRequest />
                  <p className="text-sm text-gray-700 font-bold mr-1">40</p>
                  <p className="text-sm text-gray-400">PRs</p>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "ml-2 w-4 h-4" }}>
                  <GoGitCommit />
                  <p className="text-sm text-gray-700 font-bold mr-1">1280</p>
                  <p className="text-sm text-gray-400">Commits</p>
                </IconContext.Provider>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-600">
                  보내는 튼튼하며, 웅대한 그림자는 것이다. 하여도 대한
                  찾아다녀도, 설산에서 트고, 보는 방지하는 그들에게 것이다.
                  바이며, 위하여 바이며, 내려온 눈에 설레는 고동을 청춘의 있는
                  것이다. 얼음과 아니더면, 가는 시들어 만천하의 있음으로써
                  설레는 것이다. 보내는 천자만홍이 있는 아니한 인생의 그들은
                  주며, 그러므로 천하를 뿐이다. 이것은 눈에 무엇을 만물은
                  있으며, 과실이 창공에 있는가? 이 밝은 튼튼하며, 옷을 사막이다.
                  구하지 너의 인생에 우리 길을 때문이다. 속에서 바이며, 그것을
                  있는 용기가 속잎나고, 것이다. 작고 이상의 위하여, 위하여서.
                </p>
              </div>
            </div>
          </div>

          {/* TOP languages component */}
          <div className="flex flex-col max-w-5xl w-full bg-white p-10">
            {/* component title */}
            <div className="flex mb-5">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <GoTerminal />
                <span className="text-xs">Dany Bailey's TOP languages</span>
              </IconContext.Provider>
            </div>
            {/* content Card Area */}
            <div className="lg:flex lg:flex-row grid grid-cols-2 justify-center items-center">
              {/* Card */}
              <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-800 mr-5">
                {/* Card icon */}
                <div className="flex items-center justify-center w-9 h-9 border border-gray-500 rounded-xl m-3">
                  <TechIconLoader iconName="Typescript" color="white" />
                </div>
                {/* Card title */}
                <div className="m-3">
                  <p className="text-sm text-gray-100 font-bold mr-1">
                    TypeScript
                  </p>
                  <p className="text-xs text-gray-400">67% Total used</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full" />

          {/* Pinned Projects component */}
          <div className="flex flex-col max-w-5xl w-full bg-white p-10">
            {/* component title */}
            <div className="flex mb-5">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <GoRepo />
                <span className="text-xs">Dany Bailey's Pinned Repository</span>
              </IconContext.Provider>
            </div>
            {/* content Card Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
              {/* Card */}
              <div className="flex flex-col w-full h-44 border border-gray-200 rounded-3xl bg-white filter drop-shadow-2xl">
                {/* Card title */}
                <div className="px-5 py-3">
                  <div className="flex items-center">
                    <IconContext.Provider value={{ className: "mr-1 w-4 h-4" }}>
                      <GoRepo />
                    </IconContext.Provider>
                    <p className="text-lg text-gray-700 font-bold">
                      argon1025/TILog-server
                    </p>
                  </div>
                  {/* Card desc */}
                  <div className="flex flex-col px-5 py-2">
                    <span className="text-xs text-gray-800 w-full truncate">
                      Harmony Project Serverless Backend Application
                    </span>
                  </div>
                </div>
                {/* Card category icon */}
                <div className="flex flex-row mx-5">
                  {/* icon example-1 */}
                  <div className="flex items-center justify-center w-9 h-9 border border-gray-400 rounded-xl mr-2">
                    <TechIconLoader iconName="Typescript" color="#393939" />
                  </div>
                  {/* icon example-2 */}
                  <div className="flex items-center justify-center w-9 h-9 border border-gray-400 rounded-xl  mr-2">
                    <TechIconLoader iconName="html" color="#393939" />
                  </div>
                </div>
                {/* progress bar */}
                <div className="w-full h-1 bg-blue-100 round-full my-3">
                  <div className="w-2/3 h-full bg-blue-500"></div>
                </div>
                {/* desc content */}
                <div className="flex mx-5">
                  <div>
                    <p class="text-gray-400 text-xs font-medium">
                      #Project Manager
                    </p>
                  </div>
                  <div className="flex items-center ml-auto">
                    <IconContext.Provider value={{ className: "mr-1 w-3 h-3" }}>
                      <GoLink />
                    </IconContext.Provider>
                    <p className="text-gray-700 text-xs mr-2">Demo</p>
                    <IconContext.Provider value={{ className: "mr-1 w-3 h-3" }}>
                      <GoStar />
                    </IconContext.Provider>
                    <p className="text-gray-700 text-xs">3</p>
                  </div>
                </div>
              </div>
              {/* Card End */}
            </div>
          </div>

          <hr className="w-full" />

          {/* Recent Posts component */}
          <div className="flex flex-col max-w-5xl w-full bg-white p-10">
            {/* component title */}
            <div className="flex mb-5">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <GoBook />
                <span className="text-xs">Dany Bailey's Recent Posts</span>
              </IconContext.Provider>
            </div>
            {/* Card Area */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl gap-5">
              {/* Card */}
              <div className="rounded-lg w-full h-72 bg-white shadow-lg">
                {/* Category Icon */}
                <div className="absolute m-3 bg-white flex items-center justify-center w-9 h-9 rounded-xl shadow-lg">
                  <TechIconLoader iconName="html" color="#393939" />
                </div>
                {/* Image */}
                <img
                  class="rounded-t-lg h-44 w-full object-cover"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
                {/* Card content */}
                <div>
                  {/* title */}
                  <div className="relative p-3">
                    <h5 class="text-gray-800 font-bold text-base tracking-tight w-full h-12 truncate">
                      I want to Job
                    </h5>
                  </div>
                  <hr className="w-full" />
                  {/* Info */}
                  <div className="flex items-center mt-3 mx-3">
                    <div className="flex items-center mr-auto">
                      <IconContext.Provider
                        value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
                      >
                        <FaRegThumbsUp />
                      </IconContext.Provider>
                      <p className="text-gray-400 text-xs">3</p>
                    </div>
                    <div className="flex mr-3 items-center">
                      <IconContext.Provider
                        value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
                      >
                        <FaClock />
                      </IconContext.Provider>
                      <p className="text-gray-400 text-xs">3 days ago</p>
                    </div>
                    <div className="flex items-center">
                      <IconContext.Provider
                        value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
                      >
                        <FaLock />
                      </IconContext.Provider>
                      <p className="text-gray-400 text-xs">Locked</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card End */}
            </div>
            {/* Post Load Button */}
            <div className="flex w-full justify-center items-center mt-10">
              <IconContext.Provider
                value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
              >
                <FaCheckDouble />
              </IconContext.Provider>
              <p className="text-gray-400 text-xs">Load More</p>
            </div>
          </div>
          <hr className="w-full" />
        </div>
      </div>
    );
  }
}
