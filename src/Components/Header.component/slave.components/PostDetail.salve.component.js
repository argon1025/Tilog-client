export default function PostDetailComponent({ username, postdata }) {
  const onClickLogo = (username) => {
    window.location.href = `/${username}`;
  };
  const onClickMainLogo = () => {
    window.location.href = "/";
  };
  return (
    <div className="flex cursor-pointer">
      <h1
        onClick={onClickMainLogo}
        className="font-eng-sub-font-2 text-2xl text-gray-700  transition ease-in-out duration-300 hover:text-sky-500 hover:drop-shadow-2xl"
      >
        {"#"}
      </h1>
      <h1 className="font-eng-sub-font-2 text-2xl text-blue-600/70">{">"}</h1>
      <h1
        onClick={() => onClickLogo(username)}
        className="font-bold font-eng-sub-font-2 text-xl text-gray-800 underline decoration-gray-500 transition ease-in-out duration-700 hover:text-sky-500 hover:drop-shadow-2xl hover:decoration-sky-500"
      >
        {username}.log
      </h1>
      <h1 className="flex font-bold font-eng-sub-font-2 text-xl text-gray-800  transition ease-in-out duration-700 hover:text-sky-500 hover:drop-shadow-2xl">
        /
        {!postdata ? (
          <div className="animate-pulse w-64 h-full bg-gray-100 rounded ml-2"></div>
        ) : (
          postdata.title
        )}
      </h1>
    </div>
  );
}
