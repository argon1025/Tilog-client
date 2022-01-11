import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../Redux/action";

// Icon
import { IconContext } from "react-icons";
import { IoMdFingerPrint } from "react-icons/io";

export default function LoginComponent() {
  const islogin = useSelector((store) => store.AuthReducer.ISLOGIN);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  let loadingMessage;

  if (islogin) {
    loadingMessage = "로그인되었습니다.";
    window.location.href = "/";
  } else {
    loadingMessage = "로그인 중입니다..";
  }

  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div className="mt-32">
        {/* title Icon */}
        <IconContext.Provider
          value={{ className: "animate-pulse w-20 h-20 text-gray-500" }}
        >
          <IoMdFingerPrint />
        </IconContext.Provider>
      </div>
      <span className="text-sm text-gray-400 mt-5 font-kor-main-font">
        {loadingMessage}
      </span>
    </div>
  );
}
