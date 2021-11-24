import React, { Component } from "react";
import { Tiptap } from "./slave.components/TEditor.slave.component";
import { IconContext } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaBookmark, FaHashtag } from "react-icons/fa";

export default class PostCreateComponent extends Component {
  state = {
    title: "", // 게시글 제목
    contentData: {}, // 게시글 내용
    addStep: false, // 추가정보 입력모달 출력 여부
  };

  /**
   * 추가정보입력 모달을 연다
   */
  openAddStepModal = () => {
    this.setState({ ...this.state, addStep: true });
  };
  /**
   * 추가정보 입력 모달을 닫는다
   */
  closeAddStepModal = () => {
    this.setState({ ...this.state, addStep: false });
  };
  /**
   * 게시글 입력 정보를 상태에 반영한다
   */
  setContent = async (contentData) => {
    await this.updateState({ ...this.state, contentData: contentData });
  };
  /**
   * 게시글 입력 정보를 반환한다
   */
  getContent = () => {
    return this.state.contentData;
  };

  updateState = (stateObject) => {
    return new Promise((resolve) => {
      this.setState(stateObject, () => {
        resolve();
      });
    });
  };

  /**
   * 타이틀 입력정보를 상태에 반영한다
   */
  titleFromChange = (event) => {
    this.setState({ ...this.state, title: event.target.value });
  };

  render() {
    return this.state.addStep ? (
      <div class="flex justify-center h-screen items-center bg-gray-200 antialiased">
        {/* 추가정보 모달 */}
        <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p class="font-semibold text-gray-800">게시글 분류</p>
          </div>
          {/* content */}
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            {/* Add Tags */}
            <div className="flex text-gray-600  mr-3">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaHashtag />
                <span className="text-xs">태그 등록</span>
              </IconContext.Provider>
            </div>
            <input
              type="title"
              name="title"
              placeholder="원하는 태그를 입력하고 엔터!"
              className="p-3 my-5 bg-white border border-gray-200 rounded shadow-sm focus:outline-none"
            />
            <hr />
            {/* Add Category */}
            <div className="flex text-gray-600 mt-5">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaBookmark />
                <span className="text-xs">카테고리 등록</span>
              </IconContext.Provider>
            </div>
            <input
              type="title"
              name="title"
              placeholder="원하는 카테고리를 입력하고 엔터!"
              className="p-3 my-5 bg-white border border-gray-200 rounded shadow-sm focus:outline-none"
            />
          </div>
          <div class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p
              onClick={this.closeAddStepModal}
              class="font-semibold text-gray-600"
            >
              에디터로 돌아가기
            </p>
            <button
              type="button"
              className="border text-gray-400 px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-black hover:border-black focus:outline-none focus:shadow-outline"
              onClick={this.openAddStepModal}
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
    ) : (
      <div className="flex flex-col">
        {/* Editor */}
        <div className="flex flex-col m-10">
          {/* title */}
          <input
            type="title"
            name="title"
            placeholder="제목"
            onChange={this.titleFromChange}
            className="bg-white h-10 px-5 rounded-full text-4xl text-gray-700 focus:outline-none"
          />
          <hr className="mt-2" />
          {/* Editor Tiptap */}
          <Tiptap
            setContent={this.setContent}
            openAddStepModal={this.openAddStepModal}
            getContent={this.getContent}
          />
        </div>
      </div>
    );
  }
}
