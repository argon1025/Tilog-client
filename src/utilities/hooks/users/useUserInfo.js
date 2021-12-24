import { useEffect, useState } from "react"
import { fetchUserInfo } from "../../api";

// 유저 네임으로 유저 정보를 가져옵니다.
export function useUserInfo() {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetchUserInfo()
              setUserInfo(response)
            } catch (error) {
              console.error(error)
            }
          }
          fetchData()
    },[])
    return userInfo
}