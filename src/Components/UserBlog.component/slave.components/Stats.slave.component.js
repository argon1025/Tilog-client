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
import { useState } from "react";

export default function StatsComponent({ username }) {
  const [gitStats, gitStatsError, gitStatsErrorMessage, gitStatsStatusCode] = useUserStats(username);
  const [topLang, topLangError, topLangErrorMessage, topLangStatusCode] = useUserTopLanguage(username);
  const [pinnedRepo, pinnedRepoError, pinnedRepoErrorMessage, pinnedRepoStatusCode] = usePinnedRepo(username);
  const [userInfo, userInfoError, userInfoErrorMessage, userInfoStatusCode] = useUserInfoToUserName(username);
  const [postList, postListError, postListErrorMessage, postListStatusCode, getNextPostList] = useViewCursorPost(username);
  const [isLoad, setIsLoad] = useState(false);
  
  console.log(gitStatsStatusCode, topLangStatusCode, pinnedRepoStatusCode, userInfoStatusCode, postListStatusCode)
  console.log(gitStatsError, topLangError, pinnedRepoError)
  // Skeleton Loading 
  if(!userInfoStatusCode || !gitStatsStatusCode || !pinnedRepoStatusCode || !topLangStatusCode || !postListStatusCode) return <StatsSkeleton />;
  // 최종 렌더링
  return (
      <>
      {userInfoError ? <>{userInfoStatusCode}/{userInfoErrorMessage}</> :<>
      {/* UserStats */}
      {
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
          : postList.map(postdata=> <div key={postdata.id}>
            <RecentPostsComponent username={username} post={postdata} />
            </div>
            )
          }
          {/* Post Load Button */}
          {
            // 추가 포스터가 없을때
            postListStatusCode === 404 ? <></> :
            // 더보기 버튼을 눌렀을때
            isLoad ?<div className="flex w-full justify-center items-center mt-10">뺑글뺑글</div> :
            // 최종 렌더링
            <div className="flex w-full justify-center items-center mt-10" onClick={async ()=>{
              setIsLoad(true);
              await getNextPostList();
              setIsLoad(false);
            }}>
              <IconContext.Provider value={{ className: "mr-1 w-3 h-3 text-gray-400" }}>
                <BsCaretDownFill />
              </IconContext.Provider>
              <p className="text-gray-400 text-xs">Load More</p>
            </div>
          }
      </div>
      </div>
      </>}
    </>
  );
}
