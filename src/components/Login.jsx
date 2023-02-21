import React from 'react'

import { FaApple } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <div className=' h-screen bg-white pl-7  pr-7 flex flex-col'>
      <div className=' mt-[60px]'>
        <h1 className=' font-sora text-[#1f5460] text-[32px] font-normal '>Welcome back</h1>
        <p className=' text-[#879ea4] font-normal leading-5 mt-4 text-[16px]'>Enter your credential to continue</p>
      </div>
      <div className=' mt-10 flex flex-col'>
        <div className=' flex flex-col gap-9'>
          <input type="text" placeholder=' Email or username' className=' border-2 border-[#1F5460] outline-none p-3 w-full rounded-md' />
          <input type="password" placeholder='Enter password' className=' border-2 border-[#1F5460] outline-none p-3 w-full rounded-md' />
        </div>
        <div className=' flex flex-col gap-7'>
          <Link to="/forgot"  > <p className=' text-[#1f5460] text-xs font-normal font-sora float-right mt-7'>Forgot password?</p></Link>
          <Link to="login"><button className=' bg-[#FFCA42] w-full px-[15px] py-[15px]  rounded-[100px] text-lg font-bold text-[#1d3557]'>Login</button></Link>
          <Link to="login"><button className=' bg-black w-full px-[15px] py-[15px]  rounded-[100px] text-lg font-bold text-white flex align-middle justify-center gap-4'><FaApple /> Log in using Apple</button></Link>
          <Link to="login"><button className=' bg-[#f0f5f2] w-full px-[15px] py-[15px]  rounded-[100px] text-lg font-bold text-[#10405a] flex align-middle justify-center gap-4'><FaApple /> Log in using Google</button></Link>
        </div>

      </div>
      <Link to="/signup">
        <p className=' flex align-middle justify-center text-[#1f5460] leading-[18px] font-sora mt-28 mb-6'>Don't have an account? Signup</p>
      </Link>

      <Outlet />
    </div>
  )
}

export default Login