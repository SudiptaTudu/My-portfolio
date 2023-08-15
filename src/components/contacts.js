import { useState,useEffect } from 'react';
import Navbar from './navBar';
import Contactme from "../images/contact.jpg"
import office from "../images/office.jpg"

import instagram from "../images/instagram.jpg"
import linkdin from "../images/linkdin.jpg"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import tick from "../images/tickmark.mp4"
import {Link} from "react-router-dom"
import twitter from "../images/twitter.jpg"

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  
  const sendEmail= (e) => {
    e.preventDefault()
    emailjs.sendForm('service_pkwred9', 'template_z8hg1gu', form.current, 'QgH0W4j-J2_W3TClH')
      .then((result) => {
          console.log(result.text);
          setStatusMessage("Message has been sent successfully");
          form.current.reset();
          setShowMessage(true);
          setTimeout(() => {
          setShowMessage(false);
            }, 4000);

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
   
    <Navbar ></Navbar>
    <div className=" h-[400px] bg-black flex justify-center">
    <img src={Contactme} className='w-full opacity-50'/>
    <div className=" absolute z-[2] mt-[250px] text-[40px] text-white  font-F4">
             #Contact Me
         </div>
     </div>
 
 <div className='bg-[#edede9] flex flex-row pt-[50px]'>
  <div className=" ml-[100px] mt-[70px] h-[290px] w-[480px]">
    <img src={office}  className="h-[300px] block w-[480px] shadow-2xl blur-[0.7px]" alt="image should appear here"/>
     <div className="text-[13px] mt-[20px] mr-[10px]">Looking for more information? or want to collab with me on projects related to websites for startups/organisation/group.
         Submit your information and Geometry representative will follow up with you as soon as possible.What would you like to discuss?
         Cover all your basics points in the message section.
     </div>
  
  </div>

 <div className="bg-[#fefeff] w-[600px] mb-[40px]  h-[650px] rounded-[4px] shadow-2xl">    
  <div className="font-F4 ml-[200px] mt-[30px] mb-[30px] text-[20px] font-bold">Let's work Together</div>
                  
        <form className="mt-[4px] mr-[10px] ml-[10px] " 
      // onSubmit={()=>{this.handleSubmit(handlesubmit)}} 
       onSubmit={sendEmail} ref={form} >

          <label className="font-medium "> First Name:<span className='text-red-600'>*</span> 
          <input type="text" required placeholder='Enter First name' name="from_first_name" className=" border-r-[8px] focus:ring-2 focus:border-blue-800 border-l-[8px] ml-[10px] mb-[10px] focus:outline-none border-[#52525b]  focus:border-[1.5px] bg-[#F7F7F7] rounded-[4px] pl-[10px] font-F4 font-thin  pt-[3px] pb-[3px]" />
          </label>

          <label className="font-medium ml-[10px]"> Last Name:
          <input type="text"  placeholder='Enter Last name' name="from_last_name" className=" border-[#52525b] border-l-[8px] m-[10px] bg-[#F7F7F7] border-r-[8px] rounded-[4px] pl-[10px] font-F4 font-thin focus:outline-none focus:ring-2 focus:border-blue-800 focus:border-[1.5px] ml-[5px] pt-[3px] pb-[3px]" />
          </label>

          <label className="font-medium "> Email:<span className='text-red-600'>*</span> &nbsp;
          <input type="email" required name="from_email"  placeholder='Enter email ' className="bg-[#F7F7F7]  border-[#52525b] border-r-[8px] border-l-[8px] mt-[10px] w-[200px]  rounded-[4px] pl-[10px] focus:outline-none focus:ring-2 focus:border-blue-800 focus:border-[1.5px] font-F4 font-thin ml-[5px] pt-[3px] pb-[3px]" />
          </label>

          <label className="font-medium ml-[12px]"> Country:<span className='text-red-600'>*</span> &nbsp;
          <input type="text" required name="from_country" placeholder='Enter Country' className="border-[#52525b] border-r-[8px] border-l-[8px] mt-[10px] w-[200px] focus:outline-none focus:ring-2 focus:border-blue-800 focus:border-[1.5px] bg-[#F7F7F7] rounded-[4px] pl-[10px] font-F4 font-thin ml-[5px] pt-[3px] pb-[3px]" />
          </label>

          <label className="font-medium block"> Phone No.:<span className='text-red-600'>*</span> &nbsp;
          <input type="tel" required name="from_phone" placeholder='Enter phone number' className=" border-[#52525b] border-l-[8px] border-r-[8px] mt-[20px] w-[200px] bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:border-blue-800 focus:border-[1.5px] rounded-[4px] pl-[10px] font-F4 font-thin ml-[5px] pt-[3px] pb-[3px]" />
          </label>

          <label className="font-medium mt-[20px] block"> Message: <span className='text-[13px] text-red-600'>*(max limit 250 words)</span>
          <textarea required maxLength={250} minLength={0} name="message" placeholder='Enter your Message here. Max limit 250 words' className="border-[#52525b] border-r-[8px] border-l-[8px] resize-none block mt-[10px] w-[550px] h-[250px] focus:outline-none focus:ring-2 focus:border-blue-800 focus:border-[2px] bg-[#F7F7F7] rounded-[4px] pl-[10px] font-F4 font-thin ml-[15px] pt-[3px] pb-[3px]" />
          </label>

          <button type="submit" value="send" className="mt-[15px] pb-[10px] pt-[10px] rounded-full w-full text-fuchsia-50 font-medium bg-slate-600" >Submit</button>
       
        </form>

   
        {showMessage && <div className="font-F4 ml-[200px] mt-[10px] text-green-600 font-medium">
        <video src={tick}  autoPlay loop muted className='h-[26px] w-[56px] inline'/>{statusMessage}</div>}
{/*     
 <div  className="font-F4 ml-[200px] mt-[10px] text-green-600 font-medium"> 
 Your message will appear here
   </div> */}
     </div>   

    </div>

<div className="flex flex-col justify-center items-center font-F4 h-[300px] text-white bg-black">
        <div className='text-[19px]  '>
           Want to visit me on person?
        </div>
        <div className='text-[15px] mt-[20px]'>
          Ganganagar House 303, Dewas ,MP . &nbsp; PIN :455001
        </div>
        <div className=' text-[19px] mt-[20px]'>
          Visit my social media account </div>
          <div className="flex flex-row">
          
          <Link to="https://www.instagram.com/nit_wala_babu">
          <img src={instagram} alt="Image should appear here" className='h-[60px] w-[80px] text-white'/>     
          </Link> 

          <Link to="https://twitter.com/SudiptaTudu3990">
          <img src={twitter} alt="Image should appear here" className='h-[60px] w-[60px] text-white'/>  
          </Link>

          <Link to="https://www.instagram.com/nit_wala_babu/">
            <img src={linkdin} alt="Image should appear here" className='h-[55px] w-[55px] text-white'/>
            </Link></div>
        
        </div>
    </>
  );
};

export default Contact;
