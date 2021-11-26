import React, { Component } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import queryString from "query-string";
import UserStatsComponent from "./slave.components/ProfileCard/UserStats.slave.component";
import UserTopLanguageComponent from "./slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "./slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "./slave.components/RecentPosts/RecentPosts.slave.component";
import { ProfileDropdownComponent } from "..";

export default class UserBlogComponent extends Component {
  state = {
    params: {}
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
     this.state.params = queryString.parse(window.location.search);
  }

  /**
   * 로고 클릭 이벤트
   */
  clickLogoButton = () => {
    window.location.href = "/";
  };

  render() {
    const title = `${this.state.params.username}.log`;
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
            <ProfileDropdownComponent />
            </div>
          </div>
          {/* UserStats */}
          <UserStatsComponent username={this.state.params.username} />
          {/* Top Language */}
          <UserTopLanguageComponent username={this.state.params.username}/>

          <hr className="w-full dark:border-gray-900" />

          {/* Pinned Projects component */}
          <UserPinnedRepoCommponent username={this.state.params.username} />

          <hr className="w-full dark:border-gray-900" />

          {/* Recent Posts component */}
          <RecentPostsComponent username={this.state.params.username} />
          <hr className="w-full dark:border-gray-900" />
        </div>
      </div>
    );
  }
}
