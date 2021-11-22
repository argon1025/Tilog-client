import React, { Component } from "react";
import {
  FaRegLaughSquint,
  FaRegCalendarAlt,
  FaRegEye,
  FaBookmark,
  FaHashtag,
  FaRegComment,
  FaRegThumbsUp,
} from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import { PostCommentContainer } from "../../Containers";
import { viewDetailPost } from "../../utilities/api";

export default class PostDetailComponent extends Component {
  state = {
    userName: null,
    categoryId: null,
    createdAt: null,
    id: null,
    likes: null,
    thumbNailUrl: null,
    title: null,
    markDownContent: null,
    private: null,
    proFileImageUrl: null,
    updatedAt: null,
    viewCounts: null,
  }
  // 포스트의 정보를 가져옵니다.
  getPostDetail = async(postID) => {
    try {
      const result = await viewDetailPost(4)
      console.log(result.data)
      this.setState({
        ...this.state,
        userName: result.userName,
        categoryId: result.categoryId,
        createdAt: result.createdAt,
        id: result.id,
        likes: result.likes,
        thumbNailUrl: result.thumbNailUrl,
        title: result.title,
        markDownContent: result.markDownContent,
        private: result.private,
        proFileImageUrl: result.proFileImageUrl,
        viewCounts: result.viewCounts
      })
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        {/* Nav */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div className="ml-5 mt-5 p-1 px-4 bg-black">
              <h1 className="font-eng-sub-font-1 text-lg text-white">
                {this.state.userName}.log
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
        </div>

        {/* Banner */}
        <div className="mt-5 flex flex-col justify-center items-center bg-black w-full h-96 overflow-hidden">
          <img
            className="object-cover h-full w-full filter blur-lg"
            src={this.state.thumbNailUrl}
          />
          <div className="absolute flex max-w-lg max-h-64 overflow-hidden filter drop-shadow-2xl rounded-3xl">
            <img className="object-cover h-full w-full" src={this.state.thumbNailUrl} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col w-full justify-center items-center">
          {/* header */}
          <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3">
            <div>
              {/* Title */}
              <h1 className="text-5xl font-bold text-gray-800">
                {this.state.title}
              </h1>
            </div>
            {/* header Info */}
            <div className="flex flex-row pt-3">
              <div className="flex text-gray-600 mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaRegCalendarAlt />
                  <span className="text-xs">{this.state.createdAt}</span>
                </IconContext.Provider>
              </div>
              <div className="flex text-gray-600  mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaRegEye />
                  <span className="text-xs">{this.state.viewCounts} viewed</span>
                </IconContext.Provider>
              </div>
              <div className="flex text-gray-600  mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaRegLaughSquint />
                  <span className="text-xs">{this.state.likes} likes</span>
                </IconContext.Provider>
              </div>
              <div className="flex text-gray-600  mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaBookmark />
                  <span className="text-xs">{this.state.categoryId}</span>
                </IconContext.Provider>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 w-full mt-10" />

          {/* Markdown Content */}
          <div className="flex flex-col max-w-5xl w-full mt-10 ml-3">
            <div>
              {this.state.markDownContent}
            </div>
          </div>

          <hr className="border-gray-200 w-full my-10" />
          {/* like Button */}
          <div className="flex flex-row">
            <button
              class="px-4 py-2 m-2 rounded-full bg-gray-100 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-300 focus:ring-blue-300 ring-opacity-50"
              type="submit"
            >
              <IconContext.Provider
                value={{ className: "w-7 h-7 focus:outline-none focus:ring" }}
              >
                <FaRegThumbsUp />
                <span className="text-xs">{this.state.likes}</span>
              </IconContext.Provider>
            </button>
          </div>
          {/* Tags */}
          <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3">
            <div className="flex text-gray-600  mr-3">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaHashtag />
                <span className="text-xs">Tags</span>
              </IconContext.Provider>
            </div>
            <div>
              <button
                class="px-4 py-2 m-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                type="submit"
              >
                Mysql
              </button>
              <button
                class="px-4 py-2 m-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                type="submit"
              >
                Database
              </button>
            </div>
          </div>

          {/* Comments */}
          <PostCommentContainer />
        </div>
      </div>
    );
  }
}
