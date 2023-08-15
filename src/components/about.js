import React from 'react';
import Navbar from './navBar';
import Lottie from "lottie-react"

import ani1 from "../animation/homepage.json"
import image7 from "../images/imager7.jpg"

import css from "../images/basiccss.webp"
import imagejs from "../images/javascript.png"
import imagehtml from "../images/html.png"
import tailwind from "../images/tailwind.png"

import reactjs from "../images/reactjs.webp"
import nodejs from "../images/nodejs.jpg"
import mongodb from "../images/mongodb.jpg"
import expressjs from "../images/expressjs.webp"

import image6 from "../images/imager6.jpg"

import cpp from "../images/cpp.webp"
import redux from "../images/redux.jpg"
import jwt from "../images/JWT.png"
import restapi from "../images/restapi.webp"
 

import Typewriter from 'typewriter-effect';
import DotAnimation from '../textanimation/ani1';

import {Link} from "react-router-dom"
import ParallaxText from '../textanimation/an2';

const About = () => {

  const defaultoptions={
    autoplay:true,
    loop:true,
    animationdata:ani1,
    rendererSettings:{
      preserveAspectRatio:"xMidYMid Slice"
    }
  };

  return (
    <>
    <div className='bg-black h-[470px]'>
      <img src={image7} alt ="Image has to appear here" className='
      rounded-bl-[20px] rounded-br-[20px]  w-full inline-block opacity-70  h-[450px] '/>
      </div>
 

<Navbar className="mr-[78px] ml-[60px]"></Navbar>

 <div className="absolute z-[5] mx-auto h-60">

                   {/* <div class=" relative flex ml-[590px] cursor-pointer -mt-[260px] w-[120px] h-[120px] animate-spin rounded-full p-6 outline-dotted outline-2 outline-gray-500">
                     */}  

                    <div className='relative  text-white ml-[572px] -mt-[170px] font-F5 text-[45px]'>
                      #Hello!</div><div className='relative  text-white ml-[540px] mt-[0px] font-F5 text-[25px]'> I am Sudipta Tudu
                    
             
</div> 

</div>

{/* 1 */}
<div className="bg-slate-800 -mt-[20px]">
  <div className=" ml-[580px] pt-[80px] text-white font-F4 text-[25px]">#About me</div>
  <div className="flex flex-row ml-[70px] mr-[50px]">
  <div>
      <img src={image6} alt="Image has to apper here" className='border-b-8 mt-[40px]
      -mb-[168px] h-[500px] rounded-tr-[23px] rounded-tl-[23px] w-[1550px] shadow-xl shadow-black flex-[1/2] mr-[2px]
         '/>
            </div>

  <section className="-mt-[50px]
  flex-[1/2] pt-[100px] ml-[90px]  text-[16px]  h-[530px] font-F4 text-[#e8dad9] ">
"Hello there! I'm Sudipta Tudu, a passionate and dedicated web developer 
based in Dewas, Madhya Pradesh. With a firm grounding in computer science and a penchant for creativity,
 I'm currently honing my skills as a student at NIT DURGAPUR.
 <br/> <br/>At the age of 23, I've already immersed myself in the world of web development, with expertise spanning
  HTML, TailwindCSS, ReactJS, Redux and many more. My journey in this field has been one of continuous learning and growth,
   and I'm excited to bring my technical prowess and innovative thinking to the forefront of every project.
    Through my dedication and commitment to crafting elegant and functional digital experiences.<br/><br/>
     I aspire to contribute positively to the ever-evolving landscape of the web.
 Join me on this journey as we transform ideas into captivating online realities."
      </section>
     
      
      </div>
      </div>

    {/* 2 */}  
<div className=" bg-[#26487e] h-[800px] ">
  <div className=" ml-[580px] pt-[80px] text-white font-F4 font-bold text-[25px]">
    #My Skills</div>
<div className='flex flex-row  '>
  {/*Column1 */}
  <div className="mr-[100px] ml-[200px] mt-[40px] flex flex-col">
    
    <div className="h-[150px] w-[150px] mt-[10px] bg-cyan-600 rounded-full shadow-xl shadow-black  ">
    <img src={imagehtml} alt="Image should appear here" className=" h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
      </div>

    <div className="h-[150px] w-[150px] mt-[50px] bg-slate-600 rounded-full shadow-xl shadow-black">
    <img src={mongodb} alt="Image should appear here" className=" h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    <div className="flex justify-center font-F5 text-green-500 align-middle mt-[10px]">M
    </div> </div>
    
    <div className="h-[150px] w-[150px] bg-pink-500 rounded-full mt-[50px] shadow-xl shadow-black">
    <img src={cpp} alt="Image should appear here" className="h-[65px] w-[200px] mt-[20px]  rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    </div>
    </div>

     {/*column2*/}
  <div className="mr-[100px] mt-[40px] flex flex-col ">
    
    <div className="h-[150px] w-[150px] mt-[10px] bg-green-800 rounded-full shadow-xl shadow-black">
    <img src={css} alt="Image should appear here" className=" h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    </div>

    <div className="h-[150px] w-[150px] mt-[50px] bg-slate-600 rounded-full shadow-xl shadow-black">
    <img src={expressjs} alt="Image should appear here" className=" mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    <div className="flex justify-center font-F5 text-green-500 align-middle mt-[10px]">E
    </div> </div>
    
    <div className="h-[150px] w-[150px] bg-blue-500 rounded-full mt-[50px] shadow-xl shadow-black">
    <img src={redux} alt="Image should appear here" className=" h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    </div>

    </div>

    
     {/*column3 */}
  <div className="mr-[100px] mt-[40px] flex flex-col  ">
    
    <div className="h-[150px] w-[150px] mt-[10px] bg-red-600 rounded-full shadow-xl shadow-black">
    <img src={tailwind} alt="Image should appear here" className=" h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    </div>

    <div className="h-[150px] w-[150px] mt-[50px] bg-slate-600 rounded-full shadow-xl shadow-black">
    <img src={reactjs} alt="Image should appear here" className="mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>

    <div className="flex justify-center font-F5 text-green-500 align-middle mt-[10px]">R
    </div> </div>
    
    <div className="h-[150px] w-[150px] rounded-full mt-[50px] bg-yellow-400 shadow-xl shadow-black">
    <img src={jwt} alt="Image should appear here" className="h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    </div>

    </div>

         {/*row4*/}
  <div className="mr-[200px] mt-[40px] flex flex-col ">
    
    <div className="h-[150px] w-[150px] mt-[10px] bg-violet-500 rounded-full shadow-xl shadow-black">
    <img src={imagejs} alt="Image should appear here" className=" h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    </div>

    <div className="h-[150px] w-[150px] mt-[50px] bg-slate-600 rounded-full shadow-xl shadow-black">
    <img src={nodejs} alt="Image should appear here" className=" h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    <div className="flex justify-center font-F5 text-green-500 align-middle mt-[10px]">N
    </div> </div>
    
    <div className="h-[150px] w-[150px] rounded-full bg-orange-500 mt-[50px] shadow-xl shadow-black">
    <img src={restapi} alt="Image should appear here" className="h-[65px] w-[200px] mt-[20px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] shadow-xl shadow-black"/>
    </div>

    </div>

    </div>
    </div>
      
    <div className="bg-[#659DBD] h-[400px] font-F4 text-[87px]  font-bold">
      
      <div className="ml-11 mr-11">DID YOU LIKE MY WORK ?</div>
      <div className="ml-[60px] mr-[60px] text-[20px]">Do you wish to colaborate with me for
       future project or want to hire me !! &nbsp;&nbsp;
       <Link to="/contacts">
       <button className='rounded-full bg-red-400 text-[20px] hover:bg-pink-600'> 
       Click here</button>

       </Link>

       <Lottie ani={ani1} height="89px" />

       </div>
          </div>

      </>
  );
};

export default About;
