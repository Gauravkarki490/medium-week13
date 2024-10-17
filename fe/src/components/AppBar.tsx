import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const AppBar = () => {
  return (
    <div className=" fixed w-full  bg-opacity-100 bg-slate-200 z-50">
      <div className="border-b flex justify-between px-10 py-4">
        <div className="flex justify-center flex-col">
          <Link to="/blogs">Medium</Link>
        </div>

        <div>
          <Link to={"/blogs/publish"}>
          <button
            type="button"
            className="mr-6 text-white bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
            New
          </button>
            </Link>
          <Avatar name="Gaurav" size="big" />
        </div>
      </div>
    </div>
  );
};
