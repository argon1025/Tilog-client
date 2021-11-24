import React, { Component } from "react";

export default class InputCommentToComment extends Component {
    state = {
      commentData: ""
    }
    getOnClick = () =>{
      this.props.writecommenttocomment(this.props.commentid, this.state.commentData)
    }
    render(){
        return(
            <>
              {/* Comment input */}
              <div className="flex bg-gray-100 rounded-lg w-full h-28 mt-10">
                <input
                  className="px-4 bg-gray-100 w-full h-full rounded-l-lg text-base text-gray-500 px-2 focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                  type="text"
                  placeholder="Comment"
                  onChange={(event)=>{
                    this.setState({
                      commentData: event.target.value
                    })
                  }}
                />
                <button
                  class="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
                  type="submit"
                  onClick={this.getOnClick}
                >
                  Submit
                </button>
              </div>
            </>
        )
    }
}
