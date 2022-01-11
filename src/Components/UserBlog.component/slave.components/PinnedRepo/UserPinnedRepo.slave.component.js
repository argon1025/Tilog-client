// Icons
import { IconContext } from "react-icons";
import { GoStar, GoRepo, GoLink } from "react-icons/go";
// Icon Image
import TechIconLoader from "../../../Utility.components/techIconLoader";

export default function UserPinnedRepoCommponent({ username, pinnedrepo }) {
  const onClickGithubRepo = (repo) => {
    window.open(`https://www.github.com/${repo}`, "_blank");
  };
  return (
    <div className="flex flex-col max-w-5xl w-full bg-white p-10 dark:bg-gray-900">
      {/* component title */}
      <div className="flex mb-5">
        <IconContext.Provider
          value={{ className: "mr-2 w-4 h-4 dark:text-blue-500" }}
        >
          <GoRepo />
          <span className="text-xs dark:text-gray-100">
            {username}'s Pinned Repository
          </span>
        </IconContext.Provider>
      </div>
      {/* content Card Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
        {/* Card */}
        {pinnedrepo.map((repo) => (
          <div
            key={repo.id}
            onClick={() => onClickGithubRepo(repo.nameWithOwner)}
            className="flex flex-col w-full h-44 border border-gray-200 rounded-3xl bg-white filter cursor-pointer transition duration-500 ease-in-out hover:drop-shadow-2xl dark:bg-gray-800 dark:border-gray-600 dark:hover:drop-shadow-[0_25px_25px_rgba(30,41,59)]"
          >
            {/* Card title */}
            <div className="px-5 py-3">
              <div className="flex items-center">
                <IconContext.Provider
                  value={{ className: "mr-1 w-4 h-4 dark:text-blue-500" }}
                >
                  <GoRepo />
                </IconContext.Provider>
                <p className=" text-gray-700 font-medium truncate dark:text-gray-50">
                  {repo.nameWithOwner.split("/")[1]}
                </p>
              </div>
              {/* Card desc */}
              <div className="flex flex-col px-5 py-2">
                <span className="text-xs text-gray-800 w-full truncate dark:text-gray-100">
                  {repo.description}
                </span>
              </div>
            </div>
            {/* Card category icon */}
            <div className="flex flex-row mx-5">
              {/* icon example-1 */}
              <div className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-xl p-2 text-gray-800 dark:text-blue-500 dark:border-gray-700">
                <TechIconLoader iconName={repo.primaryLanguage.name} />
              </div>
              {/* icon example-2 */}
              {/* <div className="flex items-center justify-center w-9 h-9 border border-gray-400 rounded-xl  mr-2">
              <TechIconLoader iconName="html" color="#393939" />
            </div> */}
            </div>
            {/* progress bar */}
            <div className="w-full h-1 bg-gray-200 round-full my-3 dark:bg-gray-700">
              {/* <div className="w-2/3 h-full bg-blue-500"></div> */}
            </div>
            {/* desc content */}
            <div className="flex mx-5">
              <div>
                {/*
                <p className="text-gray-400 text-xs font-medium">
                  #Project Manager
                </p>
                */}
              </div>
              <div className="flex items-center ml-auto">
                <IconContext.Provider
                  value={{ className: "mr-1 w-3 h-3 dark:text-blue-500" }}
                >
                  <GoLink />
                </IconContext.Provider>
                <p className="text-gray-700 text-xs mr-2 dark:text-gray-100">
                  Click to open repository
                </p>
                <IconContext.Provider
                  value={{ className: "mr-1 w-3 h-3 dark:text-blue-500" }}
                >
                  <GoStar />
                </IconContext.Provider>
                <p className="text-gray-700 text-xs dark:text-gray-100">
                  {repo.stargazers.totalCount}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Card End */}
      </div>
    </div>
  );
}
