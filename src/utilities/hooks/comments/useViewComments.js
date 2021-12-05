import { useEffect, useState } from "react"
import { viewComment } from "../../api";

// commnet리스트를 가져옵니다.
export function useAllFindByUserID(username, nextCursorNumber) {
    const [allFindByUserID, setAllFindByUserID] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const { id } = await viewComment(username)
                setAllFindByUserID(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[])
    return allFindByUserID
}