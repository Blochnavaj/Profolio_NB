import React from 'react'

function ContactMe() {
  return (
    <>
      <div className='mt-[3rem]'>
   
       {/* contact details  */} 
         <div className='md:pl-6'>
            <form action="" className='grid gap-5  px-3'>
            <input className='md:w-1/3 w-full  p-4 rounded-md border   focus:ring-gray-600 focus:outline-none focus:ring-2'  type="text" placeholder='Enter Your Name' />
            <input className='md:w-1/3  w-full p-4 rounded-md border   focus:ring-gray-600 focus:outline-none focus:ring-2' type="email" name="" placeholder='Enter your Email' />
            <textarea className='md:w-1/3 w-full p-4 rounded-md resize-none border   focus:ring-gray-600 focus:outline-none focus:ring-2' name="" id="" cols="6" rows="6" placeholder='How Can I Help You?'></textarea>
          <div>
          <button className='m-auto border px-3 py-2 text-xl hover:text-gray-600     transition-all duration-300 ease-linear rounded-lg bg-black text-white'>Get in Touch </button>
          </div>
            </form>

          </div>
         
      </div>
    </>
  )
}

export default ContactMe