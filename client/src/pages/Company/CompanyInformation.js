import React from "react";
import SideBarCompany from "../../components/SideBarCompany";

const CompanyInformation = () => {
  return (
    <>
      <div className="bg-[#40189D] w-full min-h-screen flex font-ourfont">
        <SideBarCompany selected="Profile" />
        <div className="bg-white w-full rounded-tl-[45px] rounded-bl-[45px] ml-16">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <header>
              <h1 className="text-3xl font-extrabold text-center ml-4">
                Company Information
              </h1>
            </header>
            <p className="text-[#40189D] font-medium text-[14px] p-2.5">
              <span className="text-[#808080]"></span>
            </p>
            <div className="bg-purple bg-opacity-[.12] rounded-[34px] relative mr-10 h-[0%] shadow shadow-inherit shodow-lg">
              <div className="mt-4">
                <form className="mt-4">
                  <div className="mx-8 mt-8 text-lg">
                    <div className="m-3">
                      <label className="font-semibold">Upload Background</label>
                      <input type="file" name="bg" id="bg" className="m-3" />
                    </div>
                    <div className="m-3">
                      <label className="font-semibold">Upload Logo</label>
                      <input type="file" name="bg" id="bg" className="m-3" />
                    </div>
                    <div className="flex justify-between mt-16 mx-32">
                      <div className="m-3 ">
                        <label className="font-semibold">Name: </label>
                        <br />
                        <input
                          type="text"
                          className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                        />
                      </div>
                      <div className="m-3 mr-32">
                        <label className="font-semibold">Location: </label>
                        <br />
                        <input
                          type="text"
                          className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between my-4 text-lg mx-40">
                    <div className="m-3">
                      <label className="font-semibold">Phone Number: </label>
                      <br />
                      <input
                        type="number"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                      />
                    </div>
                    <div className="m-3 mr-32">
                      <label className="font-semibold">No. Of Employees: </label>
                      <br />
                      <input
                        type="number"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between my-4 text-lg mx-40">
                    <div className="m-3">
                      <label className="font-semibold">Company Type: </label>
                      <br />
                      <select
                        name="type"
                        id="type"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                      >
                        <option value="none" selected disabled hidden>
                          Select an Option
                        </option>
                        <option value="Public Limited Company">
                          Public Limited Company
                        </option>
                        <option value="Private Limited Company">
                          Private Limited Company
                        </option>
                        <option value="Joint-Venture Company">
                          Joint-Venture Company
                        </option>
                        <option value="Partnership Firm">
                          Partnership Firm
                        </option>
                        <option value="One Person Company">
                          One Person Company
                        </option>
                        <option value="Sole Proprietorship">
                          Sole Proprietorship
                        </option>
                        <option value="Branch Office">Branch Office</option>
                        <option value="NGO">NGO</option>
                      </select>
                    </div>
                    <div className="m-3 mr-32">
                      <label className="font-semibold">Website: </label>
                      <br />
                      <input
                        type="location"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                      />
                    </div>
                  </div>
                </form>
                <form>
                  <div className="m-8 mt-20">
                    <h4 className="text-2xl font-semibold">Description</h4>
                    <hr />
                  </div>
                  <div className="m-8">
                    <textarea
                      rows="10"
                      cols="100"
                      className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] mt-4 p-3"
                    />
                  </div>
                </form>
                <div className="flex justify-end">
                  <button className="bg-purple text-white m-8 rounded-[34px] p-3 text-center w-1/6 font-semibold">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInformation;
