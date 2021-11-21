import { combineReducers } from "redux";
import  authReducer  from "./authReducers"

const rootReducer = combineReducers({
    AuthReducer: authReducer
})

export default rootReducer;