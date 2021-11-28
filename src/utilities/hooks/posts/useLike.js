import { useEffect, useState } from "react"
import { fetchUserInfoFromUserName, setLikePost, viewAllFindByUserID } from "../../api";

// 유저 깃허브 PinnedRepo를 가져옵니다.
export function useLike(postID) {
    const [like, setLike] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await setLikePost(postID)
                setLike(response)
            } catch (error) {
              console.error(error)
            }
          }
      
          fetchData()
    },[postID])
    return like
}