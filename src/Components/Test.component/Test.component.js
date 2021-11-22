import React, { Component } from "react";
import { createPost, fetchUserInfo } from "../../utilities/api";
import AuthComponent from "../Auth.component/Auth.component";

export default class TestComponent extends Component {
  state = {
    testData:null
  }
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    fetchUserInfo().then((data)=>{
      console.log(data);
    })
  }
  setPost  = async() => {
    const body = {
      categoryId: 1,
      title: "게시글 테시트",
      thumbNailUrl: "https://github.githubassets.com/images/mona-loading-default.gif",
      markDownContent: "게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트",
      private: 0
    }
    try {
      const result = await createPost(body)
      this.setState({
        testData: result
      })
    } catch (error) {
      
    }
  }
  getUserinfo = async() => {
    const s = await fetchUserInfo()
    console.log(s);
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center p-20">
          결과: {this.state.testData}
        </div>
        <div className="flex justify-center">
          <AuthComponent />
          <button
            type="button"
            className="border border-text-white-300 text-text-white-300 rounded-full px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-yellow-400 hover:border-yellow-400 focus:outline-none focus:shadow-outline"
            onClick={this.getUserinfo}
          >
            <div className="flex flex-row flex-nowrap align-middle justify-center">
              <span className="font-eng-main-font font-semibold">
                유저 정보 가져오기
              </span>
            </div>
          </button>
          <button
            type="button"
            className="border border-text-white-300 text-text-white-300 rounded-full px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-yellow-400 hover:border-yellow-400 focus:outline-none focus:shadow-outline"
            onClick={this.setPost}
          >
            <div className="flex flex-row flex-nowrap align-middle justify-center">
              <span className="font-eng-main-font font-semibold">
                글쓰기
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
