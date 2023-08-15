import Navbar from '../components/navBar';
import {Link} from "react-router-dom"
import login from "../images/Signup.png"
import {useState,useEffect} from "react"

export default function SignIn () 
 {
  const [form, setForm] = useState({});
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [newUser, setNewUser] = useState("");

    

  const handleForm=(e)=>{   
          setForm({
            ...form,
            [e.target.name] : e.target.value  
          })
          
         // console.log(e.target.name," : ",e.target.value)
  }
  

  const handleSubmit= async (e)=>
  {
    e.preventDefault();
    if(form.password !== form.confirmPassword)
    {
      console.log("Passwords Do not match")
      setMessage("PASSWORDS DONT MATCH")
      return;
    }
    else{
      console.log("Passwords match")
      setMessage("Passwords match")
    }
    try {const data= await fetch("http://localhost:5000/demo",
    {
      method:"POST",
      body:JSON.stringify(form),
      headers:{"Content-Type":"application/json"}
    })
    const response= await data.json();
    setNewUser(response.message) 
  }
  catch(error)
  {
    console.error("404 ERROR HAS OCCURED")
  }}

  // const getForm= async (e)=>
  // {
  //   const data= await fetch("http://localhost:5000/demo",
  //   {
  //     method:"GET",
  //        })
  //   const response= await data.json();
 
  //       }

  // useEffect(()=>{
  //     getForm()
  // },[])
 
  return (<>
  <Navbar></Navbar>
   <div className="bg-[#EFF9FE] overflow-auto h-[600px] pt-[100px] max-h-full">
 
     
    <div className=" flex flex-row shadow-2xl ml-[180px] h-[430px] mr-[130px] bg-white ">
       <img src={login} className='-mt-[10px] h-[400px]' />
        <div className='pt-[30px]  w-[600px] mr-[30px]'>
      <div className='font-bold text-[30px] font-F4 mb-[3px]'>Welcome to my professional community</div>
      <div className='font-bold text-[30px] font-F4 mb-[28px] ml-[210px] '>SignUp</div>
      <form onSubmit={handleSubmit}>
            <input
              type="email"
             placeholder='Enter Email'
              required
              name="email"
              onChange={handleForm}
              className="w-full border-l-[46px] bg-[#F7F7F7] border-gray-300 mt-[7px] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              onChange={handleForm}
              className="w-full border-l-[46px] mt-[7px] bg-[#F7F7F7] border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              onChange={handleForm}
              className="w-full border-l-[46px] bg-[#F7F7F7] border-gray-300 mt-[7px] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
             <div>{message}</div>
             <div>{newUser} exists</div>

          <button
            type="submit"
            
            className="w-full bg-indigo-600  hover:bg-indigo-700 text-white rounded-lg px-4 py-2 font-semibold mt-4"
          >
           SignUp
          </button>

         
          <div className=' font-bold mt-[15px] ml-[100px]'>&nbsp; &nbsp; &nbsp; &nbsp;Have an account with Geometry ? 
           <Link to="/Login">
          <span className=' font-bold hover:text-indigo-600 '> &nbsp;Login</span>
          </Link></div>
        </form>
      </div> <div/> 
       </div>  </div>

{/* 
    <form className="ml-[300px] h-[200px] mt-[200px] mb-[200px] border-4 mr-[300px] border-green-500 " 
     onSubmit={handleSubmit}>
      
      <p>{JSON.stringify(form)}</p>
        <label className='block'>Name:</label>
     <input type="String" name="name"  onChange={handleForm} className=" border-2 border-red-600 "/>
      <label className='' >&nbsp;&nbsp;&nbsp;Age:</label>
     <input type="number" name="age"  min="0" max="50"  onChange={handleForm} className=" border-2 border-red-600 "/>
      <label className='block'>phone:</label>
     <input type="tel"  name="phone"  onChange={handleForm}  className=" border-2 border-red-600 "/>
      <label className=''>country:</label>
     <input type="String"  name="country"  onChange={handleForm} className=" border-2 border-red-600 "/>
      <button type="submit"  value="submit" className="block ml-[400px] bg-slate-600 w-[100px] mt-[30px]">Submit</button>
      </form> 


    <div className='h-[200px] bg-red-400'>
    <ul>
        {upsers.map(user=><li key={user._id}>{user.phone}</li>)}
  </ul> 
    </div>
       
        */}
    </>
  )
};
