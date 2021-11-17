import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/**
 * First-Store-Data
 * 초기 상태 데이터
 */
export const store = {
  TEST_REQUEST: "NO_REQUEST_FIND",
};

/**
 * React-persist-Settings
 * 사용자 브라우저에 상태를 저장
 */
const persistConfig = {
  key: "root", // reducer Key
  storage, // 브라우저 로컬 스토리지에 저장
};

// persisConfig가 설정된 리듀서로 변경한다
const enhancedReducer = persistReducer(persistConfig, reducer);

// 비동기 액션 작업을 위한 ReduxThunk 연동
export default createStore(enhancedReducer, applyMiddleware(ReduxThunk));
