// Icons
import { IconContext } from "react-icons";
import { GoGitPullRequest, GoGitCommit, GoStar } from "react-icons/go";

export default function UserStatsComponent({ userinfo, gitstats }) {
  console.log(userinfo);
  console.log(gitstats);
  return (
    <div className="flex lg:flex-row items-center lg:items-start flex-col max-w-5xl w-full bg-white mt-10 p-10 rounded-lg border border-gray-00">
      <img
        className="h-28 w-28 object-cover object-center rounded-full"
        src={userinfo.proFileImageUrl}
        alt="profile"
      />
      {/** gitStatus */}
      <div className="m-5">
        {/* 이름 */}
        <p className="text-xl text-gray-700 font-bold">
          {gitstats.name + "(" + userinfo.userName + ")"}
        </p>
        {/** UserBlogCustomization */}
        {/** 직업
        <p className="text-sm text-gray-400"> @Software Engineer </p>
         */}
        {/* 깃허브 통계 */}
        <div className="flex mt-3 items-center">
          {/** 스타 수 */}
          <IconContext.Provider value={{ className: "w-4 h-4 " }}>
            <GoStar />
            <p className="text-sm text-gray-700 d font-bold mr-1">
              {gitstats.totalStars}
            </p>
            <p className="text-sm text-gray-400">stars</p>
          </IconContext.Provider>
          {/** 풀리퀘스트 수 */}
          <IconContext.Provider value={{ className: "ml-2 w-4 h-4 " }}>
            <GoGitPullRequest />
            <p className="text-sm text-gray-700 font-bold mr-1">
              {gitstats.totalPRs}
            </p>
            <p className="text-sm text-gray-400">PRs</p>
          </IconContext.Provider>
          {/** 커밋 수 */}
          <IconContext.Provider value={{ className: "ml-2 w-4 h-4 " }}>
            <GoGitCommit />
            <p className="text-sm text-gray-700 font-bold mr-1">
              {gitstats.totalCommits}
            </p>
            <p className="text-sm text-gray-400">Commits</p>
          </IconContext.Provider>
        </div>
      </div>
      {/** UserBlogCustomization */}
      {/** 자기소개
     <div className="mt-3">
       <p className="text-sm text-gray-600 ">
         보내는 튼튼하며, 웅대한 그림자는 것이다. 하여도 대한 찾아다녀도,
         설산에서 트고, 보는 방지하는 그들에게 것이다. 바이며, 위하여 바이며,
         내려온 눈에 설레는 고동을 청춘의 있는 것이다. 얼음과 아니더면, 가는
         시들어 만천하의 있음으로써 설레는 것이다. 보내는 천자만홍이 있는
         아니한 인생의 그들은 주며, 그러므로 천하를 뿐이다. 이것은 눈에
         무엇을 만물은 있으며, 과실이 창공에 있는가? 이 밝은 튼튼하며, 옷을
         사막이다. 구하지 너의 인생에 우리 길을 때문이다. 속에서 바이며,
         그것을 있는 용기가 속잎나고, 것이다. 작고 이상의 위하여, 위하여서.
       </p>
     </div>
      */}
    </div>
  );
}
