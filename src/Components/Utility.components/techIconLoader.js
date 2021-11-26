
   
import React, { Component } from "react";
import iconList from "./TechIconList";
import { IconContext } from "react-icons";

export default class TechIconLoader extends Component {
  state = {
    iconName: null,
    originalName: null,
    color: null,
    customUrl: null,
    onHover: false,
  };
  constructor(props) {
    super(props);
    /**
     * 컴포넌트에서 받아오는 인자 처리
     */
    this.state.iconName = !props.iconName ? null : props.iconName.toUpperCase();
    this.state.originalName = !props.iconName ? null : props.iconName;
    this.state.color = !props.color ? null : props.color;
    this.state.customUrl = !props.customUrl ? null : props.customUrl;
  }

  onMouseIn = () => {
    this.setState({ ...this.state, onHover: true });
  };
  onMouseOut = () => {
    this.setState({ ...this.state, onHover: false });
  };
  render() {
    let icon;
    let iconName;
    if (!!this.state.customUrl) {
      console.log("Sorry Not supported customURL Icon We will soon...");
      icon = (
        <IconContext.Provider value={{ className: "w-full h-full" }}>
          {iconList.NOTFOUND_CONTENT.iconData}
        </IconContext.Provider>
      );
    } else {
      // 사용자 지정 URL 아이콘이 없을경우 지정 리스트에서 정보를 조회한다
      icon = (
        <IconContext.Provider
          value={
            !this.state.color
              ? { className: "w-full h-full" }
              : { className: "w-full h-full", color: `${this.state.color}` }
          }
        >
          {iconList[`${this.state.iconName}`]
            ? iconList[`${this.state.iconName}`].iconData
            : iconList.NOTFOUND_CONTENT.iconData}
        </IconContext.Provider>
      );
      iconName = iconList[`${this.state.iconName}`]
        ? iconList[`${this.state.iconName}`].name
        : this.state.originalName;
    }
    // 아이콘이 있는지 확인후 없을경우 기본 아이콘을 지정한다
    // 색상이 있는지 확인 후 없을경우 적용하지 않는다
    return (
      /**
       * onMouseEnter={this.onMouseIn} onMouseLeave={this.onMouseOut}
       */
      <div>
        {icon}
        {this.state.onHover ? (
          <div class="absolute left-0 top-0 bg-white p-1 text-xs filter drop-shadow-lg rounded-full transition duration-150 ease-in-out">
            {iconName}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}