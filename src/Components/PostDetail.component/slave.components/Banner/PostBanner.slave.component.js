import React from "react";

export default function PostBannerComponent({ thumbNailUrl }) {
  if (!thumbNailUrl) {
    return null;
  } else {
    return (
      <div className="mt-5 flex flex-col justify-center items-center bg-black w-full h-96 overflow-hidden">
        <img
          className="object-cover h-full w-full filter blur-lg"
          src={thumbNailUrl}
          alt="banner-background"
        />
        <div className="absolute flex max-w-lg max-h-64 overflow-hidden filter drop-shadow-2xl rounded-3xl">
          <img
            className="object-cover h-full w-full"
            src={thumbNailUrl}
            alt="banner"
          />
        </div>
      </div>
    );
  }
}
