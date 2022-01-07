import React, { useEffect } from "react";
import { TechIconLoader } from "../../";

export default function PostDetailComponent({ username, postdata }) {
  const [scrolled, setScrolled] = React.useState(false);

  const onClickLogo = (username) => {
    window.location.href = `/${username}`;
  };
  const onClickMainLogo = () => {
    window.location.href = "/";
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="flex w-10/12 ">
      <div
        className={
          scrolled
            ? "transition duration-500 ease-in-out flex fixed top-0 left-0 right-0 w-full p-5 bg-white z-50 border-b drop-shadow-2xl items-center"
            : "transition duration-100 ease-in-out -translate-y-20 flex fixed top-0 left-0 right-0 w-full p-5 bg-white z-50 border-b drop-shadow-2xl"
        }
      >
        <div onClick={onClickMainLogo} className="cursor-pointer">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="transition ease-in-out duration-700 hover:fill-blue-500"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 5v14h14V5H5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 7v7h-2v-7H7V8h10v2h-4z" />
            </g>
          </svg>
        </div>
        <span className="mx-2">·</span>
        <p className="truncate overflow-hidden font-medium text-lg text-gray-800 transition ease-in-out duration-700 hover:text-blue-500 hover:drop-shadow-2xl ">
          {postdata?.title || ""}
        </p>
        <div className="ml-auto mx-3 w-4 h-4">
          <TechIconLoader
            iconName={`${postdata?.categoryName || ""}`}
            color="black"
          />
        </div>
      </div>
      <h1
        onClick={onClickMainLogo}
        className="cursor-pointer text-lg text-gray-700 font-medium transition ease-in-out duration-300 hover:text-sky-500 hover:drop-shadow-2xl"
      >
        {"#"}
      </h1>
      <h1 className="text-lg text-blue-600/70">{">"}</h1>
      <h1
        onClick={() => onClickLogo(username)}
        className="cursor-pointer subpixel-antialiased font-medium text-lg text-gray-800 transition ease-in-out duration-700 hover:text-blue-500 hover:drop-shadow-2xl"
      >
        {"./"}
        {username}
      </h1>
      {!postdata ? (
        <div className="animate-pulse w-64 h-full bg-gray-100 rounded ml-2"></div>
      ) : (
        <p className="truncate overflow-hidden font-medium text-lg text-gray-800 transition ease-in-out duration-700 hover:text-blue-500 hover:drop-shadow-2xl">
          /{postdata.title}.log
        </p>
      )}
    </div>
  );
}
