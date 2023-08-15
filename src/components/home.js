import React from "react";
import LogoVideo from "../components/multimedia/LogoV1.mp4";
import Navbar from "./navBar";
import Typewriter from 'typewriter-effect';


export default function Home()
{
   return(
      <div>
   
      <Navbar className="z-50"></Navbar>
    <video src={LogoVideo} autoPlay loop muted className=" absolute w-full h-auto z-0 "/>
    
    <div className="absolute m-[100px]  font-bold text-black text-[100px] flex flex-2">

    <div className="flex flex-col">
         <h1 className="relative text-white font-F5 text-[50px]"> Hello World !
         </h1>
         <h1 className="relative flex flex-row text-white  font-F5 text-[50px]">This is&nbsp;
{/*
<Typewriter
  onInit={(typewriter) => {
   
    typewriter.typeString('Sudipta Tudu.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })

      typewriter.typeString("a web developer.")
      .pauseFor(2000)
      .deleteAll()

      typewriter.typeString("an NITian")
      .pauseFor(2000)
      .deleteAll()

      typewriter.typeString("Sudipta Tudu")
      typewriter.loop()
      .start();
  }
  }
/>*/}

<Typewriter
  options={{
    strings: ['Sudipta Tudu.', "a web developer.","an NITian",],
    deleteSpeed:200,
    autoStart: true,
    loop: true,
  }}
/>

 </h1>
    </div>
    </div>
    </div>
    
    
   )
}