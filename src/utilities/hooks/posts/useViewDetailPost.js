import { useEffect, useState } from "react"
import { viewDetailPost } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function useViewDetailPost(postID) {
    const [DetailPost, setDetailPost] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await viewDetailPost(postID)
                setDetailPost(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[postID])
    return DetailPost
}