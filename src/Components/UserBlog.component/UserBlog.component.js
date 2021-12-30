import React  from "react";
import UserStatsComponent from "./slave.components/ProfileCard/UserStats.slave.component";
import UserTopLanguageComponent from "./slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "./slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "./slave.components/RecentPosts/RecentPosts.slave.component";
import ProfileDropdownComponent from "../ProfileDropdown.component/ProfileDropdown.component";
import { useUserInfoToUserName, usePinnedRepo, useUserStats, useUserTopLanguage, useViewCursorPost } from "../../utilities/hooks";
import { useParams } from "react-router-dom";
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
  /**
   * 1. 우리 회원인지 확인
   * 2. 깃허브 정보 보여주기
   */
  const onClickLogoButton = () => {
    window.location.href = "/";
  };

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
      {/* Nav */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row max-w-5xl w-full items-center">
          {/* Logo */}
          <div className="flex cursor-pointer">
            <h1
              onClick={onClickLogoButton}
              className="font-eng-sub-font-2 text-2xl text-gray-700 transition ease-in-out duration-300 hover:text-sky-500 hover:drop-shadow-2xl"
            >
              {"#"}
            </h1>
            <h1 className="font-eng-sub-font-2 text-2xl text-blue-600/70">
              {">"}
            </h1>
            <h1 className="font-bold font-eng-sub-font-2 text-xl text-gray-800 underline decoration-gray-300 transition ease-in-out duration-700 hover:text-sky-500 hover:drop-shadow-2xl hover:decoration-sky-500">
              {username}.log
            </h1>
          </div>
          {/* Login Button */}
          <div className="ml-auto mr-5">
            <ProfileDropdownComponent />
          </div>
        </div>
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
            {console.log(postList)}
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
  );
}
