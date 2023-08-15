import {Link} from "react-router-dom"

const Navbar = () => {

  return (
    <>
   
   <div class="bg-transparent  p-4 fixed top-0 left-0 right-0 z-10">
      <Link to="/" className="flex-none ">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6637e866158243.5b0cfa603eb3f.png"
      alt="image is missing"
      className=" inline place-self-start h-[55px] text-[14px]"></img>
      <div className="inline text-[14px] ">GEOMETRY </div>
      </Link>

      <Link to="/Login"className="hover:text-pink-500 ml-[6px] hover:border-b-2 
       text-[14px] inline font-bold cursor-pointer items-center 
      justify-center  hover:border-red-500"> Login
      </Link>
      {" |"}
      <Link to="/SignIn"className="hover:text-pink-500 ml-[6px] hover:border-b-2 hover:border-red-500
       mr=[300px] text-[14px] inline font-bold cursor-pointer items-center 
      justify-center">SignUp
      </Link>
      
  
  
   <div className="font-bold text-black text-[14px] w-full h-55 inline ml-[650px] justify-end items-center">
    <Link to="/about" className="  hover:text-pink-500 hover:border-red-500 cursor-pointer  hover:border-b-2 mr-[9px]  "> {"<"}About{">"}</Link>
    <Link to="/blogs" className=" mr-[9px]  hover:border-b-2  hover:border-red-500 hover:text-pink-500 "> {"<"}Blogs{">"}</Link>
    <Link to="/projects" className=" mr-[9px] hover:border-b-2 hover:border-red-500 hover:text-pink-500"> {"<"}Projects{">"}</Link>
    <Link to="/contacts" className=" mr-[8px]  hover:border-b-2 hover:border-red-500 hover:text-pink-500 "> {"<"}Contacts{">"}</Link>
    </div>
   
    </div> 

    </>
  )
}

export default Navbar