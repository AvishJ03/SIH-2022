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
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const SearchJob = () => {
  return (
    <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
        <Sidebar selected="Search Job" />
      <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
      <Header heading="Job Details" user="Oda Dink" />
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

        <div className="grid grid-cols-1 grid-flow-row gap-3 2xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
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

