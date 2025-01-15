import React from 'react'

function ContactMe() {
  return (
    <>
      <div className='mt-[3rem] md:flex md:justify-around p-4'>

        {/* contact details  */}
        <div className='md:pl-6'>
          <form action="" className='grid gap-5  px-3'>
            <input className='md:w-[28rem] w-full  p-4 rounded-md border   focus:ring-gray-600 focus:outline-none focus:ring-2' type="text" placeholder='Enter Your Name' required />
            <input className='md:w-full  w-full p-4 rounded-md border   focus:ring-gray-600 focus:outline-none focus:ring-2' type="email" name="" placeholder='Enter your Email' required />
            <textarea className='md:w-full w-full p-4 rounded-md resize-none border   focus:ring-gray-600 focus:outline-none focus:ring-2' name="" id="" cols="6" rows="6" placeholder='How Can I Help You?' required></textarea>
          </form>

          <div className='md:flex  md:items-center md:justify-center md:mr-9'>
            <button className='m-auto border  ml-4 px-4  py-3 md:px-3 md:py-2 text-xl hover:text-gray-600  mt-3    transition-all duration-300 ease-linear rounded-lg bg-black text-white'>Get in Touch </button>

            <div className='flex gap-5  mb-2     text-4xl md:flex md:justify-center md:items-center     mt-4' >
              <a href="#" className=' border px-4  rounded-md  py-2  flex justify-center items-center  border-black hover:bg-black hover:text-white '>
                <i class="fa-brands fa-facebook text-lg"></i>                   
                 </a>

              <a href="#" className='border px-4  py-2 rounded-md flex justify-center items-center border-black hover:bg-black hover:text-white '>
                <i class="fa-brands fa-linkedin text-lg"></i>
              </a>

              <a href="#" className='border px-4  py-2 rounded-md  flex justify-center items-center border-black hover:bg-black hover:text-white'>
                <i class="fa-brands fa-github text-lg"></i>

              </a>

              <a href="#" className='border px-4  py-2 rounded-md flex justify-center items-center border-black hover:bg-black hover:text-white '>
                <i class="fa-brands fa-square-x-twitter text-lg"></i>
              </a>


            </div>
          </div>

        </div>

        {/* my detailed  */}

        <div className=' space-y-4'>
          <p className='text-6xl font-bold'>Let's <span className='special-font'>Talk</span> For</p>
          <p className='text-6xl font-bold'>Something special</p>
          <p className='text-zinc-500 font-light text-sm '>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
          <p className='font-bold text-3xl'>Youremail@gmail.com</p>
          <p className='font-bold text-3xl'>123456789</p>
        </div>
      </div>
    </>
  )
}

export default ContactMe