
import Navbar from '../components/navBar';
import {Link} from "react-router-dom"
import login from "../images/LOGIN.jpg"


export default function SignIn () 
 {
 
  return (<>
  <Navbar></Navbar>
  <div className="bg-[#EFF9FE] overflow-auto h-[600px] pt-[100px] max-h-full">
 
     
    <div className=" flex flex-row shadow-2xl ml-[200px] h-[400px] mr-[100px] bg-white ">
      {/*11*/} <img src={login} className='h-[400px] ' />
      {/*22*/}  <div className='pt-[30px]  w-[500px]'>
      {/*3*/} <div className='font-bold text-[30px] font-F4 mb-[30px] ml-[210px] '>Login</div>
            <input
              type="email"
             placeholder='Enter Email'
              required
              className="w-full border-l-[46px] bg-[#F7F7F7] border-gray-300 mt-[7px] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-full border-l-[46px] mt-[7px] bg-[#F7F7F7] border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

           
          <button
            type="submit"
            className="w-full bg-indigo-600  hover:bg-indigo-700 text-white rounded-lg px-4 py-2 font-semibold mt-4"
          >
           Login
          </button>

          <label  className="block text-gray-700 mt-[5px] ml-[20px] mr-[350px] hover:underline hover:underline-offset-1 hover:cursor-pointer">
            Forgot password?
            </label>

          <div className=' font-bold ml-[100px]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  New to Geometry ? 
           <Link to="/SignIn">
          <span className=' font-bold hover:text-indigo-600 '> &nbsp;SignUp</span>
          </Link></div>

      </div>
    </div>
 
    </div>         
    </>
  )
};
