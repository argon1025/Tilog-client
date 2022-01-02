import { ProfileDropdownComponent } from "..";
import PostDetailComponent from "./slave.components/PostDetail.salve.component";
import UserBlogComponent from "./slave.components/UserBlog.slave.component";

export default function HeaderComponent({ navitype, username, postdata }) {
    const RenderNavigation = ({ navitype, username }) => {
        if(navitype === "UserBlog") return <UserBlogComponent username={username} />
        if(navitype === "PostDetail") return <PostDetailComponent username={username} postdata={postdata}/>
        return <></>
    }
    return(
        <div className="flex flex-row max-w-5xl w-full items-center">
          {/* Navigation */}
          <div className="flex cursor-pointer">
              <RenderNavigation navitype={navitype} username={username}  />
          </div>
          {/* Login Button */}
          <div className="ml-auto mr-5">
            <ProfileDropdownComponent />
          </div>
      </div>
    )
}