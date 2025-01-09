import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";




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
                <div className='grid justify-center items-center  mt-3' >
                  <RiNextjsFill className='text-4xl grid  justify-center items-center' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>NextJs</p>
                </div>

                <div className='grid justify-center items-center  mt-3' >
                  <TbBrandThreejs className='text-4xl grid  justify-center items-center' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>ThreeJs</p>
                </div>

                <div className='grid justify-center items-center  mt-3' >
                  <RiTailwindCssFill className='text-4xl grid  justify-center items-center ml-2' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>Tailwind</p>
                </div>
              </div>
            </div>
          </div>
          {/* Backend container */}
          <div className='md:w-[30rem]  m-4 mr-4 '>
            <div className=' mt-3 m-auto border border-black justify-center items-center   p-3  h-[20rem]    '>
              <h1 className='flex justify-center items-center text-4xl font-black'>Backend</h1>
              <div className='grid grid-cols-3 mt-[2rem] md:grid-cols-3 justify-between items-center    '>

                <div className='grid justify-center items-center  mt-3 ' >
                  <DiNodejs className='text-4xl grid  justify-center items-center ml-1' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>NodeJs</p>
                </div>

                <div className='grid justify-center items-center  mt-3 ' >
                  <SiExpress className='text-4xl grid  justify-center items-center ml-1' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>ExpressJs</p>
                </div>


                <div className='grid justify-center items-center  mt-3' >
                  <DiMongodb className='text-4xl grid  justify-center items-center ml-3' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>MongoDB</p>
                </div>

                <div className='grid justify-center items-center  mt-4 mr-2' >
                  <FaJava className='text-4xl grid  justify-center items-center' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>Java</p>
                </div>


              </div>
            </div>
          </div>
          {/*Tools container  */}

          <div className='md:w-[30rem]  m-4 mr-4 '>
            <div className=' mt-3 m-auto border border-black justify-center items-center   p-3  h-[20rem]    '>
              <h1 className='flex justify-center items-center text-4xl font-black'>Other Tools</h1>
              <div className='grid grid-cols-3 mt-[2rem] md:grid-cols-3 justify-between items-center    '>



                <div className='grid justify-center items-center  mt-3 ' >
                  <FaGit className='text-4xl grid  justify-center items-center ml-4' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>Git/GitHub</p>
                </div>

                <div className='grid justify-center items-center  mt-3' >
                  <VscVscode className='text-4xl grid  justify-center items-center ml-1' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>VsCode</p>
                </div>

                <div className='grid justify-center items-center  mt-3 ' >
                  <FaFigma className='text-4xl grid  justify-center items-center ' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>Figma</p>
                </div>

                <div className='grid justify-center items-center  mt-4 ' >
                  <IoLogoVercel className='text-4xl grid  justify-center items-center ' />
                  <p className='text-sm font-semibold  grid  justify-center items-center '>Vercel</p>
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