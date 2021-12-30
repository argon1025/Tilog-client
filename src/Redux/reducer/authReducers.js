// typies
import { GET_USER_USERINFO_SUCCESS, GET_USER_USERINFO_FAILURE, GET_USER_USERINFO_SESSION_EXPIRED  } from "../action";
// default state data
const stateDefault = {
  ISLOGIN: false,
  USERINFO: null,
  AUTHERROR: null
}

const authReducers = (state = stateDefault, action) => {
  // 액션 처리
  switch (action.type) {
    // 유저 정보 요청에 성공하였습니다.
    case GET_USER_USERINFO_SUCCESS:
      return { ...state, ISLOGIN: action.ISLOGIN, USERINFO: action.USERINFO, AUTHERROR: action.AUTHERROR };
    // 유저 정보 요청에 실패하였습니다.
    case GET_USER_USERINFO_FAILURE:
      return { ...state, ISLOGIN: action.ISLOGIN, USERINFO: action.USERINFO, AUTHERROR: action.AUTHERROR };
    // 세션만료
    case GET_USER_USERINFO_SESSION_EXPIRED:
      return { ...state, ISLOGIN: action.ISLOGIN, USERINFO: action.USERINFO, AUTHERROR: action.AUTHERROR}
    default:
      return state;
  }
};
export default authReducers;
