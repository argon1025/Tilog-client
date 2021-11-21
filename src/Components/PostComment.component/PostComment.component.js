import React, { Component } from "react";
import {
  FaRegComment,
  FaTimes,
  FaRegEdit,
  FaRegComments,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export default class PostCommentComponent extends Component {
  render() {
    return (
      <div className="flex flex-col w-full max-w-5xl justify-start items-start ml-3 my-10">
        {/* title */}
        <div className="flex text-gray-600 mr-3 my-5">
          <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaRegComment />
            <span className="text-xs">Comments</span>
          </IconContext.Provider>
        </div>
        {/* content */}
        <div className="w-full">
          {/* comment */}
          <div className="flex flex-col">
            {/* commentHeader */}
            <div className="flex flex-row items-center">
              <img
                class="rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
              <span class="ml-2 font-medium text-gray-800">Argon</span>
              <span class="ml-1 text-xs text-gray-400">3:34 PM</span>
              {/* commentButtons */}
              <div className="ml-auto">
                <button className="text-gray-400">
                  <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                    <FaTimes />
                  </IconContext.Provider>
                </button>
                <button className="text-gray-400">
                  <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                    <FaRegEdit />
                  </IconContext.Provider>
                </button>
                <button className="text-gray-400">
                  <IconContext.Provider value={{ className: "ml-1 w-4 h-4" }}>
                    <FaRegComments />
                  </IconContext.Provider>
                </button>
              </div>
            </div>
            {/* commentContent */}
            <div className="w-full">
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua
              </span>
              {/* commentTree */}
              <div className="ml-7 pl-5 border-l-2">
                <div className="flex flex-row items-center mt-3">
                  <img
                    class="rounded-full w-8 h-8"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                  <span class="ml-2 font-medium text-gray-800">Argon</span>
                  <span class="ml-1 text-xs text-gray-400">3:35 PM</span>
                  {/* commentButtons */}
                  <div className="ml-auto">
                    <button className="text-gray-400">
                      <IconContext.Provider
                        value={{ className: "ml-1 w-4 h-4" }}
                      >
                        <FaTimes />
                      </IconContext.Provider>
                    </button>
                    <button className="text-gray-400">
                      <IconContext.Provider
                        value={{ className: "ml-1 w-4 h-4" }}
                      >
                        <FaRegEdit />
                      </IconContext.Provider>
                    </button>
                    <button className="text-gray-400">
                      <IconContext.Provider
                        value={{ className: "ml-1 w-4 h-4" }}
                      >
                        <FaRegComments />
                      </IconContext.Provider>
                    </button>
                  </div>
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Comment input */}
        <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10">
          <input
            className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base text-gray-500 px-2 focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
            type="text"
            placeholder="Comment"
          />
          <button
            class="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
