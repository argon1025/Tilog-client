import React, { Component } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import queryString from "query-string";
import UserStatsComponent from "./slave.components/ProfileCard/UserStats.slave.component";
import UserTopLanguageComponent from "./slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "./slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "./slave.components/RecentPosts/RecentPosts.slave.component";
import { ProfileDropdownComponent } from "..";
import { Tab } from "@headlessui/react";
import UserActivityComponent from "./slave.components/Activity/UserActivity.slave.component";

export default class UserBlogComponent extends Component {
  state = {
    params: {},
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
          <div className="flex flex-row max-w-5xl w-full items-center">
            {/* Logo */}
            <div className="flex cursor-pointer">
              <h1
                onClick={this.clickLogoButton}
                className="font-eng-sub-font-2 text-2xl text-gray-700 transition ease-in-out duration-300 hover:text-sky-500 hover:drop-shadow-2xl"
              >
                {"#"}
              </h1>
              <h1 className="font-eng-sub-font-2 text-2xl text-blue-600/70">
                {">"}
              </h1>
              <h1 className="font-bold font-eng-sub-font-2 text-xl text-gray-800 underline decoration-gray-300 transition ease-in-out duration-700 hover:text-sky-500 hover:drop-shadow-2xl hover:decoration-sky-500">
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
          <div className="max-w-5xl w-full mt-5">
            {/* Top Language */}
            <UserTopLanguageComponent username={this.state.params.username} />

            <hr className="w-full" />

            {/* Pinned Projects component */}
            <UserPinnedRepoCommponent username={this.state.params.username} />

            <hr className="w-full" />

            {/* Recent Posts component */}
            <RecentPostsComponent username={this.state.params.username} />
          </div>
        </div>
      </div>
    );
  }
}
