import React from "react";
import { IconContext } from "react-icons";
import { GoStar, GoRepo, GoLink } from "react-icons/go";
import { usePinnedRepo } from "../../../../utilities/hooks";
import TechIconLoader from "../../../Utility.components/techIconLoader";

export default function UserPinnedRepoCommponent({ username }) {
  const userpinnedrepo = usePinnedRepo(username);
  return (
    <div className="flex flex-col max-w-5xl w-full bg-white dark:bg-gray-800 p-10">
      {/* component title */}
      <div className="flex mb-5">
        <IconContext.Provider
          value={{ className: "mr-2 w-4 h-4 dark:text-blue-500" }}
        >
          <GoRepo />
          <span className="text-xs dark:text-gray-200">
            {username}'s Pinned Repository
          </span>
        </IconContext.Provider>
      </div>
      {/* content Card Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
        {/* Card */}
        {!userpinnedrepo ? (
          <>fetching...</>
        ) : (
          userpinnedrepo.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col w-full h-44 border border-gray-200 rounded-3xl bg-white filter drop-shadow-2xl"
            >
              {/* Card title */}
              <div className="px-5 py-3">
                <div className="flex items-center">
                  <IconContext.Provider value={{ className: "mr-1 w-4 h-4 " }}>
                    <GoRepo />
                  </IconContext.Provider>
                  <p className="text-lg text-gray-700 font-bold">
                    {repo.nameWithOwner}
                  </p>
                </div>
                {/* Card desc */}
                <div className="flex flex-col px-5 py-2">
                  <span className="text-xs text-gray-800 w-full truncate">
                    {repo.description}
                  </span>
                </div>
              </div>
              {/* Card category icon */}
              <div className="flex flex-row mx-5">
                {/* icon example-1 */}
                <div className="flex items-center justify-center w-9 h-9 border border-gray-400 rounded-xl mr-2">
                  <TechIconLoader
                    iconName={repo.primaryLanguage.name}
                    color="#393939"
                  />
                </div>
                {/* icon example-2 */}
                {/* <div className="flex items-center justify-center w-9 h-9 border border-gray-400 rounded-xl  mr-2">
              <TechIconLoader iconName="html" color="#393939" />
            </div> */}
              </div>
              {/* progress bar */}
              <div className="w-full h-1 bg-blue-100 round-full my-3">
                {/* <div className="w-2/3 h-full bg-blue-500"></div> */}
              </div>
              {/* desc content */}
              <div className="flex mx-5">
                <div>
                  <p class="text-gray-400 text-xs font-medium">
                    #Project Manager
                  </p>
                </div>
                <div className="flex items-center ml-auto">
                  <IconContext.Provider value={{ className: "mr-1 w-3 h-3" }}>
                    <GoLink />
                  </IconContext.Provider>
                  <p className="text-gray-700 text-xs mr-2">Demo</p>
                  <IconContext.Provider value={{ className: "mr-1 w-3 h-3" }}>
                    <GoStar />
                  </IconContext.Provider>
                  <p className="text-gray-700 text-xs">
                    {repo.stargazers.totalCount}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
        {/* Card End */}
      </div>
    </div>
  );
}
