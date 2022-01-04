// Components
import UserTopLanguageComponent from "../slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "../slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "../slave.components/RecentPosts/RecentPosts.slave.component";
import UserStatsComponent from "../slave.components/ProfileCard/UserStats.slave.component";
// Icons
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/go";
import { FaCheckDouble } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
// Hooks
import {
  useUserInfoToUserName,
  usePinnedRepo,
  useUserStats,
  useUserTopLanguage,
  useViewCursorPost,
} from "../../../utilities/hooks";
import StatsSkeleton from "./StatsSkeleton.slave.component";

export default function StatsComponent({ username }) {
  const [gitStats, gitStatsError, gitStatsStatusCode] = useUserStats(username);
  const [userInfo, userInfoError, userInfoStatusCode] =
    useUserInfoToUserName(username);
  const [topLang, topLangError, topLangStatusCode] =
    useUserTopLanguage(username);
  const [pinnedRepo, pinnedRepoError, pinnedRepoStatusCode] =
    usePinnedRepo(username);
  const [postList, postListError, postListStatusCode, getNextPostList] =
    useViewCursorPost(username);
  // Skeleton Loading
  if (
    !gitStatsStatusCode ||
    !userInfoStatusCode ||
    !topLangStatusCode ||
    !pinnedRepoStatusCode ||
    !postListStatusCode
  ) {
    return <StatsSkeleton />;
  }
  if (userInfoError && postListError)
    return (
      <>
        깃허브 에러코드{userInfoStatusCode} 틸로그 에러코드 {postListStatusCode}
      </>
    );
  // 깃허브 통계서버 에러
  if (topLangError || gitStatsError || pinnedRepoError)
    return <>깃허브 통계서버 에러</>;
  // 최종 렌더링
  return (
    <>
      {/* UserStats */}
      <UserStatsComponent userinfo={userInfo} gitstats={gitStats} />
      <div className="max-w-5xl w-full mt-5">
        {/* Top Language */}
        <UserTopLanguageComponent username={username} toplanguage={topLang} />

        <hr className="w-full" />

        {/* Pinned Projects component */}
        <UserPinnedRepoCommponent username={username} pinnedrepo={pinnedRepo} />

        <hr className="w-full" />

        {/* Recent Posts component */}
        <div className="flex flex-col max-w-5xl w-full bg-white p-10">
          {/* component title */}
          <div className="flex mb-5">
            <IconContext.Provider value={{ className: "mr-2 w-4 h-4 " }}>
              <GoBook />
              <span className="text-xs">{username}'s Recent Posts</span>
            </IconContext.Provider>
          </div>
          {/** post Card */}
          {
            // 포스트가 없을시
            !postList ? (
              <>포스트가 없어요</>
            ) : (
              // 포스트가 존재할 시
              postList.map((postdata) => (
                <div key={postdata.id}>
                  <RecentPostsComponent username={username} post={postdata} />
                </div>
              ))
            )
          }
          {/* Post Load Button */}
          <div
            className="flex w-full justify-center items-center mt-10 text-gray-400 transition duration-700 ease-in-out hover:text-gray-600 cursor-pointer hover:drop-shadow-xl"
            onClick={getNextPostList}
          >
            <IconContext.Provider
              value={{
                className: "mr-1 w-3 h-3 ",
              }}
            >
              <BsCaretDownFill />
            </IconContext.Provider>
            <p className="text-xs ">Load more</p>
          </div>
        </div>
      </div>
    </>
  );
}
