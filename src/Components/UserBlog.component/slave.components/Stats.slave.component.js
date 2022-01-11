// Components
import UserTopLanguageComponent from "../slave.components/TopLanguage/UserTopLanguage.slave.component";
import UserPinnedRepoCommponent from "../slave.components/PinnedRepo/UserPinnedRepo.slave.component";
import RecentPostsComponent from "../slave.components/RecentPosts/RecentPosts.slave.component";
import UserStatsComponent from "../slave.components/ProfileCard/UserStats.slave.component";
// Icons
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/go";
import { BsCaretDownFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// Hooks
import {
  useUserInfoToUserName,
  usePinnedRepo,
  useUserStats,
  useUserTopLanguage,
  useViewCursorPost,
} from "../../../utilities/hooks";
import StatsSkeleton from "./Skeleton/StatsSkeleton.slave.component";
import { useState } from "react";
import UserStatsError from "./ProfileCard/UserStatsError.slave.component";
import UserTopLanguageError from "./TopLanguage/UserTopLanguageError.slave.component";
import UserPinnedRepoError from "./PinnedRepo/UserPinnedRepoError.slave.component";
import RecentPostsError from "./RecentPosts/RecentPostsError.component";

export default function StatsComponent({ username }) {
  const [gitStats, gitStatsError, gitStatsErrorMessage, gitStatsStatusCode] =
    useUserStats(username);
  const [topLang, topLangError, topLangErrorMessage, topLangStatusCode] =
    useUserTopLanguage(username);
  const [
    pinnedRepo,
    pinnedRepoError,
    pinnedRepoErrorMessage,
    pinnedRepoStatusCode,
  ] = usePinnedRepo(username);
  const [userInfo, userInfoError, userInfoErrorMessage, userInfoStatusCode] =
    useUserInfoToUserName(username);
  const [
    cursor,
    postList,
    postListError,
    postListErrorMessage,
    postListStatusCode,
    getNextPostList,
  ] = useViewCursorPost(username);
  const [isLoad, setIsLoad] = useState(false);

  // Skeleton Loading
  if (
    !userInfoStatusCode ||
    !gitStatsStatusCode ||
    !pinnedRepoStatusCode ||
    !topLangStatusCode ||
    !postListStatusCode
  )
    return <StatsSkeleton />;
  // 최종 렌더링
  return (
    <>
      {userInfoError ? (
        <>
          {userInfoStatusCode}/{userInfoErrorMessage}
        </>
      ) : (
        <>
          {/* UserStats */}
          {gitStatsError ? (
            <UserStatsError
              errorMessage={gitStatsErrorMessage}
              errorCode={gitStatsStatusCode}
            />
          ) : (
            <UserStatsComponent userinfo={userInfo} gitstats={gitStats} />
          )}
          <div className="max-w-5xl w-full mt-5">
            {/* Top Language */}
            {topLangError ? (
              <UserTopLanguageError
                errorMessage={topLangErrorMessage}
                errorCode={topLangStatusCode}
              />
            ) : (
              <UserTopLanguageComponent
                username={username}
                toplanguage={topLang}
              />
            )}

            <hr className="w-full" />

            {/* Pinned Projects component */}
            {pinnedRepoError ? (
              <UserPinnedRepoError
                errorMessage={pinnedRepoErrorMessage}
                errorCode={pinnedRepoStatusCode}
              />
            ) : (
              <UserPinnedRepoCommponent
                username={username}
                pinnedrepo={pinnedRepo}
              />
            )}
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
              {postListError && cursor === 0 ? (
                <RecentPostsError
                  errorMessage={postListErrorMessage}
                  errorCode={postListStatusCode}
                />
              ) : // 포스트가 없을시
              !postList ? (
                <RecentPostsError errorCode="작성한 포스트가 없습니다.." />
              ) : (
                // 포스트가 존재할 시
                postList.map((postdata) => (
                  <div key={postdata.id}>
                    <RecentPostsComponent username={username} post={postdata} />
                  </div>
                ))
              )}
              {/* Post Load Button */}
              {
                // 추가 포스터가 없을때
                postListStatusCode === 404 ? (
                  <RecentPostsError errorCode="더이상 포스트가 없습니다.." />
                ) : // 더보기 버튼을 눌렀을때
                isLoad ? (
                  // 로딩 컴포넌트
                  <div className="flex w-full justify-center items-center mt-10 cursor-pointer text-gray-400 hover:text-gray-800">
                    <IconContext.Provider
                      value={{
                        className: "animate-spin mr-1 w-3 h-3 text-gray-400",
                      }}
                    >
                      <AiOutlineLoading3Quarters />
                    </IconContext.Provider>
                    <p className="text-xs">Loading..</p>
                  </div>
                ) : (
                  // 최종 렌더링
                  <div
                    className="flex w-full justify-center items-center mt-10 cursor-pointer text-gray-400 hover:text-gray-800"
                    onClick={async () => {
                      setIsLoad(true);
                      await getNextPostList();
                      setIsLoad(false);
                    }}
                  >
                    <IconContext.Provider
                      value={{ className: "mr-1 w-3 h-3 text-gray-400" }}
                    >
                      <BsCaretDownFill />
                    </IconContext.Provider>
                    <p className="text-xs">Load More</p>
                  </div>
                )
              }
            </div>
          </div>
        </>
      )}
    </>
  );
}
