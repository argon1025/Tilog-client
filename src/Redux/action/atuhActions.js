import { fetchUserInfo } from "../../utilities/api"
// 유저 의 상태
export const GET_USER_USERINFO_SUCCESS = "GET_USER_USERINFO_SUCCESS"
export const GET_USER_USERINFO_FAILURE = "GET_USER_USERINFO_FAILURE"

// 유저정보를 가져옵니다.
export const getUserInfo = () =>{
    return async(dispatch) =>{
        try {
            //api서버에 유저 정보를 요청합니다.
            const data = await fetchUserInfo()
            // 요청한 유저 정보가 정상적으로 처리되어 반환되었습니다.
            dispatch({ type: GET_USER_USERINFO_SUCCESS, USERINFO: data, AUTHERROR: null})
        } catch (error) {
            // 요청중 에러가 발생하였습니다.
            dispatch({ type: GET_USER_USERINFO_FAILURE, AUTHERROR: error.message})
        }
    }
}