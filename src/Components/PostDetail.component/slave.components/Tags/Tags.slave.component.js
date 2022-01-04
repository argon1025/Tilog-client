// Icons
import { FaHashtag } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function TagsComponent({ tags }) {
  return (
    <div className="flex flex-col w-full max-w-4xl justify-start items-start px-5 overflow-hidden">
      {/* Tag */}
      <div className="flex text-gray-600  mr-3">
        <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
          <FaHashtag />
          <span className="text-xs">Tags</span>
        </IconContext.Provider>
      </div>
      {/* Rendering Tags */}
      <div>
        {tags.map((tag) => (
          <button
            key={tag.id}
            class="px-4 py-2 m-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300"
            type="submit"
          >
            {tag.tags_tagsName}
          </button>
        ))}
      </div>
    </div>
  );
}
