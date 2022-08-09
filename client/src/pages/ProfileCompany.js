import React from 'react'
import SideBarCompany from '../components/SideBarCompany'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BackgroundImg from '../assets/BackgroundImg.jpg'
import Card from '../components/Card'

const ProfileCompany = () => {
  return (
    <>
    <div className="bg-[#40189D] w-full min-h-screen flex font-main">
        <SideBarCompany selected="Profile" />
        <div className="bg-[#F2F2F2] w-full rounded-tl-[100px] rounded-bl-[100px]">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Header heading="Profile" user="Company Name" />
          <p className="text-[#40189D] font-medium text-[14px] p-2.5">
              <span className="text-[#808080]"></span>
          </p>
          <div className="bg-white rounded-[34px] relative mr-10 h-[0%]">

        
          <svg className="rounded-tr-[34px] rounded-tl-[34px]" width="100%" height="0%" viewBox="0 0 1072 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 35C0 15.67 15.67 0 35 0H1037C1056.33 0 1072 15.67 1072 35V214H0V35Z" fill="#DDDBDB"/>
</svg>


            
          
          <div className='-mt-16 ml-16'>
          <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 14C5 9.02944 9.02944 5 14 5H148C152.971 5 157 9.02944 157 14V148C157 152.971 152.971 157 148 157H14C9.02944 157 5 152.971 5 148V14Z" fill="#808080" stroke="white" stroke-width="10"/>
</svg>
</div>
<div className='mt-4'>
          <h4 className="text-black font-semibold text-xl m-2 mr-4">
                  Generals
                </h4>
                <hr />
                <form>
                  <div className="flex justify-between m-4 mr-8 ml-8 text-lg">
                    <div className="m-3">
                      <label>Name: </label>
                      <input
                        type="text"
                        className="border-[#40189D] bg-[#F2F2F2]"
                      />
                    </div>
                    <div className="m-3">
                      <label>Location: </label>
                      <input
                        type="text"
                        className="border-[#40189D] bg-[#F2F2F2]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between m-4 mr-8 ml-8 text-lg">
                    <div className="m-3">
                      <label>Phone Number: </label>
                      <input
                        type="number"
                        className="border-[#40189D] bg-[#F2F2F2]"
                      />
                    </div>
                    <div className="m-3">
                      <label>No. Of Employees: </label>
                      <input
                        type="number"
                        className="border-[#40189D] bg-[#F2F2F2]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between m-4 mr-8 ml-8 text-lg">
                    <div className="m-3">
                      <label>Email ID: </label>
                      <input
                        type="email"
                        className="border-[#40189D] bg-[#F2F2F2]"
                      />
                    </div>
                    <div className="m-3">
                      <label>Website: </label>
                      <input
                        type="location"
                        className="border-[#40189D] bg-[#F2F2F2]"
                      />
                    </div>
                  </div>

                  
                </form>
                <h4 className="text-black font-semibold text-xl m-2 mr-4">
                  Company Type:
                </h4><hr />


                <form>
                <div className="m-4 mr-8 ml-8 text-lg mb-8">
                    <label>Select Type of company: </label>
                    <br />
                    <select name="type" id="type" className='mt-4 mb-4 w-[100%] border-[#40189D] bg-[#F2F2F2]'>
                    <option value="Public Limited">Public Limited</option>
                    <option value="Private Limited">Private Limited</option>
                    <option value="Joint-Venture">Joint-Venture</option>
                    <option value="Partnership Firm">Partnership Firm</option>
                    <option value="One Person">One Person</option>
                    <option value="Sole Propiertorship">Sole Propiertorship</option>
                    <option value="Branch Office">Branch Office</option>
                    <option value="NGO">NGO</option>
                    </select>
                    
                    
                    
                </div>

                </form>

                <h4 className="text-black font-semibold text-xl m-2 mr-4">
                  Description:
                </h4><hr />

                <div className='mt-4 ml-4'>
                    <form>
                        <textarea rows="10" cols="100" className='border-[#40189D] bg-[#F2F2F2]'>

                        </textarea>
                    </form>
                </div>
                

                




        
            
          </div>
          
          
            
         </div>
         <div className='bg-[#F2F2F2] m-8'>
                <h4 className="text-black font-semibold text-xl m-8 mr-8">
                  Jobs:
                </h4><hr />
                <div className='m-4 flex justify-evenly'>
                
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
                    
                </div>
          </div>
          </div>
    </div>
      
    </>
  )
}

export default ProfileCompany
