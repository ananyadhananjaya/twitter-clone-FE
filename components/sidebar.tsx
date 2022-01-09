import { NextPage } from "next";
import Link from "next/link";

const Sidebar: NextPage = () => {
  return (
    <>
      <div className="container w-1/5 h-screen  flex justify-center">
        <div className="">
          <div className="p-1">
            <i className="bi bi-twitter text-2xl p-1 text-sky-500 "></i>
          </div>
          <div className=" hover:bg-slate-200 rounded-full p-1">
            <i className="bi bi-person text-lg p-1"></i>{" "}
            <Link href={"/profile"}>Profile</Link>
          </div>

          <div className="  hover:bg-slate-200 rounded-full p-1">
            {" "}
            <i className="bi bi-house-door text-lg p-1"></i>{" "}
            <Link href={"/"}>Home</Link>
          </div>
          <div className="  hover:bg-slate-200 rounded-full p-1 ">
            {" "}
            <i className="bi bi-hash text-lg p-1 "></i> Hashtags{" "}
          </div>
          <div className=" hover:bg-slate-200 rounded-full p-1">
            {" "}
            <i className="bi bi-bell text-lg p-1 "></i> Notifications
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
