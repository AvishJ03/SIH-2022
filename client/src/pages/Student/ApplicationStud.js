import React from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const ApplicationStud = () => {
  return (
    <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
        <Sidebar selected="Applications" />
        <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
            <Header heading="Applications" user="Oda Dink" />
      
            <div className="flex justify-left mt-2">
                <div className="text-sm font-semibold mt-4">
                    Showing 10 Applications
                </div>
                {/* <button className="bg-[#40189D] w-20 h-6 mt-3 rounded-full hover:bg-violet-600 active:bg-violet-700">
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
                </button> */}
        
                {/* <div className="bg-white w-20 h-6 mt-3 rounded-2xl hover:bg-[#c69eff]">
                    <div className="text-[#808080] font-medium text-center">Newest</div>
                </div> */}
            </div>
      
            <div className="text-xs text-[#808080]"> Based on your Preferences</div>
            <table className='w-[100%]'>
            <div className="bg-white rounded-t-lg mt-3">
                <tr className=" flex justify-around p-3">
                    <th className="text-xl font-bold mt-4">Date Applied</th>
                    <th className="text-xl font-bold mt-4">Company</th>
                    <th className="text-xl font-bold mt-4">Type</th>
                    <th className="text-xl font-bold mt-4">Position</th>
                    <th className="text-xl font-bold mt-4">Status</th>
                </tr>
            </div>
            
            {/* 1st company */}
            <tr className="bg-white mt-1">
                <td className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">September 6, 2022</div>
                    <div className="flex ml-2 justify-between">
                        {/* <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/> */}
                        <td className=" text-xs font-semibold mt-4">Trando Technologies</td>
                    </div>
                    <td className="text-sm font-semibold mt-4">Internship</td>
                    <td className="text-sm font-semibold mt-4">Web Developer</td>
                    {/* <td className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </td> */}
                    {/* <div className="relative"> */}
                    {/* <select className="appearance-none w-full bg-gray-200 border border-black text-black py-3 px-4 pr-8 rounded-full"> */}
                    {/* <select className="bg-white text-black text-sm border font-bold py-2 px-4 rounded-full">
                        <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</option>
                        <option className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</option>
                        <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</option>
                    </select>
                    </div> */}
                    <td className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</td>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </td>
            </tr>
            
            {/* 2nd company */}
            {/* <tr className="bg-white mt-1">
                <div className=" flex justify-around p-3">
                    <td className="text-sm font-semibold mt-4">June 1, 2020</td>
                    <td className="flex ml-2 justify-between">
                        <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/>
                        <div className=" text-xs font-semibold mt-4">Company Name</div>
                    </td>
                    <td className="text-sm font-semibold mt-4">FREELANCE</td>
                    <td className="text-sm font-semibold mt-4">Intern UI Designer</td>
                    <td className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </td>
                    <td className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</td>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                {/* </div> */}
            {/* </tr>  */}
            <tr className="bg-white mt-1">
                <td className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">September 6, 2022</div>
                    <div className="flex ml-2 justify-between">
                        {/* <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/> */}
                        <td className=" text-xs font-semibold mt-4">Diloxy Technologies</td>
                    </div>
                    <td className="text-sm font-semibold mt-4">Internship</td>
                    <td className="text-sm font-semibold mt-4">Full Stack Web Developer</td>
                    {/* <td className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </td> */}
                    {/* <div className="relative"> */}
                    {/* <select className="appearance-none w-full bg-gray-200 border border-black text-black py-3 px-4 pr-8 rounded-full"> */}
                    {/* <select className="bg-white text-black text-sm border font-bold py-2 px-4 rounded-full">
                        <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</option>
                        <option className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</option>
                        <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</option>
                    </select>
                    </div> */}
                    <td className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</td>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </td>
            </tr>

            {/* 3rd company */}
            <tr className="bg-white mt-1">
                <td className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">September 6, 2022</div>
                    <div className="flex ml-2 justify-between">
                        {/* <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/> */}
                        <td className=" text-xs font-semibold mt-4">Across the globe</td>
                    </div>
                    <td className="text-sm font-semibold mt-4">Internship</td>
                    <td className="text-sm font-semibold mt-4">Front End Developer</td>
                    {/* <td className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </td> */}
                    {/* <div className="relative"> */}
                    {/* <select className="appearance-none w-full bg-gray-200 border border-black text-black py-3 px-4 pr-8 rounded-full"> */}
                    {/* <select className="bg-white text-black text-sm border font-bold py-2 px-4 rounded-full">
                        <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</option>
                        <option className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</option>
                        <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</option>
                    </select>
                    </div> */}
                    <td className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</td>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </td>
            </tr>

            {/* 4th company */}
            <tr className="bg-white mt-1">
                <td className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">September 6, 2022</div>
                    <div className="flex ml-2 justify-between">
                        {/* <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/> */}
                        <td className=" text-xs font-semibold mt-4">Mango Jelly</td>
                    </div>
                    <td className="text-sm font-semibold mt-4">Internship</td>
                    <td className="text-sm font-semibold mt-4">Full Stack Developer</td>
                    {/* <td className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </td> */}
                    {/* <div className="relative"> */}
                    {/* <select className="appearance-none w-full bg-gray-200 border border-black text-black py-3 px-4 pr-8 rounded-full"> */}
                    {/* <select className="bg-white text-black text-sm border font-bold py-2 px-4 rounded-full">
                        <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</option>
                        <option className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</option>
                        <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</option>
                    </select>
                    </div> */}
                    <td className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</td>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </td>
            </tr>

            {/* 5th company */}
            <tr className="bg-white mt-1">
                <td className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">September 6, 2022</div>
                    <div className="flex ml-2 justify-between">
                        {/* <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/> */}
                        <td className=" text-xs font-semibold mt-4">RV Technologies</td>
                    </div>
                    <td className="text-sm font-semibold mt-4">Internship</td>
                    <td className="text-sm font-semibold mt-4">Back End Developer</td>
                    {/* <td className="flex ml-2 justify-between">
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                    </td> */}
                    {/* <div className="relative"> */}
                    {/* <select className="appearance-none w-full bg-gray-200 border border-black text-black py-3 px-4 pr-8 rounded-full"> */}
                    {/* <select className="bg-white text-black text-sm border font-bold py-2 px-4 rounded-full">
                        <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</option>
                        <option className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</option>
                        <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</option>
                    </select>
                    </div> */}
                    <td className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</td>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </td>
            </tr>

            {/* 6th company */}
            <tr className="bg-white mt-1">
                <td className=" flex justify-around p-3">
                    <div className="text-sm font-semibold mt-4">September 6, 2022</div>
                    <div className="flex ml-2 justify-between">
                        {/* <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]"/> */}
                        <td className=" text-xs font-semibold mt-4">Grado</td>
                    </div>
                    <td className="text-sm font-semibold mt-4">Internship</td>
                    <td className="text-sm font-semibold mt-4">Full Stack Developer</td>
                    {/* <td className="flex ml-2 justify-between"> */}
                        {/* <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/>
                        <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]"/> */}
                    {/* </td> */}
                    {/* <div className="relative"> */}
                    {/* <select className="appearance-none w-full bg-gray-200 border border-black text-black py-3 px-4 pr-8 rounded-full"> */}
                    {/* <select className="bg-white text-black text-sm border font-bold py-2 px-4 rounded-full">
                        <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</option>
                        <option className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full">Viewed</option>
                        <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">Selected</option>
                    </select>
                    </div> */}
                    <td className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">Pending</td>
                    {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
                </td>
            </tr>
            </table>

            &nbsp;
            <div className="flex justify-end">
                <div className="bg-white w-24 h-10  mx-3 rounded-2xl">
                    <button className="text-purple font-sm text-center align-middle font-semibold ">
                        &lt;&lt;Previous
                    </button>
                </div>
                {/* <div className="bg-[#dfcef7] w-44 h-10  rounded-2xl flex justify-evenly">
                    <div className="text-purple font-sm font-semibold align-middle">Pages</div>
                </div> */}
                <button className="bg-[#dfcef7] w-44 h-7  rounded-2xl flex justify-evenly border border-purple">
                <div className="bg-[#dfcef7] w-12 h-6 rounded-full hover:bg-[#d0b5f5]">
                    <div className="text-purple font-bold">1</div>
                </div>
                <div className="bg-[#dfcef7] w-12 h-6 rounded-full hover:bg-[#d0b5f5]">
                    <div className="text-purple font-bold">2</div>
                </div>
                <div className="bg-[#c3a0f5] w-12 h-6 rounded-full">
                    <div className="text-purple font-bold">3</div>
                </div>
                <div className="bg-[#dfcef7] w-12 h-6 rounded-full hover:bg-[#d0b5f5]">
                    <div className="text-purple font-bold">4</div>
                </div>
                </button>
                <div className="bg-white w-20 h-10 mx-3 rounded-2xl">
                    <button className="text-purple font-sm text-center align-middle font-semibold">
                        Next&gt;&gt;
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ApplicationStud;