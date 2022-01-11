import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaSmog } from "react-icons/fa";

export default class RecentPostsError extends Component {
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
      <div className="flex w-full my-20 justify-center items-center">
        <div className="flex flex-col text-gray-600 items-center justify-center">
          <IconContext.Provider value={{ className: "w-4 h-4" }}>
            <FaSmog />
          </IconContext.Provider>
          {/* 에러코드 */}
          {this.state?.errorCode ? (
            <span className="mt-5 text-xs">{this.state.errorCode}</span>
          ) : (
            <></>
          )}
          {/* 에러 텍스트 */}
          {this.state?.errorMessage ? (
            <span className="text-xs">{this.state.errorMessage}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
