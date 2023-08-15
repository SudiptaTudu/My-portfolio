import Navbar from "./navBar";
import blog from "../images/blog.webp"

export default function Blog()
{
    return(<>
        <Navbar></Navbar>
        <div className=" h-[400px] bg-black flex justify-center">
    <img src={blog} className='w-full opacity-50'/>
    <div className=" absolute z-[2] mt-[250px] text-[40px] text-white  font-F4">
             #Blogs
         </div>
     </div>

</>
    )
}