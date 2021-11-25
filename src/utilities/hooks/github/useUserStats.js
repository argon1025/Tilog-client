import { useEffect, useState } from "react"
import { getGithubStats } from "../../api";

// 유저 깃허브 통계를 가져옵니다.
export function useUserStats(username) {
    const [userStats, setUserStats] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await getGithubStats(username)
              setUserStats(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[username])
    return userStats
}