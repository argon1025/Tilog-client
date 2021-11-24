import { IntroduceComponent } from "../../Components";
import { connect } from "react-redux";
import { getUserInfo } from "../../Redux/action";
/**
 * 해당 컴포넌트에 전달할 상태를 정의합니다
 * @param {*} state
 * @returns
 */
function reduxStateToReactProps(state) {
  return {
    USERINFO: state.AuthReducer.USERINFO,
    AUTHERROR: state.AuthReducer.AUTHERROR,
    ISLOGIN: state.AuthReducer.ISLOGIN
  };
}
/**
 * 해당 컴포넌트에 전달할 dispatch 메서드를 정의합니다
 * @param {*} dispatch
 * @returns
 */
function reduxDispatchToReactProps(dispatch) {
  return {
    getUserInfo: () =>{
      dispatch(getUserInfo())
    }
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(IntroduceComponent);
