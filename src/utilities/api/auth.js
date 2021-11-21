import axios from "axios";
import { server } from "../server";

// 유저 정보를 가져옵니다.
export const  fetchUserInfo = () =>{
    return new Promise((resolve, reject) => {
        axios.get(`${server}/auth/userinfo`, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}

// 로그아웃합니다.
export const  logout = () =>{
    return new Promise((resolve, reject) => {
        axios.get(`${server}/auth/logout`, { withCredentials: true })
        .then(({data}) =>{
            resolve(data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}