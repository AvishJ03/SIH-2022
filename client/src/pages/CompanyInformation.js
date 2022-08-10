import React from 'react'
import SideBarCompany from '../components/SideBarCompany'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BackgroundImg from '../assets/BackgroundImg.jpg'
import Card from '../components/Card'

const CompanyInformation = () => {
  return (
    <>
    <div className="bg-[#40189D] w-full min-h-screen flex font-main">
        <SideBarCompany selected="Profile" />
        <div className="bg-white w-full rounded-tl-[100px] rounded-bl-[100px]">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <header>
              <h1 className='text-3xl font-bold text-center ml-4'>Company Information</h1>
            </header>
          <p className="text-[#40189D] font-medium text-[14px] p-2.5">
              <span className="text-[#808080]"></span>
          </p>
          <div className="bg-purple bg-opacity-[.12] rounded-[34px] relative mr-10 h-[0%] shadow shadow-inherit shodow-lg">
<div className='mt-4'>
                <form className='mt-4'>
                  <div className="mx-8 mt-8 text-lg">
                    <div className='m-3'>
                      <label className=''>
                        Upload Background
                      </label>
                      <input type="file" name="bg" id="bg" className='m-3'/>
                    </div>
                    <div className='m-3'>
                      <label className=''>
                        Upload Logo
                      </label>
                      <input type="file" name="bg" id="bg" className='m-3'/>
                    </div>
                    <div className='flex justify-between mt-16 mx-16'>
                    <div className="m-3">
                      <label>Name: </label>
                      <br />
                      <input
                        type="text"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-4"
                      />
                    </div>
                    <div className="m-3">
                      <label>Location: </label>
                      <br />
                      <input
                        type="text"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-4"
                      />
                    </div>
                    </div>
                  </div>
                  <div className="flex justify-between my-4 text-lg mx-24">
                    <div className="m-3">
                      <label>Phone Number: </label>
                      <br />
                      <input
                        type="number"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-4"
                      />
                    </div>
                    <div className="m-3">
                      <label>No. Of Employees: </label>
                      <br />
                      <input
                        type="number"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-4"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between my-4 text-lg mx-24">
                    <div className="m-3">
                      <label>Company Type: </label>
                      <br />
                      <select name="type" id="type" className='border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-4'>
                      <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="Public Limited Company">Public Limited Company</option>
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="Joint-Venture Company">Joint-Venture Company</option>
                        <option value="Partnership Firm">Partnership Firm</option>
                        <option value="One Person Company">One Person Company</option>
                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                        <option value="Branch Office">Branch Office</option>
                        <option value="NGO">NGO</option>
                      </select>
                    </div>
                    <div className="m-3">
                      <label>Website: </label>
                      <br />
                      <input
                        type="location"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-4"
                      />
                    </div>
                  </div>

                  
                </form>
                <form>
                  <div className='m-8'>
                  <h4 className='text-2xl font-bold'>
                    Description
                  </h4>
                  <hr />
                  </div>
                  <div className='m-8'>
                  <textarea rows="10" cols="100" className='border border-[#40189D] bg-[#F2F2F2] rounded-[34px] mt-4' />
                  </div>
                </form>
                <div className='flex justify-end'>
                <button className='bg-purple text-white m-8 rounded-[34px] p-2 text-center w-1/6'>
                  Save Changes
                </button>
                </div>

                


                

               
                

                




        
            
          </div>
          
          
            
         </div>
         
          </div>
          </div>
    </div>
      
    </>
  )
}

export default CompanyInformation
