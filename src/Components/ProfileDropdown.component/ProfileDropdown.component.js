import React, { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IconContext } from "react-icons";
import { FaSignOutAlt, FaCaretRight } from "react-icons/fa";
import { CgChevronLeftO, CgChevronDownO } from "react-icons/cg";
import { DiGithubBadge } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utilities/api"
import { expiredUserSession, getUserInfo } from "../../Redux/action";

export default function ProfileDropdownComponent() {
  const session = useSelector((store) => store.AuthReducer.USERINFO);
  const islogin = useSelector((store) => store.AuthReducer.ISLOGIN);
  // useSelector((store) => console.log(store));
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserInfo());
  },[dispatch])
  /**
   * 새 포스트
   */
  const onClickNewPost = () => {
    window.location.href = "/post/editor";
  };

  const onClickGithubLoginButton = () => {
    // dispatch(setUserSession());
    window.open(`${process.env.REACT_APP_TILOG_SERVER}/auth/github`, "_self");
  };
  /**
   * 내 블로그
   */
  const onClickMyBlog = () => {
    window.location.href = `blog/${session.userName}`;
  };

  /**
   * 프로필 설정
   */
  const onClickProfile = () => {};

  /**
   * 로그아웃
   */
  const onClickLogout = async () => {
    try {
      await logout();
      dispatch(expiredUserSession());
    } catch (error) {
      console.log("로그아웃 에러!");
    }
  };

  return (
    <div className="z-50 flex flex-col items-center filter drop-shadow-lg">
      {islogin ? (
        // Logined
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white rounded-md transition duration-500 hover:bg-black hover:bg-opacity-10">
            {({ open }) => (
              <IconContext.Provider
                value={{
                  className: "ml-2 w-5 h-5 text-gray-400",
                }}
              >
                <img
                  src={session.proFileImageUrl}
                  alt="profile"
                  className=" w-12 h-12 object-cover rounded-full"
                />
                {open ? <CgChevronDownO /> : <CgChevronLeftO />}
              </IconContext.Provider>
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-5 w-48 mt-2 origin-top-center bg-white rounded-md filter drop-shadow-2xl">
              <div className="">
                <p className="text-gray-800 text-sm m-3 font-medium">
                  빠른 시작
                </p>
                {/* 포스트 작성 */}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onClickNewPost}
                      className={`${
                        active
                          ? "bg-gray-100 text-gray-700 text-sm"
                          : "text-gray-700 text-sm"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <IconContext.Provider
                          value={{
                            className: "w-3 h-3 text-gray-400 mr-2",
                          }}
                        >
                          <FaCaretRight />
                        </IconContext.Provider>
                      ) : (
                        <IconContext.Provider
                          value={{
                            className: "w-3 h-3 text-gray-400 mr-2",
                          }}
                        >
                          <FaCaretRight />
                        </IconContext.Provider>
                      )}
                      새 포스트
                    </button>
                  )}
                </Menu.Item>
                {/* 포스트 작성 끝 */}
                {/* 내 블로그 */}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onClickMyBlog}
                      className={`${
                        active
                          ? "bg-gray-100 text-gray-700 text-sm"
                          : "text-gray-700 text-sm"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <IconContext.Provider
                          value={{
                            className: "w-3 h-3 text-gray-400 mr-2",
                          }}
                        >
                          <FaCaretRight />
                        </IconContext.Provider>
                      ) : (
                        <IconContext.Provider
                          value={{
                            className: "w-3 h-3 text-gray-400 mr-2",
                          }}
                        >
                          <FaCaretRight />
                        </IconContext.Provider>
                      )}
                      내 블로그
                    </button>
                  )}
                </Menu.Item>
                {/* 내 블로그 끝 */}
                <p className="text-gray-800 text-sm m-3 font-medium">개인화</p>
                {/* 내 블로그와 프로필 */}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onClickProfile}
                      className={`${
                        active
                          ? "bg-gray-100 text-gray-700 text-sm"
                          : "text-gray-700 text-sm"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <IconContext.Provider
                          value={{
                            className: "w-3 h-3 text-gray-400 mr-2",
                          }}
                        >
                          <FaCaretRight />
                        </IconContext.Provider>
                      ) : (
                        <IconContext.Provider
                          value={{
                            className: "w-3 h-3 text-gray-400 mr-2",
                          }}
                        >
                          <FaCaretRight />
                        </IconContext.Provider>
                      )}
                      내 블로그와 프로필
                    </button>
                  )}
                </Menu.Item>
                {/* 내 블로그와 프로필 끝 */}
                <hr className="w-full" />
                {/* 로그아웃 */}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onClickLogout}
                      className={`${
                        active
                          ? "bg-gray-100 text-gray-700 text-sm"
                          : "text-gray-700 text-sm"
                      } group flex rounded-md items-center w-full p-3 text-sm`}
                    >
                      로그아웃
                      <IconContext.Provider
                        value={{
                          className: "w-4 h-4 ml-auto text-gray-300",
                        }}
                      >
                        <FaSignOutAlt />
                      </IconContext.Provider>
                    </button>
                  )}
                </Menu.Item>
                {/* 로그아웃 끝 */}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        // Un Logined
        <button
          type="button"
          className="border bg-black text-white px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white hover:border-black focus:outline-none focus:shadow-outline"
          onClick={onClickGithubLoginButton}
        >
          <div className="flex flex-row flex-nowrap align-middle justify-center items-center">
            <span className="text-sm">Login with Github</span>
            <IconContext.Provider value={{ className: "ml-2 w-7 h-7" }}>
              <DiGithubBadge />
            </IconContext.Provider>
          </div>
        </button>
      )}
    </div>
  );
}
