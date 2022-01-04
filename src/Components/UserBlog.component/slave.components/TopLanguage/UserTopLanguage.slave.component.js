// Icons
import { GoTerminal } from "react-icons/go";
import { IconContext } from "react-icons";
// Icons Image
import TechIconLoader from "../../../Utility.components/techIconLoader";

export default function UserTopLanguageComponent({ username, toplanguage }) {
  return (
    <div className="flex flex-col max-w-5xl w-full bg-white p-10">
      {/* component title */}
      <div className="flex mb-5">
        <IconContext.Provider value={{ className: "mr-2 w-4 h-4" }}>
          <GoTerminal />
          <span className="text-xs">{username}'s TOP languages</span>
        </IconContext.Provider>
      </div>
      {/* content Card Area */}
      <div className="lg:flex lg:flex-row grid grid-cols-2 justify-center items-center">
        {/* Card */}
        {Object.keys(toplanguage).map((v) => (
          <div
            key={toplanguage[v].size}
            className="flex flex-col w-full lg:w-32 h-32 border border-gray-200 rounded-3xl bg-gray-800  mr-5"
          >
            {/* Card icon */}
            <div className="flex items-center justify-center w-9 h-9 border border-gray-500 rounded-xl m-3 p-2">
              <TechIconLoader iconName={toplanguage[v].name} color="white" />
            </div>
            {/* Card title */}
            <div className="m-3">
              <p className="text-sm text-gray-100 font-medium mr-1">
                {toplanguage[v].name}
              </p>
              <p className="text-xs text-gray-400">
                {toplanguage[v].percent}% Total used
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
