import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaHotjar, FaWpexplorer } from "react-icons/fa";

import NotFoundContent from "./NotFoundContent.component";
import { logout } from "../../utilities/api";
import { ProfileDropdownComponent } from "..";

export default class IntroduceComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
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
      <div className="flex flex-col select-none">
        {/* Nav */}
        <div className="flex flex-col justify-center items-center bg-bgd-1 bg-fixed bg-cover filter drop-shadow-md">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div
              className="ml-5 mt-5 p-1 px-4 cursor-pointer"
              onClick={this.clickLogoButton}
            >
              <h1 className="font-bold font-eng-sub-font-2 text-2xl text-gray-200 underline decoration-sky-500 animate-fade-in-down">
                {title}
              </h1>
            </div>
            {/* Login Button */}
            <div className="ml-auto mr-5">
              <ProfileDropdownComponent />
            </div>
          </div>
          {/* Banner */}
          <div className="flex flex-row max-w-5xl w-full py-10 px-5">
            <div className="flex flex-col w-full text-7xl sm:text-8xl lg:text-8xl xl:text-8xl text-white font-bold my-8">
              Travel to
              <h1 className="font-bold font-eng-sub-font-2  underline decoration-sky-500">
                {title}
              </h1>
            </div>
          </div>
        </div>

        <hr className="border-gray-900" />

        {/* now Issue */}
        <div className="flex flex-col justify-center items-center py-10">
          <div className="flex flex-col max-w-5xl w-full px-4">
            {/* title */}
            <div className="flex text-gray-600">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaHotjar />
                <span className="text-xs">TRENDING ON TILOG</span>
              </IconContext.Provider>
            </div>
            {/* content */}
            <div className="flex flex-row max-w-5xl w-full px-4">
              <NotFoundContent />
              {/* <TrendPostsComponent /> */}
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* your Recommend */}
        <div className="flex flex-col justify-center items-center py-10">
          <div className="flex flex-col max-w-5xl w-full px-4">
            {/* title */}
            <div className="flex text-gray-600">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaWpexplorer />
                <span className="text-xs">EXPLORE IN TILOG</span>
              </IconContext.Provider>
            </div>
            {/* content */}
            <div className="flex flex-row max-w-5xl w-full px-4">
              <NotFoundContent />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Footer */}
        <div className="flex flex-col justify-center items-center mt-20 bg-gray-900 relative inset-x-0 bottom-0">
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
