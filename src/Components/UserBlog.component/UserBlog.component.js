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
          <div className="max-w-5xl w-full mt-5">
            <Tab.Group>
              <Tab.List className="grid grid-cols-2 gap-4 p-2 border border-gray-200 rounded-xl ">
                <Tab
                  className={({ selected }) => {
                    return selected
                      ? "w-full py-2.5 text-sm leading-5 font-medium text-gray-900 rounded-lg bg-white shadow"
                      : "w-full text-sm focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 text-gray-300 hover:bg-white/[0.12] hover:text-gray-500";
                  }}
                >
                  통계
                </Tab>
                <Tab
                  className={({ selected }) => {
                    return selected
                      ? "w-full py-2.5 text-sm leading-5 font-medium text-gray-900 rounded-lg bg-white shadow"
                      : "w-full text-sm  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 text-gray-300 hover:bg-white/[0.12] hover:text-gray-500";
                  }}
                >
                  글
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  {/* Top Language */}
                  <UserTopLanguageComponent
                    username={this.state.params.username}
                  />

                  <hr className="w-full dark:border-gray-900" />

                  {/* Pinned Projects component */}
                  <UserPinnedRepoCommponent
                    username={this.state.params.username}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  {/* Recent Posts component */}
                  <RecentPostsComponent username={this.state.params.username} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    );
  }
}
