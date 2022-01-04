// Date
import { formatDistance, subDays } from "date-fns";
// Icons Image
import TechIconLoader from "../../../Utility.components/techIconLoader";

export default function RecentPostsComponent({ username, post }) {
  const clickPostPage = (username, id) => {
    window.location.href = `/${username}/${id}`;
  };
  console.log(post);
  return (
    <div
      className="flex flex-col w-full lg:max-w-5xl"
      onClick={() => clickPostPage(username, post.id)}
    >
      {/* Category */}
      <div className="flex flex-row items-center">
        {/* Category Icon */}
        <div className="flex h-3">
          <TechIconLoader
            iconName={post.category.categoryName}
            color="#393939"
          />
        </div>
        {/* Category Name */}
        <div className="flex ml-1">
          <span className="text-xs">{post.category.categoryName}</span>
        </div>
      </div>
      {/* Category End */}
      {/* Post Info */}
      <div className="flex-0 flex flex-row mt-2 items-center">
        {!!post.thumbNailUrl ? (
          <div className="h-32 w-48 mr-3 hidden md:block">
            <img
              className="h-32 w-48 object-cover"
              src={post.thumbNailUrl}
              alt=""
            />
          </div>
        ) : (
          <></>
        )}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 cursor-pointer">
            {post.title}
          </h1>
          <div>
            <span className="text-gray-500 text-xs">
              {formatDistance(
                subDays(new Date(post.createdAt), 1),
                new Date(),
                { addSuffix: true }
              ) + " "}
              ·{" "}
            </span>
            <span className="text-gray-500 text-xs">{post.likes} Likes</span>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 w-full my-10" />
    </div>
  );
}
