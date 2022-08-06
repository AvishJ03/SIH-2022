import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillMessage,
  AiFillProfile,
} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="bg-purple w-full h-screen flex">
      <div className="flex flex-col h-2/3 justify-evenly ml-2">
        <div className="flex px-2">
          <div className="bg-[#FFFFFF] w-10 h-10 rounded-full"></div>
          <div className="text-white text-base font-bold ml-3 mt-2 text-center">
            Sitename
          </div>
        </div>
        <div className="flex mt-2 justify-evenly px-4">
          <AiFillHome size="20" className="mt-2" style={{ color: "white" }} />
          <div className="bg-[#F2F2F2] h-10 w-28 rounded-2xl ml-3 pt-2 text-base font-bold text-center">
            Dashboard
          </div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <AiOutlineSearch size="20" className="" style={{ color: "white" }} />
          <div className=" text-white text-base font-bold ml-5">Search Job</div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <IoExtensionPuzzleSharp size="20" style={{ color: "white" }} />
          <div className=" text-white text-base font-bold ml-5">
            Applications
          </div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <AiFillMessage size="20" className="" style={{ color: "white" }} />
          <div className=" text-white text-base font-bold ml-5">Message</div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <AiFillProfile size="20" className="" style={{ color: "white" }} />
          <div className=" text-white text-base font-bold ml-5">Profile</div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] w-full h-screen flex justify-between px-10 pt-4 ml-10 rounded-l-3xl">
        <div className="flex">
          <HiMenuAlt1 size="30" />
          <div className="text-xl ml-2 font-bold text-left">
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-2/5 h-10 rounded-full ">
          <input
            placeholder="Search something here..."
            className=" bg-inherit text-black font-semibold ml-10 mt-2"
          />
        </div>
        <div className="flex w-1/5 justify-between">
          <div className="bg-white w-12 h-12 rounded-full"></div>
          <div className="bg-white w-12 h-12 rounded-full"></div>
          <div className="bg-white w-12 h-12 rounded-full"></div>
          <div className="text-sm font-semibold mt-3 ml-1">Oda Dink</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
