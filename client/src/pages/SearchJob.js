import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsFillBellFill } from "react-icons/bs";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillMessage,
  AiFillProfile,
} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import Card from "../components/Card";

const SearchJob = () => {
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
          <AiFillHome size="20" className="mt-3" style={{ color: "white" }} />
          <div className=" text-white text-base font-bold ml-5">Dashboard</div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <AiOutlineSearch
            size="20"
            className="mt-2"
            style={{ color: "white" }}
          />
          <div className="bg-[#F2F2F2] h-10 w-28 rounded-2xl ml-3 pt-2 text-base font-bold text-center">
            Search Job
          </div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <IoExtensionPuzzleSharp
            size="20"
            className="mt-1"
            style={{ color: "white" }}
          />
          <div className=" text-white text-base font-bold ml-5">
            Applications
          </div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <AiFillMessage
            size="20"
            className="mt-1"
            style={{ color: "white" }}
          />
          <div className=" text-white text-base font-bold ml-5">Message</div>
        </div>
        <div className="flex mt-2 justify-start ml-2 px-2 ">
          <AiFillProfile
            size="20"
            className="mt-1"
            style={{ color: "white" }}
          />
          <div className=" text-white text-base font-bold ml-5">Profile</div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl">
        <div className="flex justify-between">
          <div className="flex">
            <HiMenuAlt1 size="30" />
            <div className="text-xl ml-2 font-bold text-left">
              <h1>Search Jobs</h1>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-2/5 h-10 rounded-full ">
            <input
              placeholder="Search something here..."
              className=" bg-inherit text-black font-semibold ml-10 mt-2"
            />
          </div>
          <div className="flex w-1/4 justify-between">
            <div className="bg-white w-12 h-12 rounded-full ">
              <AiFillMessage size="22" className="mt-4 ml-4" />
            </div>
            <div className="bg-white w-12 h-12 rounded-full">
              <BsFillBellFill size="22" className="mt-4 ml-4" />
            </div>
            <div className="bg-white w-12 h-12 rounded-full"></div>
            <div className="text-sm font-semibold mt-3 ml-1">Oda Dink</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm font-semibold mt-4">
            Showing numbers from numbers
          </div>
          <div class="rounded-full w-4 h-4 mt-5 bg-white" />
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Fulltime
          </div>
          <div class="rounded-full mt-5 w-4 h-4 bg-white " />
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Freelance
          </div>
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Details
          </div>
          <div className="bg-[#D9D9D9] w-12 h-3 rounded-lg mt-5">
            <div class="rounded-full w-4 h-4 bg-[#A9A9A9]" />
          </div>
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Salary
          </div>
          <div className="bg-[#4E36E2] w-12 h-3 rounded-lg mt-5">
            <div class="rounded-full w-4 h-4 bg-purple" />
          </div>
          <div className="bg-white w-20 h-6 mt-3 rounded-lg justify-end">
            <div className="text-purple font-medium text-center">Newest</div>
          </div>
        </div>
        <div className="text-xs text-[#808080]"> Based on the Preferences</div>

        <div className="flex justify-between">
          <Card />
          <Card />
          <Card />

        </div>
        <div className="flex justify-between">
          <Card />
          <Card />
          <Card />
        </div>

        <div className="text-black text-sm font-normal">
          Showing 6 out of 56 data
        </div>
        <div className="flex justify-end">
          <div className="bg-white w-24 h-7  mx-3 rounded-2xl">
            <div className="text-purple font-sm text-center font-semibold ">
              &lt;&lt;Previous
            </div>
          </div>
          <div className="bg-[#dfcef7] w-44 h-7  rounded-2xl flex justify-evenly">
            <div className="text-purple font-sm font-semibold">Pages</div>
          </div>
          <div className="bg-white w-20 h-7 mx-3 rounded-2xl">
            <div className="text-purple font-sm text-center font-semibold">
              &gt;&gt;Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchJob;

