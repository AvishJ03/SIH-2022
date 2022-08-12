import Sidebar from "../../components/Sidebar"

const EducationInfo = () => {
  return (
    <div className='bg-purple w-full h-screen flex font-main'>
        <Sidebar selected="Dashboard" />
        <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-4">Education Information</div>
                <div className="container rounded-2xl bg-purple bg-lightPurple min-w-full min-h-full p-8">
                    <form >
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">Graduation:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text' name='graduation' className="rounded-xl border border-purple w-96" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">XII (Senior Secondary ):</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text' name='seniorsecondary' className="rounded-xl border border-purple w-96" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">X (Secondary ):</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text' name='secondary' className="rounded-xl border border-purple w-96" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-4 font-medium">Diploma:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text' name='diploma' className="rounded-xl border border-purple w-96" />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-4">
                            <button type="submit" className="flex-reverse align bg-purple rounded-xl w-24 text-white">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EducationInfo;