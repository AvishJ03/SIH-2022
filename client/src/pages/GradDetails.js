import Sidebar from "../components/Sidebar"

const GradDetails = () => {
  return (
    <div className='bg-purple w-full h-screen flex font-main'>
        <Sidebar selected="Dashboard" />
        <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-4">Graduation Details</div>
                <div className="container rounded-2xl bg-purple bg-lightPurple min-w-full min-h-full p-8">
                    <form>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="font-medium">Graduation Status*:</label>
                            <div className="justify-around">
                                <div className="flex flex-row flex-wrap">
                                    <input type="radio" id = "radio1" name = "radio1" value="radio1"/>
                                    <label className="font-medium">Pursuing</label> &nbsp;&nbsp;
                                    <input type="radio" id = "radio2" name = "radio2" value="radio2"/>
                                    <label className="font-medium">Completed</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <div className="flex flex-row flex-wrap">
                                <label className="mb-4 font-medium">Start Year*:<br/>
                                <input type='text' name='startyear' className="rounded-xl border border-purple w-48" />
                                </label>&nbsp;&nbsp;
                                <label className="mb-4 font-medium">End Year*:<br/>
                                <input type='text' name='startyear' className="rounded-xl border border-purple w-48" />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <div className="flex flex-row flex-wrap">
                                <label className="mb-4 font-medium">Degree*:<br/>
                                <input type='text' name='startyear' className="rounded-xl border border-purple w-48" />
                                </label>&nbsp;&nbsp;
                                <label className="mb-4 font-medium">Stream*:<br/>
                                <input type='text' name='startyear' className="rounded-xl border border-purple w-48" />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <div className="flex flex-row flex-wrap">
                                <label className="mb-4 font-medium">Performance Scale:<br/>
                                <input type='text' name='startyear' className="rounded-xl border border-purple w-48" />
                                </label>&nbsp;&nbsp;
                                <label className="mb-4 font-medium">Performance:<br/>
                                <input type='text' name='startyear' className="rounded-xl border border-purple w-48" />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-4">
                            <button type="submit" className="flex-reverse align bg-purple rounded-xl w-24 text-white">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GradDetails;