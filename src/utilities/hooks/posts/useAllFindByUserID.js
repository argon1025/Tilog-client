import { useEffect, useState } from "react"
import { fetchUserInfoFromUserName, viewAllFindByUserID } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function useAllFindByUserID(username, nextCursorNumber) {
    const [allFindByUserID, setAllFindByUserID] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const { id } = await fetchUserInfoFromUserName(username)
                const response = await viewAllFindByUserID(id, nextCursorNumber)
                setAllFindByUserID(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[username, nextCursorNumber])
    return allFindByUserID
}