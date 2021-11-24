import React, { Component } from "react";
import { createPost, fetchUserInfo } from "../../utilities/api";

export default class TestComponent extends Component {
  state = {
    testData: null,
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    fetchUserInfo().then((data) => {
      console.log(data);
    });
  }
  setPost = async () => {
    const body = {
      categoryId: 1,
      title: "게시글 테시트",
      thumbNailUrl:
        "https://github.githubassets.com/images/mona-loading-default.gif",
      markDownContent:
        "게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트게시글 테스트",
      private: 0,
    };
    try {
      const result = await createPost(body);
      this.setState({
        testData: result,
      });
    } catch (error) {}
  };
  getUserinfo = async () => {
    const s = await fetchUserInfo();
    console.log(s);
  };
  render() {
    return <div className="flex flex-col">a</div>;
  }
}
