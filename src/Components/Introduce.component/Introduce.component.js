import React, { Component } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import {
  FaHotjar,
  FaWpexplorer,
  FaRegPaperPlane,
  FaBookReader,
  FaGraduationCap,
  FaKiwiBird,
} from "react-icons/fa";

import NotFoundContent from "./NotFoundContent.component";
import { logout } from "../../utilities/api";
import { TILogServer } from "../../utilities/server";

export default class IntroduceComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // 현재 로그인된 유저 정보 확인
    this.props.getUserInfo()
  }
  // 로그인로직
  clickGithubLoginButton = () => {
    window.open(`${TILogServer}/auth/github`, "_self");
  };
  // 로그아웃 로직
  clickLogoutButton = async() => {
    try {
      await logout();
      window.location.href = '/';
    } catch (error) {
      console.log("로그아웃 에러!");
      console.log(error);
    }
  }
  render() {
    let title = "</>";
    return (
      <div className="flex flex-col">
        {/* Nav */}
        <div className="flex flex-col justify-center items-center bg-bg-1 bg-fixed bg-cover filter drop-shadow-md">
          <div className="flex flex-row max-w-5xl w-full">
            {/* Logo */}
            <div className="ml-5 mt-5 p-1 px-4 bg-white">
              <h1 className="font-eng-sub-font-1 text-lg text-black">
                {title}
              </h1>
            </div>
            {/* Login Button */}
            <div className="ml-auto mr-5">
              {
                this.props.ISLOGIN 
              ? 
              // Logined
              <button
              type="button"
              className="border text-white px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-black hover:border-black focus:outline-none focus:shadow-outline"
              onClick={this.clickLogoutButton}
            >
              <div className="flex flex-row flex-nowrap align-middle justify-center items-center">
                <span className="text-sm">Logout</span>
              </div>
            </button>
              :
              // Un Logined
              <button
                type="button"
                className="border text-white px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-black hover:border-black focus:outline-none focus:shadow-outline"
                onClick={this.clickGithubLoginButton}
              >
                <div className="flex flex-row flex-nowrap align-middle justify-center items-center">
                  <span className="text-sm">Login with Github</span>
                  <IconContext.Provider value={{ className: "ml-2 w-7 h-7" }}>
                    <DiGithubBadge />
                  </IconContext.Provider>
                </div>
              </button>
              }
            </div>
          </div>
          {/* Banner */}
          <div className="flex flex-row max-w-5xl w-full py-10">
            <div class="px-4 grid grid-cols-12">
              <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
                <div class="w-full">
                  <h1 class="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8">
                    Bring Your
                    <br />
                    Ideas to{" "}
                    <span class="flex text-white bg-bg-2">
                      Life
                      <IconContext.Provider value={{ className: "ml-5" }}>
                        <FaKiwiBird />
                      </IconContext.Provider>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-900" />

        {/* now Issue */}
        <div className="flex flex-col justify-center items-center py-10">
          <div className="flex flex-col max-w-5xl w-full px-4">
            {/* title */}
            <div className="flex text-gray-600">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaHotjar />
                <span className="text-xs">TRENDING ON TILOG</span>
              </IconContext.Provider>
            </div>
            {/* content */}
            <div className="flex flex-row max-w-5xl w-full px-4">
              <NotFoundContent />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* your Recommend */}
        <div className="flex flex-col justify-center items-center py-10">
          <div className="flex flex-col max-w-5xl w-full px-4">
            {/* title */}
            <div className="flex text-gray-600">
              <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
                <FaWpexplorer />
                <span className="text-xs">EXPLORE IN TILOG</span>
              </IconContext.Provider>
            </div>
            {/* content */}
            <div className="flex flex-row max-w-5xl w-full px-4">
              <NotFoundContent />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Footer */}
        <div className="flex flex-col justify-center items-center mt-20 bg-gray-900 relative inset-x-0 bottom-0">
          <div className="flex flex-row max-w-5xl w-full justify-center">
            {/* sub */}
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
              <div className="m-5">
                <h1 class="flex text-2xl text-white item-center">
                  <IconContext.Provider
                    value={{ className: "mt-1 mr-2 w-4 h-4" }}
                  >
                    <FaRegPaperPlane />
                    탐험하세요
                  </IconContext.Provider>
                </h1>
                <span class="text-sm text-gray-400 hidden lg:flex">
                  이 이상 사랑의 청춘의 많이 이성은 용기가 이것이다. 같이,
                  낙원을 것은 이상의 대중을 끓는 황금시대다. 인간에 붙잡아
                  끝까지 이것을 있는 풀밭에 부패를 있는가? 영락과 끓는 거친
                  타오르고 보는 이것이다. 피가 것이다.보라, 때까지 청춘은 많이
                  품었기 대중을 인간에 피다. 이것은 피고 가치를 커다란 눈에 눈이
                  것이다. 심장의 트고, 것은 영원히 돋고, 얼음이 그것은 것이다.
                  지혜는 눈이 이상 위하여서 것이다.보라, 것이다. 그들은 영락과
                </span>
              </div>
              <div className="m-5">
                <h1 class="flex text-2xl text-white item-center">
                  <IconContext.Provider
                    value={{ className: "mt-1 mr-2 w-4 h-4" }}
                  >
                    <FaBookReader />
                    배운것을 작성하세요
                  </IconContext.Provider>
                </h1>
                <span class="text-sm text-gray-400 hidden lg:flex">
                  이성은 이는 위하여, 천자만홍이 얼마나 내려온 이 아니다.
                  천자만홍이 대고, 없는 무엇이 산야에 끓는다. 피고, 청춘 온갖
                  붙잡아 것이다. 실현에 목숨이 고동을 노래하며 가지에 사랑의 곧
                  봄바람이다. 만천하의 노래하며 우리의 때까지 트고, 그들은
                </span>
              </div>
              <div className="m-5">
                <h1 class="flex text-2xl text-white item-center">
                  <IconContext.Provider
                    value={{ className: "mt-1 mr-2 w-4 h-4" }}
                  >
                    <FaGraduationCap />
                    모든것을 나의 것으로
                  </IconContext.Provider>
                </h1>
                <span class="text-sm text-gray-400 hidden lg:flex">
                  이성은 이는 위하여, 천자만홍이 얼마나 내려온 이 아니다.
                  천자만홍이 대고, 없는 무엇이 산야에 끓는다. 피고, 청춘 온갖
                  붙잡아 것이다. 실현에 목숨이 고동을 노래하며 가지에 사랑의 곧
                  봄바람이다. 만천하의 노래하며 우리의 때까지 트고, 그들은
                </span>
              </div>
            </div>
          </div>
          {/* copyright */}
          <div>
            <hr className="border-white" />
            <h1 class="mt-3 text-sm text-white">
              Copyright 2021.TILog inc. all rights reserved.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
