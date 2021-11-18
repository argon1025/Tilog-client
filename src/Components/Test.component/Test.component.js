import React, { Component } from "react";
import AuthComponent from "../Auth.component/Auth.component";

export default class TestComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center p-20">
          유저 정보: 
          {!this.props.userinfo ? <div>로그인해주세용</div> :Object.entries(this.props.userinfo).map(([key, val], i) => (
        <p key={i}>
            {key}: {val}
        </p>
        ))}
        </div>
        <div className="flex justify-center">
          <AuthComponent />
          <button
            type="button"
            className="border border-text-white-300 text-text-white-300 rounded-full px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-yellow-400 hover:border-yellow-400 focus:outline-none focus:shadow-outline"
            onClick={this.props.fechUserInfo}
          >
            <div className="flex flex-row flex-nowrap align-middle justify-center">
              <span className="font-eng-main-font font-semibold">
                유저 정보 가져오기
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
