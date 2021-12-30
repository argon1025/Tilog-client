import { useEffect, useState } from "react"
import { getWeeklyStats } from "../../api";

// 유저 깃허브 주간 통계를 가져옵니다.
export function useWeeklyStats(username) {
    const [weeklyStats, setWeeklyStats] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              setTimeout(async() => {
                const response = await getWeeklyStats(username);
                setWeeklyStats(response);
              }, 1000);
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[username])
    return weeklyStats
}