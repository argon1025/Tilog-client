import React, { Component } from "react";
// Icons
import { IconContext } from "react-icons";
import { GoTerminal } from "react-icons/go";

export default class UserTopLanguageError extends Component {
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
        {/* 언어 통계 */}
        <div className="flex flex-col max-w-5xl w-full bg-white p-10">
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
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300  mr-5"></div>
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300  mr-5"></div>
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300  mr-5"></div>
            <div className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-300  mr-5"></div>
          </div>
        </div>
        {/* 언어 통계 끝 */}
        <div className="relative">
          <div className="absolute w-60 -top-40 -left-32 text-center">
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
