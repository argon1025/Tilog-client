import { useEffect, useState } from "react"
import { getPinnedRepo } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function usePinnedRepo(username) {
    const [userPinnedRepo, setPinnedRepo] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await getPinnedRepo(username)
              setPinnedRepo(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[username])
    return userPinnedRepo
}