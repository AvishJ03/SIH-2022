import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { BsFillBellFill, BsSlack } from "react-icons/bs";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillMessage,
  AiFillProfile,
} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const ApplicationStud = () => {
  return (
    <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
        <Sidebar selected="Applications" />
        <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
            <Header heading="Applications" user="Oda Dink" />
      
            <div className="flex justify-left mt-2">
                <div className="text-sm font-semibold mt-4">
                    Showing 'x' Applicants
                </div>
                <button className="bg-[#40189D] w-20 h-6 mt-3 rounded-full hover:bg-violet-600 active:bg-violet-700">
                <div className="text-white font-medium text-center">All</div>
                </button>
        
                <button className="bg-[#dfcef7] w-20 h-6 mt-3 rounded-full hover:bg-[#c69eff] ">
                <div className="text-[#808080] font-medium text-center">Pending</div>
                </button>
        
                <button className="bg-[#dfcef7] w-20 h-6 mt-3 rounded-full hover:bg-[#c69eff]">
                <div className="text-[#808080] font-medium text-center">Viewed</div>
                </button>
        
                <button className="bg-[#dfcef7] w-20 h-6 mt-3 rounded-full hover:bg-[#c69eff]">
                <div className="text-[#808080] font-medium text-center">Selected</div>
                </button>
        
                {/* <div className="bg-white w-20 h-6 mt-3 rounded-2xl hover:bg-[#c69eff]">
                    <div className="text-[#808080] font-medium text-center">Newest</div>
                </div> */}
            </div>
      
            <div className="text-xs text-[#808080]"> Based on your Preferences</div>
            <div className="bg-white rounded-t-lg mt-3">
                <div className=" flex justify-around p-3">
                    <div className="text-xl font-bold mt-4">Date Applied</div>
                    <div className="text-xl font-bold mt-4">Company</div>
                    <div className="text-xl font-bold mt-4">Type</div>
                    <div className="text-xl font-bold mt-4">Position</div>
                    <div className="text-xl font-bold mt-4">Contact</div>
                    <div className="text-xl font-bold mt-4">Status</div>
                </div>
            </div>
            
            {/* 1st company */}
            <div className="bg-white mt-1">
                <div className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">June 1, 2020</div>
                    <div className="flex ml-2 justify-between">
                        <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/>
                        <div className=" text-xs font-semibold mt-4">Company Name</div>
                    </div>
                    <div className="text-sm font-semibold mt-4">FREELANCE</div>
                    <div className="text-sm font-semibold mt-4">Intern UI Designer</div>
                    <div className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </div>
                    {/* <div className="relative"> */}
                    {/* <select className="appearance-none w-full bg-gray-200 border border-black text-black py-3 px-4 pr-8 rounded-full"> */}
                    {/* <select className="bg-white text-black text-sm border font-bold py-2 px-4 rounded-full">
                        <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</option>
                        <option className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</option>
                        <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</option>
                    </select>
                    </div> */}
                    <div className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</div>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </div>
            </div>
            
            {/* 2nd company */}
            <div className="bg-white mt-1">
                <div className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">June 1, 2020</div>
                    <div className="flex ml-2 justify-between">
                        <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/>
                        <div className=" text-xs font-semibold mt-4">Company Name</div>
                    </div>
                    <div className="text-sm font-semibold mt-4">FREELANCE</div>
                    <div className="text-sm font-semibold mt-4">Intern UI Designer</div>
                    <div className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </div>
                    <div className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</div>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </div>
            </div>

            {/* 3rd company */}
            <div className="bg-white mt-1">
                <div className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">June 1, 2020</div>
                    <div className="flex ml-2 justify-between">
                        <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/>
                        <div className=" text-xs font-semibold mt-4">Company Name</div>
                    </div>
                    <div className="text-sm font-semibold mt-4">FREELANCE</div>
                    <div className="text-sm font-semibold mt-4">Intern UI Designer</div>
                    <div className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </div>
                    <div className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</div>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </div>
            </div>

            {/* 4th company */}
            <div className="bg-white mt-1">
                <div className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">June 1, 2020</div>
                    <div className="flex ml-2 justify-between">
                        <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/>
                        <div className=" text-xs font-semibold mt-4">Company Name</div>
                    </div>
                    <div className="text-sm font-semibold mt-4">FREELANCE</div>
                    <div className="text-sm font-semibold mt-4">Intern UI Designer</div>
                    <div className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </div>
                    <div className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</div>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </div>
            </div>

            {/* 5th company */}
            <div className="bg-white mt-1">
                <div className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">June 1, 2020</div>
                    <div className="flex ml-2 justify-between">
                        <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/>
                        <div className=" text-xs font-semibold mt-4">Company Name</div>
                    </div>
                    <div className="text-sm font-semibold mt-4">FREELANCE</div>
                    <div className="text-sm font-semibold mt-4">Intern UI Designer</div>
                    <div className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </div>
                    <div className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</div>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </div>
            </div>

            {/* 6th company */}
            <div className="bg-white mt-1 rounded-b-lg">
                <div className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">June 1, 2020</div>
                    <div className="flex ml-2 justify-between">
                        <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/>
                        <div className=" text-xs font-semibold mt-4">Company Name</div>
                    </div>
                    <div className="text-sm font-semibold mt-4">FREELANCE</div>
                    <div className="text-sm font-semibold mt-4">Intern UI Designer</div>
                    <div className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </div>
                    <div className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</div>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </div>
            </div>

            &nbsp;
            <div className="flex justify-end">
                <div className="bg-white w-24 h-10  mx-3 rounded-2xl">
                    <div className="text-purple font-sm text-center align-middle font-semibold ">
                        &lt;&lt;Previous
                    </div>
                </div>
                <div className="bg-[#dfcef7] w-44 h-10  rounded-2xl flex justify-evenly">
                    <div className="text-purple font-sm font-semibold align-middle">Pages</div>
                </div>
                <div className="bg-white w-20 h-10 mx-3 rounded-2xl">
                    <div className="text-purple font-sm text-center align-middle font-semibold">
                        Next&gt;&gt;
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ApplicationStud;