import React from 'react';
import StudInfoSidebar from "../../components/StudInfoSidebar";

const WorkSamples=() =>{
    return(
        <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
 
      <StudInfoSidebar selected="WorkSamples"/>
      <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-4">Work Samples</div>
                <div className="container rounded-2xl bg-purple bg-lightPurple min-w-full min-h-full p-8">
                    <form >
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-bold">Add your work sample links here if any:</label>
                            <label className="mb-4 font-medium">Blog Link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text'className="rounded-xl border border-purple w-96" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">Github Profile link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="text" className="rounded-xl border border-purple w-96"/>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">Playstore Developer Account Link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="text" className="rounded-xl border border-purple w-96"/>
                            </div>
                        </div>
                        
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">Behance Portfolio Link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="text" className="rounded-xl border border-purple w-96"/>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">Other Portfolio Link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="text" className="rounded-xl border border-purple w-96"/>
                            </div>
                        </div>
                        
    
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-4 justify-evenly">
                        <button type="submit" className=" bg-purple rounded-xl w-24 text-white">Next</button>
                        <button type="submit" className="  bg-purple rounded-xl w-24 text-white">Previous</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 
      
    )
}
export default WorkSamples;