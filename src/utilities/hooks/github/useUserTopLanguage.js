import { useEffect, useState } from "react"
import { getTopLanguage } from "../../api";

// 유저 깃허브 top langauage통계를 가져옵니다.
export function useUserTopLanguage(username) {
    const [userTopLanguage, setTopLanguage] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            let totalSize = 0
            try {
              const response = await getTopLanguage(username)
              Object.keys(response).map( v => {
                  totalSize += response[v].size;
              })
              Object.keys(response).map( v => {
                response[v].percent = ((response[v].size / totalSize) * 100).toFixed(0)
              })
              
              setTopLanguage(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[setTopLanguage])
    return userTopLanguage
}