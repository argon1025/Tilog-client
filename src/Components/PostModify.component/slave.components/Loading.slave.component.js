import React, { Component } from "react";

export default class LoadingComponent extends Component {
  render() {
    return (
      <div className="flex absolute inset-0 h-full w-full items-center justify-center bg-transparent z-50 bg-black opacity-25"></div>
    );
  }
}
