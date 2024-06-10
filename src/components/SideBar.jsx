import React from "react";
import {
  FaHome,
  FaHistory,
  FaVideo,
  FaFolder,
  FaUserEdit,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

function SideBar() {
  const sidebarNavTop = [
    {
      title: "Home",
      icon: <FaHome />,
      link: "",
    },
    {
      title: "Liked Videos",
      icon: <BiLike />,
      link: "",
    },
    {
      title: "History",
      icon: <FaHistory />,
      link: "",
    },
    {
      title: "My Content",
      icon: <FaVideo />,
      link: "",
    },
    {
      title: "Collection",
      icon: <FaFolder />,
      link: "",
    },
    {
      title: "Subscribers",
      icon: <FaUserEdit />,
      link: "",
    },
  ];
  const sidebarNavBottom = [
    {
      title: "Support",
      icon: <FaRegQuestionCircle />,
      link: "",
    },
    {
      title: "Settings",
      icon: <IoSettingsSharp />,
      link: "",
    },
  ];
  return (
    <div className="h-screen w-[25%] bg-black flex flex-col justify-between pb-3 border-r ">
      <div>
        <h1 className="text-white font-bold text-center mt-2 text-2xl py-1">YouTube</h1>
        {sidebarNavTop.map((nav) => (
          <div className="flex text-white border items-center gap-2 mt-3 mx-2 py-1 px-3 cursor-pointer">
            {nav.icon}
            {nav.title}
          </div>
        ))}
      </div>
      <div className="">
        {sidebarNavBottom.map((nav) => (
          <div className="flex text-white border items-center gap-2 mt-3 mx-2 py-1 px-3 cursor-pointer">
            {nav.icon}
            {nav.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
