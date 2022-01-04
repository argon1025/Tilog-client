export default function UserBlogComponent({ username }) {
  const onClickLogoButton = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex cursor-pointer">
      <h1
        onClick={onClickLogoButton}
        className="text-2xl text-gray-700 transition ease-in-out duration-300 hover:text-sky-500 hover:drop-shadow-2xl"
      >
        {"#"}
      </h1>
      <h1 className=" text-2xl text-blue-600/70">{">"}</h1>
      <h1 className="font-medium text-xl text-gray-800 underline decoration-gray-300 transition ease-in-out duration-700 hover:drop-shadow-2xl hover:decoration-sky-500">
        {username}.log
      </h1>
    </div>
  );
}
