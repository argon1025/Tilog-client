import React  from "react";
// Dom-Router
import { useParams } from "react-router-dom";
// Component
import HeaderComponent from "../Header.component/Header.component";
import StatsComponent from "./slave.components/Stats.slave.component";

export default function UserBlogComponent() {
  const { username } = useParams()


  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        {/* Nav */}
        <HeaderComponent navitype="UserBlog" username={username}/>
        <StatsComponent username={username} />
      </div>
    </div>
  )
}
