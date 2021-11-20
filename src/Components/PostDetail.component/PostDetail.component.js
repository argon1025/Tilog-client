import React, { Component } from "react";
import {
  FaRegLaughSquint,
  FaRegCalendarAlt,
  FaRegEye,
  FaBookmark,
  FaHashtag,
  FaRegComment,
  FaRegThumbsUp,
} from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";

export default class PostDetailComponent extends Component {
  render() {
    const BANNER_URL =
      "https://media.vlpt.us/images/thyoondev/post/88838035-a3d8-4692-be34-0fff160abe55/EBAC6A8B-3584-4530-B2FE-CD55757671A5.gif";
    return (
      <div>
        {/* Nav */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div className="ml-5 mt-5 p-1 px-4 bg-black">
              <h1 className="font-eng-sub-font-1 text-lg text-white">
                Seongrok.log
              </h1>
            </div>
            {/* Login Button */}
            <div className="ml-auto mr-5">
              <button
                type="button"
                className="border text-black px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-black hover:border-black focus:outline-none focus:shadow-outline"
                onClick={this.clickGithubLoginButton}
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
        </div>

        {/* Banner */}
        <div className="mt-5 flex flex-col justify-center items-center bg-black w-full h-96 overflow-hidden">
          <img
            className="object-cover h-full w-full filter blur-lg"
            src={BANNER_URL}
          />
          <div className="absolute flex max-w-lg max-h-64 overflow-hidden filter drop-shadow-2xl rounded-3xl">
            <img className="object-cover h-full w-full" src={BANNER_URL} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col w-full justify-center items-center">
          {/* header */}
          <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3">
            <div>
              {/* Title */}
              <h1 className="text-5xl font-bold text-gray-800">
                평화스러운 무엇이 철환하였는가?
              </h1>
            </div>
            {/* header Info */}
            <div className="flex flex-row pt-3">
              <div className="flex text-gray-600 mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaRegCalendarAlt />
                  <span className="text-xs">2021.10.25</span>
                </IconContext.Provider>
              </div>
              <div className="flex text-gray-600  mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaRegEye />
                  <span className="text-xs">10 viewed</span>
                </IconContext.Provider>
              </div>
              <div className="flex text-gray-600  mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaRegLaughSquint />
                  <span className="text-xs">1 likes</span>
                </IconContext.Provider>
              </div>
              <div className="flex text-gray-600  mr-3">
                <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                  <FaBookmark />
                  <span className="text-xs">MySQL</span>
                </IconContext.Provider>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 w-full mt-10" />

          {/* Markdown Content */}
          <div className="flex flex-col max-w-5xl w-full mt-10 ml-3">
            <div>
              용기가 같지 소금이라 것이다. 많이 영원히 곧 실현에 산야에 그들의
              피다. 싶이 바로 없으면, 오아이스도 쓸쓸하랴? 들어 광야에서
              소금이라 일월과 미묘한 착목한는 부패뿐이다. 피가 그러므로 우리
              기쁘며, 찾아다녀도, 풀이 이상을 것이다. 착목한는 아니한 이상은
              얼음이 없으면, 대한 있는 얼마나 봄바람을 아름다우냐? 가는 우리의
              이상, 이상은 힘있다. 길지 발휘하기 오직 소담스러운 불어 가치를
              이것이야말로 철환하였는가? 두손을 같지 낙원을 붙잡아 우리의 하는
              산야에 것이다. 따뜻한 온갖 지혜는 일월과 것이다. 그들의 꽃이
              구하지 거선의 시들어 얼마나 약동하다. 동력은 위하여서 영원히
              황금시대의 얼마나 이상이 피고, 이것이다. 우리 풀이 풍부하게
              바이며, 가슴에 것이다. 동산에는 인생의 얼마나 얼마나 것이다. 가는
              전인 있는 것이다. 없으면 청춘의 별과 안고, 소리다.이것은 인생에
              피어나는 미묘한 대한 아니다. 발휘하기 방황하였으며, 피가
              황금시대다. 남는 구하기 쓸쓸한 천자만홍이 끝에 아니더면, 것이다.
              인간의 만물은 몸이 듣는다. 돋고, 그들은 이상의 할지라도 것이다. 곧
              심장은 동력은 것이다. 끓는 없으면 피고, 풀이 대한 위하여서. 열락의
              그들은 청춘을 사랑의 같은 같이, 뭇 너의 이상 것이다. 내는 창공에
              그림자는 어디 들어 황금시대의 새가 살았으며, 운다. 동력은 것은
              크고 더운지라 말이다. 심장은 얼마나 실현에 낙원을 싸인 품으며,
              가는 운다. 관현악이며, 우리 설산에서 보라. 황금시대의 찬미를
              충분히 구하지 튼튼하며, 평화스러운 무엇이 철환하였는가? 곳으로
              지혜는 눈에 더운지라 끓는다. 인간은 청춘은 이상의 꾸며 눈에
              인도하겠다는 보이는 있는 힘있다. 심장의 고행을 든 속에서 커다란
              교향악이다.
            </div>
          </div>

          <hr className="border-gray-200 w-full my-10" />
          {/* like Button */}
          <div className="flex flex-row">
            <button
              class="px-4 py-2 m-2 rounded-full bg-gray-100 text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-300 focus:ring-blue-300 ring-opacity-50"
              type="submit"
            >
              <IconContext.Provider
                value={{ className: "w-7 h-7 focus:outline-none focus:ring" }}
              >
                <FaRegThumbsUp />
                <span className="text-xs">1</span>
              </IconContext.Provider>
            </button>
          </div>
          {/* Tags */}
          <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3">
            <div className="flex text-gray-600  mr-3">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaHashtag />
                <span className="text-xs">Tags</span>
              </IconContext.Provider>
            </div>
            <div>
              <button
                class="px-4 py-2 m-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                type="submit"
              >
                Mysql
              </button>
              <button
                class="px-4 py-2 m-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                type="submit"
              >
                Database
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3">
            <div className="flex text-gray-600  mr-3">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaRegComment />
                <span className="text-xs">Comments</span>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
