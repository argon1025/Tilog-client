// Components
import UserTopLanguageComponent from "../slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "../slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "../slave.components/RecentPosts/RecentPosts.slave.component";
import UserStatsComponent from "../slave.components/ProfileCard/UserStats.slave.component";
// Icons
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/go";
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
  const [gitStats, gitStatsError, gitStatsErrorMessage, gitStatsStatusCode] = useUserStats(username);
  const [userInfo, userInfoError, userInfoErrorMessage, userInfoStatusCode] = useUserInfoToUserName(username);
  const [topLang, topLangError, topLangErrorMessage, topLangStatusCode] = useUserTopLanguage(username);
  const [pinnedRepo, pinnedRepoError, pinnedRepoErrorMessage, pinnedRepoStatusCode] = usePinnedRepo(username);
  const [postList, postListError, postListErrorMessage, postListStatusCode, getNextPostList] = useViewCursorPost(username);
  // Skeleton Loading 
  if(!gitStatsStatusCode || !userInfoStatusCode || !topLangStatusCode || !pinnedRepoStatusCode || !postListStatusCode) return <StatsSkeleton />;
  // 최종 렌더링
  return (
      <>
      {/* UserStats */}
      {
      userInfoError ? <>{userInfoStatusCode}/{userInfoErrorMessage}</> :
      gitStatsError ? <>{gitStatsStatusCode}/{gitStatsErrorMessage}</> :
      <UserStatsComponent userinfo={userInfo} gitstats={gitStats}/> 
      }
      <div className="max-w-5xl w-full mt-5">
      {/* Top Language */}
      {topLangError ? <>{topLangStatusCode}/{topLangErrorMessage}</> :
      <UserTopLanguageComponent username={username} toplanguage={topLang} />
      }

      <hr className="w-full" />

      {/* Pinned Projects component */}
      {pinnedRepoError ? <>{pinnedRepoStatusCode}/{pinnedRepoErrorMessage}</> :
      <UserPinnedRepoCommponent username={username} pinnedrepo={pinnedRepo}/>
      }
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
          postListError ? <>{postListStatusCode}/{postListErrorMessage}</> :
          // 포스트가 없을시
          !postList ? <>포스트가 없어요</> 
          // 포스트가 존재할 시
          : postList.map(postdata=> <div key={postdata.id}><RecentPostsComponent username={username} post={postdata} /></div>)}
        {/* Post Load Button */}
        <div className="flex w-full justify-center items-center mt-10"
          onClick={getNextPostList}
        >
          <IconContext.Provider
            value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
            >
            <BsCaretDownFill />
          </IconContext.Provider>
          <p className="text-gray-400 text-xs">Load More</p>
        </div>
      </div>
      </div>
    </>
  );
}
