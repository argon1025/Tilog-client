import { useEffect, useState } from "react"
import { viewTrendPosts } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function useTrendPosts() {
    const [trendingPost, setTrendingPost] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await viewTrendPosts()
                setTrendingPost(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[])
    return trendingPost
}