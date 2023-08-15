import React from 'react';
import Navbar from './navBar';
import IOCL2 from "../images/IOCL2.jpg"

const Project = () => {
 
  return (
    <>

    <Navbar></Navbar>
        <div className=" h-[400px] bg-black flex justify-center">
    <img src={IOCL2} alt="image should appear here " className='w-full opacity-50'/>
    <div className=" absolute z-[2] mt-[250px] text-[40px] text-white  font-F4">
             #Projects
         </div>
     </div>

    </>
  );
};

export default Project;
