import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../Redux/action";

export default function LoginComponent() {
  const islogin = useSelector((store) => store.AuthReducer.ISLOGIN);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  if(islogin) {
    window.location.href = "/"
    return (
      <>인증성공</>
    )
  }
  return <>인증중...</>
}