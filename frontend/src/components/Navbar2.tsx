import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="backdrop-blur-sm flex justify-between   py-3   sticky top-0 z-50 px-5 border-b-[1px]">
      <div className="flex gap-2 items-center">
        <div className="size-8 bg-gray-950 rounded-full"></div>
        <Link
          to={
            localStorage.getItem("token") === "" ||
            localStorage.getItem("token") === null
              ? "/"
              : "/blogs"
          }
        >
          <h2 className="text-4xl font-bold font-Inter -tracking-wide  ">
            Blogify
          </h2>
        </Link>
      </div>
      <Link
        to="/createblog"
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        <PlusIcon className="h-5 w-5 mr-2 font-Inter" />
        Write Blog
      </Link>
    </div>
  );
};

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default Navbar2;
