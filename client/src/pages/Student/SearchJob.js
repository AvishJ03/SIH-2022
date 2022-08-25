import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const SearchJob = () => {
  return (
    <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
      <Sidebar selected="Search Job" />
      <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
        <Header heading="Job Details" user="Oda Dink" />
        <div className="flex justify-between">
          <div className="text-sm font-semibold mt-2">
            Showing numbers from numbers
          </div>
          
          {/* <input type="radio" className="w-4 h-4 mt-5 border border-[#808080] bg-white" />
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Fulltime
          </div>
          <input type="radio" className="w-4 h-4 mt-5 border border-[#808080] bg-white" />
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Work From Home
          </div>
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Details
          </div>
          <div className="bg-[#D9D9D9] w-12 h-3 rounded-lg mt-5">
            <div class="rounded-full w-4 h-4 bg-[#A9A9A9] border border-[#A9A9A9] border-solid " />
          </div>
          <div className="text-sm font-semibold mt-4 text-[#808080]">
            Salary
          </div>
          <div className="bg-[#4E36E2] w-12 h-3 rounded-lg mt-5">
            <div class="rounded-full w-4 h-4 bg-purple" />
          </div>
          <button className="bg-white w-20 h-6 mt-3 rounded-2xl justify-end border border-purple hover:bg-[#d0b5f5]">
            <div className="text-purple font-sm text-center">Newest</div>
          </button> */}
        </div>
        <div className="text-xs text-[#808080]"> Based on the Preferences</div>

        <div className="grid grid-cols-3 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="text-black text-sm font-normal mt-5">
          Showing 6 out of 56 data
        </div>
        {/* <div className="flex justify-end">
          <button className="bg-white w-24 h-7  mx-3 rounded-2xl border border-purple hover:bg-[#d0b5f5]">
            <div className="text-purple font-sm text-center font-semibold ">
              &lt;&lt;Previous
            </div>
          </button>
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
          <button className="bg-white w-20 h-7 mx-3 rounded-2xl border border-purple hover:bg-[#d0b5f5]">
            <div className="text-purple font-sm text-center font-semibold">
              Next&gt;&gt;
            </div>
          </button>
        </div> */}
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
};

export default SearchJob;
