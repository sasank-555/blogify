import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto  backdrop-blur-sm    py-3   sticky top-0 z-50 pl-5">
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
    </div>
  );
};

export default Navbar;
