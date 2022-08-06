import React from 'react'
import { HiMenuAlt1} from "react-icons/hi";
import { AiFillHome,AiOutlineSearch,AiFillMessage,AiFillProfile} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";


const Dashboard=() =>{
    return(
        <div className="bg-purple w-full h-screen flex">
          <div className='ml-4 mt-16'>
          <div className='bg-[#FFFFFF] w-10 h-10 mb-8 rounded-full'></div>
          <AiFillHome size="20" className='mt-10 content-center'style={{color:"white"}}/>
          <AiOutlineSearch size="20"className='mt-12' style={{color:"white"}}/>
          <IoExtensionPuzzleSharp size="20" className='mt-12' style={{color:"white"}}/>
          <AiFillMessage size="20" className='mt-12'style={{color:"white"}}/>
          <AiFillProfile size="20" className='mt-12' style={{color:"white"}}/>
        </div>
           <div className=' mt-16'>
            <div className='text-white text-base font-bold text-center'>Sitename</div>
          <div className='bg-[#F2F2F2] box-content h-10 w-28 rounded-2xl mt-10'>
          <p className='text-base font-bold text-center'>Dashboard</p>
          </div> 
          <div className=' text-white text-base font-bold mt-10 text-center'><p>Search Job</p></div>
          <div className=' text-white text-base font-bold mt-10 text-center'><p>Applications</p></div>
          <div className=' text-white text-base font-bold mt-10 text-center'><p>Message</p></div>
          <div className=' text-white text-base font-bold mt-10 text-center'><p>Profile</p></div>
          </div>
          <div className="bg-[#F2F2F2] w-[1400px] h-[611px] flex ml-10 rounded-l-3xl">
          <div className='flex flex-row'>
          <HiMenuAlt1 size="30" className='my-4 mx-1'/>
          <div className="text-xl font-bold text-left mt-4"><h1>Dashboard</h1>
          </div>
          <div className="bg-[#D9D9D9] w-96 h-10 my-2 ml-8 rounded-full ">
          <p className=" placeholder:text text-slate-600 font-semibold ml-10 mt-2">Search something here...</p>
          </div> 
          <div className='bg-[#FFFFFF] w-12 h-12 rounded-full ml-20 mt-2'></div>
          <div className='bg-[#FFFFFF] w-12 h-12 rounded-full  mr-10 ml-10  mt-2'></div>
          <div className='bg-[#FFFFFF] w-12 h-12 rounded-full  mt-2 mr-2'></div>
          <div className='text-sm font-semibold mt-3 ml-1'><p>Oda Dink</p>
          </div>
   
   </div>
   
    
          
           
          </div> 

          
          
          
        </div>  
         
        
    )
}


export default Dashboard;