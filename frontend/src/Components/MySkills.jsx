import React from 'react'

function MySkills() {
  return (
    <>
      <div>
        <div className='mt-5 flex justify-center items-center md:mt-[10rem]  '>
          <h1 className='text-4xl text-black font-light  '>My<span className='font-bold'>Skills</span> </h1>
        </div>

        <div className=' grid grid-cols-1 md:flex  md:justify-between md:items-center m-auto  '>
          {/* Frontend container */}
          <div className='md:w-[30rem]  m-4 mr-4 '>
            <div className=' mt-3 m-auto border border-black justify-center items-center   p-3  h-[20rem]    '>
              <h1 className='flex justify-center items-center text-4xl font-black'>Frontend</h1>
              <div className='grid grid-cols-3 mt-[2rem] md:grid-cols-3 justify-between items-center    '>
                <div className='grid justify-center items-center '>
                  <i class="fa-brands fa-html5 text-4xl grid  justify-center items-center"></i>
                  <p className='text-sm font-semibold grid  justify-center items-center'>HTML</p>

                </div>
                <div className='grid justify-center items-center '>
                <i class="fa-brands fa-css text-4xl  grid  justify-center items-center  "></i>
                <p className='text-sm font-semibold grid  justify-center items-center  '> CSS</p>
                </div>

              <div className='grid justify-center items-center '>
              <i class="fa-brands fa-js text-4xl  grid  justify-center items-center "></i>
                <p className='text-sm font-semibold grid  justify-center items-center   ' >Javascript</p>
              </div>

               <div className='grid justify-center items-center  mt-3'>
               <i class="fa-brands fa-react text-4xl grid  justify-center items-center "></i>
               <p className='text-sm font-semibold  grid  justify-center items-center '>ReactJs</p>
               </div>
              </div>
            </div>
          </div>
          {/* Backend container */}
          <div className='md:w-[30rem]  m-4 mr-4 '>
            <div className=' mt-3 m-auto border border-black justify-center items-center   p-3  h-[20rem]    '>
              <h1 className='flex justify-center items-center text-4xl font-black'>Frontend</h1>
              <div className='grid grid-cols-3 mt-[2rem] md:grid-cols-3 justify-between items-center    '>
                <div className='grid justify-center items-center '>
                  <i class="fa-brands fa-html5 text-4xl grid  justify-center items-center"></i>
                  <p className='text-sm font-semibold grid  justify-center items-center'>HTML</p>

                </div>
                <div className='grid justify-center items-center '>
                <i class="fa-brands fa-css text-4xl  grid  justify-center items-center  "></i>
                <p className='text-sm font-semibold grid  justify-center items-center  '> CSS</p>
                </div>

              <div className='grid justify-center items-center '>
              <i class="fa-brands fa-js text-4xl  grid  justify-center items-center "></i>
                <p className='text-sm font-semibold grid  justify-center items-center   ' >Javascript</p>
              </div>

               <div className='grid justify-center items-center  mt-3'>
               <i class="fa-brands fa-react text-4xl grid  justify-center items-center "></i>
               <p className='text-sm font-semibold  grid  justify-center items-center '>ReactJs</p>
               </div>
              </div>
            </div>
          </div>

          {/*Tools container  */}
         
          <div className='md:w-[30rem]  m-4 mr-4 '>
            <div className=' mt-3 m-auto border border-black justify-center items-center   p-3  h-[20rem]    '>
              <h1 className='flex justify-center items-center text-4xl font-black'>Frontend</h1>
              <div className='grid grid-cols-3 mt-[2rem] md:grid-cols-3 justify-between items-center    '>
                <div className='grid justify-center items-center '>
                  <i class="fa-brands fa-html5 text-4xl grid  justify-center items-center"></i>
                  <p className='text-sm font-semibold grid  justify-center items-center'>HTML</p>

                </div>
                <div className='grid justify-center items-center '>
                <i class="fa-brands fa-css text-4xl  grid  justify-center items-center  "></i>
                <p className='text-sm font-semibold grid  justify-center items-center  '> CSS</p>
                </div>

              <div className='grid justify-center items-center '>
              <i class="fa-brands fa-js text-4xl  grid  justify-center items-center "></i>
                <p className='text-sm font-semibold grid  justify-center items-center   ' >Javascript</p>
              </div>

               <div className='grid justify-center items-center  mt-3'>
               <i class="fa-brands fa-react text-4xl grid  justify-center items-center "></i>
               <p className='text-sm font-semibold  grid  justify-center items-center '>ReactJs</p>
               </div>
              </div>
            </div>
          </div>
        

        </div>


      </div>
    </>
  )
}

export default MySkills




{/* <div className='grid  grid-cols-2 md:grid-cols-5 items-center justify-center m-auto gap-y-[2rem] md:mt-[2rem]'>
         
         
          <div className=' mt-3 m-auto border border-black w-[91px] h-[91px] p-3 md:w-[115px] md:h-[115px] grid justify-center items-center'>
            <i class="fa-brands fa-node text-4xl grid justify-center items-center"></i>       
             <p className='text-sm font-semibold grid items-center justify-center'>NodeJS</p>
          </div>
          <div className=' mt-3 m-auto border border-black w-[91px] h-[91px] p-3 md:w-[115px] md:h-[115px] grid justify-center items-center'>
            <i class="fa-brands fa-git-alt text-4xl grid justify-center items-center"></i>
            <p className='text-sm font-semibold grid items-center justify-center'>Git</p>
          </div> */}