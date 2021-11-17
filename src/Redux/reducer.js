import { store } from "./store";

const reducer = (state = store, action) => {
  console.log(`[EVENT] ${JSON.stringify(state)} / ${JSON.stringify(action)}`);

  // 액션 처리
  switch (action.type) {
    case "TEST_REQUEST":
      return { ...state, TEST_REQUEST: `${Math.random()}` };
    default:
      return state;
  }
};
export default reducer;
