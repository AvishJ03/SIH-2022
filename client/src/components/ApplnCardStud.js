import React from "react";

const ApplnCardStud = () => {
    return (
        <tr className="bg-white mt-1">
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
                </div>
            </tr>
    );
}

export default ApplnCardStud;