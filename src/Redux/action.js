import axios from "axios"
// 유저 의 상태
export const GET_USER_USERINFO_REQUEST = "GET_USER_USERINFO_REQUEST"
export const GET_USER_USERINFO_SUCCESS = "GET_USER_USERINFO_SUCCESS"
export const GET_USER_USERINFO_FAILURE = "GET_USER_USERINFO_FAILURE"

export const fechUserInfo = () =>{
    return async(dispatch) =>{
        try {
            dispatch({ type: GET_USER_USERINFO_REQUEST})
            const { data } = await axios.get("http://localhost:3000/auth/userinfo",{withCredentials: true })
            console.log(data);
            dispatch({ type: GET_USER_USERINFO_SUCCESS, userinfo: data})
        } catch (error) {
            dispatch({ type: GET_USER_USERINFO_FAILURE, error: error.message})
            console.log(error);
        }
    }
}