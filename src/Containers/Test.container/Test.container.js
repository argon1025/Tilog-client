import { TestComponent } from "../../Components";
import { connect } from "react-redux";
import { fechUserInfo } from "../../Redux/action"
/**
 * 해당 컴포넌트에 전달할 상태를 정의합니다
 * @param {*} state
 * @returns
 */
function reduxStateToReactProps(state) {
  return {
    userinfo: state.userinfo,
  };
}
/**
 * 해당 컴포넌트에 전달할 dispatch 메서드를 정의합니다
 * @param {*} dispatch
 * @returns
 */
function reduxDispatchToReactProps(dispatch) {
  return {
    fechUserInfo: () => {
      dispatch(fechUserInfo());
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(TestComponent);
