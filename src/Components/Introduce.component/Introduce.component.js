import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaHotjar, FaWpexplorer } from "react-icons/fa";

import NotFoundContent from "./NotFoundContent.component";
import { logout } from "../../utilities/api";
import { ProfileDropdownComponent } from "..";
import PostRank from "./slave.components/postCard.component/postRank.slave.component";
import TrendPostsComponent from "./TrendPosts.slave.component";

export default class IntroduceComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      searchScope: "WEEK",
    };
  }
  /**
   * 로고 클릭 이벤트
   */
  clickLogoButton = () => {
    window.location.href = "/";
  };
  /**
   * 로그인 클릭 이벤트
   */
  clickGithubLoginButton = () => {
    window.open(`${process.env.REACT_APP_TILOG_SERVER}/auth/github`, "_self");
  };
  /**
   * 로그아웃 이벤트
   */
  clickLogoutButton = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch (error) {
      console.log("로그아웃 에러!");
      console.log(error);
    }
  };
  render() {
    let title = "<TILog />";
    return (
      <div className="flex flex-col select-none w-full h-full">
        {/* Nav */}
        <div className="flex-0 flex flex-col justify-center items-center mb-5">
          <div className="flex flex-row max-w-5xl w-full items-center">
            {/* Logo */}
            <div
              className="ml-5 mt-5 p-1 px-4 cursor-pointer"
              onClick={this.clickLogoButton}
            >
              <h1 className="font-bold font-eng-sub-font-2 text-2xl text-gray-600 underline decoration-sky-500 animate-fade-in-down">
                {title}
              </h1>
            </div>
            {/* Login Button */}
            <div className="ml-auto mr-5">
              <ProfileDropdownComponent />
            </div>
          </div>
        </div>

        {/* now Issue */}
        <div className="flex-0 flex flex-col justify-center items-center bg-gray-100 py-10">
          <div className="flex max-w-5xl flex-col w-full px-4">
            {/* title */}
            <div className="flex flex-row items-center justify-center text-gray-600">
              {/* title Icon */}
              <IconContext.Provider value={{ className: "w-3 h-3" }}>
                <FaHotjar />
                <span className="text-sm text-gray-700">TRENDING ON TILOG</span>
              </IconContext.Provider>
              {/* title Text */}
              {/* searchScope */}
              <div className="ml-auto">
                <span
                  onClick={() => this.setState({ searchScope: "DAY" })}
                  className="text-sm border-r-2 pr-2 cursor-pointer hover:text-gray-800"
                >
                  Today
                </span>
                <span
                  onClick={() => this.setState({ searchScope: "WEEK" })}
                  className="text-sm pl-2 border-r-2 pr-2 cursor-pointer hover:text-gray-800"
                >
                  Weekly
                </span>
                <span
                  onClick={() => this.setState({ searchScope: "MONTH" })}
                  className="text-sm pl-2 cursor-pointer hover:text-gray-800"
                >
                  Monthly
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col w-full bg-gray-100 items-center">
          <div className="w-full flex flex-col sm:flex-wrap sm:flex-row gap-10 items-center justify-center"></div>
          <TrendPostsComponent searchScope={this.state.searchScope} />
        </div>
        <hr className="border-gray-200" />

        {/* your Recommend
        <div className="flex flex-col justify-center items-center py-10">
          <div className="flex flex-col max-w-5xl w-full px-4">
            <div className="flex text-gray-600">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaWpexplorer />
                <span className="text-xs">EXPLORE IN TILOG</span>
              </IconContext.Provider>
            </div>
            <div className="flex flex-row max-w-5xl w-full px-4">
              <NotFoundContent />
            </div>
          </div>
        </div>
      */}

        {/* Footer */}
        <div className="flex flex-col justify-center items-center bg-gray-900 relative inset-x-0 bottom-0">
          <div className="flex flex-row max-w-5xl w-full justify-center m-5">
            {/* sub */}
            <div className="mr-auto">
              <h1 className="text-2xl font-bold font-eng-sub-font-2 underline decoration-sky-100 text-gray-100">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
