import React from 'react'

const Header = (props) => {
  return (
    <div className='bg-[#F2F2F2] justify-between flex mt-auto mb-auto max-w-7xl rounded-tl-[100px]'>
        <div className='flex'>
        {/* Enter icon over here */}
            <i className="fa-solid fa-arrow-left mt-3 pr-2"></i>
            <h1 className='font-[Raleway] text-[30px]'>{props.heading}</h1>
        </div>
        <div className='bg-[#D9D9D9] rounded-[100px] pb-4 pr-40 pt-4 pl-2 font-[Dosis] text-[#808080] '>Search Something here...</div>
        <div className='flex m-4'>
            <div className='flex mr-16 '>
                <div className='rounded-[100px] mr-8'><i className="fa-solid fa-bell"></i></div>
                <div className='rounded-[100px] mr-8'><i className="fa-solid fa-bell"></i></div>
                <div className='rounded-[100px] mr-8'><i className="fa-solid fa-bell"></i></div>
            </div>
            <h4 className='font-[Raleway] text-[15px]'>{props.user}</h4>
        </div>
    </div>
  )
}

export default Header