import React from 'react';
import StudInfoSidebar from "../../components/StudInfoSidebar";

const Skills=() =>{
    return(
        <div className="bg-[#40189D] w-full min-h-screen h-full flex font-ourfont">
 
      <StudInfoSidebar selected="Skills"/>
      <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-4">Skills</div>
                <div className="container rounded-2xl bg-purple bg-lightPurple min-w-full min-h-full p-16 shadow-main-sd">
                    <form >
                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <label className="mb-2 font-medium">What Skills Do you have?</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text' name='graduation' className="rounded-xl border border-purple w-96" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <label className="mb-2 font-medium">How would you rate yourself?(on a scale of 1 to 5)</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="range" min="1" max="5" className="accent-purple"/>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <label className="mb-2 font-medium">What Skills Do you have?</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text' name='graduation' className="rounded-xl border border-purple w-96" />
                            </div>
                        </div>
                        
                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <label className="mb-2 font-medium">How would you rate yourself?(on a scale of 1 to 5)</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="range" min="1" max="5" className="accent-purple"/>
                            </div>
                        </div>
                        
    
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-[3.75rem] justify-evenly">
                        <button type="submit" className=" bg-purple rounded-xl text-white p-3 px-11">Next</button>
                        <button type="submit" className="  bg-purple rounded-xl text-white p-3 px-7">Previous</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 
      
    )
}
export default Skills;