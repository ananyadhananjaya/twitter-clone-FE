import { NextPage } from "next";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Sidebar: NextPage = () => {

    const isXS = useMediaQuery({ query: '(min-width: 800px)'})
  return (
    <>
      <div className="container w-1/5 h-screen  flex justify-center">
        {isXS && (
          <div className="">
            <div className="p-1">
              <i className="bi bi-twitter text-2xl p-1 text-sky-500 "></i>
            </div>
            <div className="group hover:bg-slate-200 rounded-full p-1">
              <i className="bi bi-person text-lg p-1"></i>{" "}
              <Link href={"/profile"}>Profile</Link>
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                profile
              </span>
            </div>

            <div className="group  hover:bg-slate-200 rounded-full p-1">
              {" "}
              <i className="bi bi-house-door text-lg p-1"></i>{" "}
              <Link href={"/"}>Home</Link>
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                home
              </span>
            </div>
            <div className=" group hover:bg-slate-200 rounded-full p-1 ">
              {" "}
              <i className="bi bi-hash text-lg p-1 "></i> Hashtags{" "}
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                hashtags
              </span>
            </div>
            <div className="group hover:bg-slate-200 rounded-full p-1">
              {" "}
              <i className="bi bi-bell text-lg p-1 "></i> Notifications
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                notifications
              </span>
            </div>
          </div>
        )}
        {!isXS && (
          <div className="">
            <div className="p-1 m-2">
              <i className="bi bi-twitter text-2xl p-1 text-sky-500 "></i>
            </div>

            <div className="group hover:bg-slate-200 rounded-full p-1 m-2">
              <Link href={"/profile"}>
                <i className="bi bi-person text-lg p-1"></i>
              </Link>
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                profile
              </span>
            </div>

            <div className=" group hover:bg-slate-200 rounded-full p-1 m-2">
              <Link href={"/"}>
                <i className="bi bi-house-door text-lg p-1"></i>
              </Link>
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                home
              </span>
            </div>
            <div className=" group hover:bg-slate-200 rounded-full p-1 m-2 ">
              <i className="bi bi-hash text-lg p-1 "></i>
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                hashtags
              </span>
            </div>
            <div className=" group hover:bg-slate-200 rounded-full p-1 m-2">
              <i className="bi bi-bell text-lg p-1  "></i>
              <span
                className=" bg-gray-800 mt-2 bg-opacity-75
        rounded-md hidden group-hover:block absolute
         text-center px-1 py-1 z-3 text-xs text-white"
              >
                notifications
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
