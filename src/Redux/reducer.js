import { GET_USER_USERINFO_SUCCESS, GET_USER_USERINFO_REQUEST, GET_USER_USERINFO_FAILURE  } from "./action";
const stateDefault = {
  reqState: null,
  userinfo: null,
  errorMassage: null
}
const reducer = (state = stateDefault, action) => {

  // 액션 처리
  switch (action.type) {
    case GET_USER_USERINFO_REQUEST:
      return { ...state, reqState: "request" };
    case GET_USER_USERINFO_SUCCESS:
      return { ...state, userinfo: action.userinfo, reqState: "success" };
    case GET_USER_USERINFO_FAILURE:
      return { ...state, reqState: "failure", errorMassage: action.errorMassage };
    default:
      return state;
  }
};
export default reducer;
