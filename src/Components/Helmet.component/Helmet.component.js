import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
export default class HelmetComponent extends Component {
  state = {
    title: "TIL.log",
    description: "경험하고 배우며 기록하는. TIlog",
    keywords: "TIL,log,TILog,tilog",
    themeColor: "#EFEFEF",
    // SNS 최적화 태그
    ogImage: "/ogImage.png", // 썸네일
    ogType: "blog", // 타입을 지정합니다. 웹인지 앱인지
    ogUrl: "https://tilog.io", // 사이트 대표 URL
    ogLocale: "ko_KR", // 언어
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state.title = this.props.title || this.state.title;
    this.state.ogImage = this.props.ogImage || this.state.ogImage;
    console.log(this.props);
  }
  render() {
    return (
      <Helmet>
        {/* 타이틀 */}
        <title>{this.state.title}</title>
        {/* 뷰포트 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        {/* 인코딩 */}
        <meta charSet="utf-8" />
        {/* 설명 */}
        <meta name="description" content={this.state.description} />
        {/* 컬러 */}
        <meta name="theme-color" content={this.state.themeColor} />
        {/* Apple WebApp */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* 웹 사이트 타입 */}
        <meta property="og:type" content={this.state.ogType} />
        {/* 사이트 대표 URL */}
        <meta property="og:url" content={this.state.ogUrl} />
        {/* 사이트 제목 */}
        <meta property="og:title" content={this.state.title} />
        {/* 썸네일 */}
        <meta property="og:image" content={this.state.ogImage} />
        {/* 설명 */}
        <meta property="og:description" content={this.state.description} />
        {/* 부제 */}
        <meta property="og:site_name" content={this.state.description} />
        {/* 지역 */}
        <meta property="og:locale" content={this.state.ogLocale} />

        {/* 트위터 카드 타입*/}
        <meta name="twitter:card" content="summary" />
        {/* 제목 */}
        <meta name="twitter:title" content={this.state.title} />
        {/* 설명 */}
        <meta name="twitter:description" content={this.state.description} />
        {/* 썸네일 */}
        <meta name="twitter:image" content={this.state.ogImage} />
      </Helmet>
    );
  }
}
