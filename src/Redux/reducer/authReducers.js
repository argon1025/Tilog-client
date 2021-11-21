// typies
import { GET_USER_USERINFO_SUCCESS, GET_USER_USERINFO_FAILURE  } from "../action";
// default state data
const stateDefault = {
  USERINFO: null,
  AUTHERROR: null
}

const authReducers = (state = stateDefault, action) => {

  // 액션 처리
  switch (action.type) {
    // 유저 정보 요청에 성공하였습니다.
    case GET_USER_USERINFO_SUCCESS:
      return { ...state, USERINFO: action.USERINFO, AUTHERROR: action.AUTHERROR };
    // 유저 정보 요청에 실패하였습니다.
    case GET_USER_USERINFO_FAILURE:
      return { ...state, AUTHERROR: action.AUTHERROR };
    default:
      return state;
  }
};
export default authReducers;
