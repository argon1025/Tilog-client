import React, { Component } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import queryString from "query-string";
import UserStatsComponent from "./slave.components/ProfileCard/UserStats.slave.component";
import UserTopLanguageComponent from "./slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "./slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "./slave.components/RecentPosts/RecentPosts.slave.component";

export default class UserBlogComponent extends Component {
  state = {
    params: {}
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
     this.state.params = queryString.parse(window.location.search);
  }
  render() {
    const title = `${this.state.params.username}.</>`;
    return (
      <div className="flex flex-col">
        {/* Nav */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div className="ml-5 mt-5 p-1 px-4 bg-black">
              <h1 className="font-eng-sub-font-1 text-lg text-white">
                {title}
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
          {/* UserStats */}
          <UserStatsComponent username={this.state.params.username} />
          {/* Top Language */}
          <UserTopLanguageComponent username={this.state.params.username}/>


          <hr className="w-full" />

          {/* Pinned Projects component */}
          <UserPinnedRepoCommponent username={this.state.params.username} />

          <hr className="w-full" />

          {/* Recent Posts component */}
          <RecentPostsComponent username={this.state.params.username} />
          <hr className="w-full" />
        </div>
      </div>
    );
  }
}
