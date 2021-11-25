import React, { Component, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IconContext } from "react-icons";
import { FaSignOutAlt, FaCaretRight } from "react-icons/fa";
import { CgChevronLeftO, CgChevronDownO } from "react-icons/cg";

export default class ProfileDropdownComponent extends Component {
  state = {
    // 프로필 이미지
    profileImage: "https://avatars.githubusercontent.com/u/55491354?s=96&v=4",
  };

  /**
   * 새 포스트
   */
  onClickNewPost = () => {};

  /**
   * 내 블로그
   */
  onClickMyBlog = () => {};

  /**
   * 프로필 설정
   */
  onClickProfile = () => {};

  /**
   * 로그아웃
   */
  onClickLogout = () => {};

  render() {
    return (
      <div className="flex flex-col items-center filter drop-shadow-lg">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white rounded-md transition duration-500 hover:bg-black hover:bg-opacity-10">
            {({ open }) => (
              <IconContext.Provider
                value={{
                  className: "ml-2 w-5 h-5 text-white",
                }}
              >
                <img
                  src={this.state.profileImage}
                  alt="profile"
                  class=" w-12 h-12 object-cover rounded-full"
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
                      onClick={this.onClickNewPost}
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
                      onClick={this.onClickMyBlog}
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
                      onClick={this.onClickProfile}
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
                      onClick={this.onClickLogout}
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
      </div>
    );
  }
}
