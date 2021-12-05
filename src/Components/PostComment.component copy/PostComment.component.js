import React, { Component } from "react";
import {
  FaRegComment,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import RenderComments from "./slave.components/RenderComments.slave.component";


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
          <RenderComments postid={this.props.postid} />
        </div>
      </div>
    );
  }
}
