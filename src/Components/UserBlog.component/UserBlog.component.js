import React, { Component } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import UserStatsComponent from "./slave.components/ProfileCard/UserStats.slave.component";
import UserTopLanguageComponent from "./slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "./slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "./slave.components/RecentPosts/RecentPosts.slave.component";

const USERNAME = "MINJE-98";

export default class UserBlogComponent extends Component {
  state = {};
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

  render() {
    const title = "</>";
    return (
      <div className="flex flex-col">
        {/* Nav */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div
              className="ml-5 mt-5 p-1 px-4 bg-black dark:bg-white cursor-pointer"
              onClick={this.clickLogoButton}
            >
              <h1 className="font-eng-sub-font-1 text-lg text-white dark:text-gray-800">
                {title}
              </h1>
            </div>
            {/* Login Button */}
            <div className="ml-auto mr-5">
              <button
                type="button"
                className="border text-black dark:text-white px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white dark:hover:text-gray-800 hover:bg-black hover:border-black dark:hover:bg-white focus:outline-none focus:shadow-outline"
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
          {/* UserStats */}
          <UserStatsComponent username={USERNAME} />
          {/* Top Language */}
          <UserTopLanguageComponent username={USERNAME} />

          <hr className="w-full dark:border-gray-900" />

          {/* Pinned Projects component */}
          <UserPinnedRepoCommponent username={USERNAME} />

          <hr className="w-full dark:border-gray-900" />

          {/* Recent Posts component */}
          <RecentPostsComponent username={USERNAME} />
          <hr className="w-full dark:border-gray-900" />
        </div>
      </div>
    );
  }
}
