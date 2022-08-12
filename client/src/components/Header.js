import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = ({ heading, user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <HiMenuAlt1 size="30" />
        <div className="text-xl ml-2 font-bold text-left">
          <h1>{heading}</h1>
        </div>
      </div>
      <div className="bg-[#D9D9D9] w-2/5 h-10 rounded-full ">
        <input
          placeholder="Search something here..."
          className=" bg-inherit text-slate-600 w-4/5 font-semibold ml-10 mt-2"
        />
      </div>
      <div className="flex w-1/4 justify-between">
        <div className="bg-white w-12 h-12 rounded-full text-center py-3">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="bg-white w-12 h-12 rounded-full text-center py-3">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="bg-white w-12 h-12 rounded-full text-center py-3">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="text-sm font-semibold mt-3 ml-1">{user}</div>
      </div>
    </div>
  );
};

export default Header;