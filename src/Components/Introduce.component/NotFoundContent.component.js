import React, { Component } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import { FaSmog } from "react-icons/fa";

export default class NotFoundContent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex w-full my-20 justify-center items-center">
        <div className="flex flex-col text-gray-600 items-center">
          <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
            <FaSmog />
          </IconContext.Provider>
          <span className="mt-5 text-xs">Sorry No Content yet....</span>
        </div>
      </div>
    );
  }
}
