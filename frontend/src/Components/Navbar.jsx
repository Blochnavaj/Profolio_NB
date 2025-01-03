import React, { useState } from 'react'

function Navbar() {

  const [nav, setNav] = useState(false)

  const toggleNav = () =>{
     setNav(!nav)
  }

  return (
    <>
      <div className='flex md:justify-between   items-center  mt-4 m-3    '>
        <div className='ml-6 '>
          <h1 className='text-3xl font-semibold text-black hover:text-blue-500 cursor-pointer '>NAVAJ</h1>
        </div>

        <div className='hidden md:flex '>
          <ul className='flex gap-5 list-none'>
            <a href="#" className=''>
              <li className='text-black font-semibold hover:text-blue-500    '>About Me</li>
            </a>
            <a href="#">
              <li className='text-black font-semibold   hover:text-blue-500  '> Skills</li>
            </a>
            <a href="#">
              <li className='text-black font-semibold  hover:text-blue-500   '> Project</li>
            </a>
            <a href="#">
              <li className='text-black font-semibold hover:text-blue-500   '> Contact Me </li>
            </a>
          </ul>
        </div>

        <div className=' '>
          <div className='hidden md:flex' >
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md font-semibold w-full transition duration-200 ease-in-out active:scale-90'> Resume </button>
          </div>
          <div onClick={toggleNav} className=' right-8  top-6 absolute md:hidden '>
           {
            nav ?  <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>
           }
          </div>
        </div>


 
           
         {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden bg-black mt-[4rem] w-2/3 m-auto absolute top-0 left-0 py-6 px-4 right-0 flex justify-center items-center">
          <ul className="flex flex-col gap-3 list-none  ">
            <a href="#" className='border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center'  >
              <li className="text-white font-semibold">About Me</li>
            </a>
            <a href="#" className='border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center '  >
              <li className="text-white font-semibold">Skills</li>
            </a>
            <a href="#" className='border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center '  >
              <li className="text-white font-semibold">Projects</li>
            </a>
            <a href="#"  className='border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center ' >
              <li className="text-white font-semibold">Contact Me</li>
            </a>
            <a href="#"   >
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold w-full transition duration-200 ease-in-out active:scale-90">
                Resume
              </button>
            </a>
          </ul>
        </div>
      )}

      </div>
    </>
  )
}

export default Navbar