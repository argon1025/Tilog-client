import React  from "react";
// Dom-Router
import { useParams } from "react-router-dom";
// Components
import UserTopLanguageComponent from "./slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "./slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "./slave.components/RecentPosts/RecentPosts.slave.component";
import UserStatsComponent from "./slave.components/ProfileCard/UserStats.slave.component";
import HeaderComponent from "../Header.component/Header.component";
// Hooks
import { useUserInfoToUserName, usePinnedRepo, useUserStats, useUserTopLanguage, useViewCursorPost } from "../../utilities/hooks";
// Icons
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/go";
import { FaCheckDouble } from "react-icons/fa";

export default function UserBlogComponent() {
  const { username } = useParams()
  const [gitStats, gitStatsError, gitStatsStatusCode] = useUserStats(username);
  const [userInfo, userInfoError, userInfoStatusCode] = useUserInfoToUserName(username);
  const [topLang, topLangError, topLangStatusCode] = useUserTopLanguage(username);
  const [pinnedRepo, pinnedRepoError, pinnedRepoStatusCode] = usePinnedRepo(username);
  const [postList, postListError, postListStatusCode, getNextPostList] = useViewCursorPost(username);

  const RenderUserStats = ({childComponent}) => {
    // Fetching...
    if(!gitStatsStatusCode || !userInfoStatusCode || !topLangStatusCode || !pinnedRepoStatusCode || !postListStatusCode) return <>스켈레톤</>
    // 우리 서비스 회원이 아님.
    if(userInfoError && postListError) return <>404</>
    // 깃허브 통계서버 에러
    if(topLangError || gitStatsError || pinnedRepoError) return <>깃허브 통계서버 에러</>
    // 최종 렌더링
    return <>{childComponent}</>
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        {/* Nav */}
        <HeaderComponent navitype="UserBlog" username={username}/>
        <RenderUserStats 
          childComponent=
        {
          <>
          {/* UserStats */}
          <UserStatsComponent userinfo={userInfo} gitstats={gitStats}/> 
          <div className="max-w-5xl w-full mt-5">
          {/* Top Language */}
          <UserTopLanguageComponent username={username} toplanguage={topLang} />

          <hr className="w-full" />

          {/* Pinned Projects component */}
          <UserPinnedRepoCommponent username={username} pinnedrepo={pinnedRepo}/>

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
                <FaCheckDouble />
              </IconContext.Provider>
              <p className="text-gray-400 text-xs">Load More</p>
            </div>
          </div>
          </div>
        </>
        } />
      </div>
    </div>
  )
}
