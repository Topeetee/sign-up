import React from 'react'

const Home = () => {
    return (
        <div className=' bg-[#1d3557] relative h-screen overflow-x-hidden'>
            <div className="head relative  p-6">
                <h1 className=' font-[sora] text-white font-semibold text-[24px]'>Speedah</h1>
                <div className=' absolute bg-[#FFCA42] w-[10px] h-[10px] left-[138px] rounded-full top-[48px]'></div>
            </div>
            <header className=' absolute'>
                <div className=' bg-[#A8C0A7] w-[320px] h-[320px] absolute rounded-full left-[230px] top-[-20px]'></div>
               <img src="" alt=""  className=' z-10'/>
            </header>
            <main className=' p-6 absolute top-[370px] flex flex-col w-full '>
                <div className=' flex flex-col  align-middle'>
                <h1 className=' font-[sora] leading-[120%] text-white font-normal text-5xl w-[254px]'>Let's get started</h1>
                <p className=' font-normal leading-5 text-center   text-white mt-4  text-lg'>Everything starts from here</p>
                </div>
                <div className=' w-full flex flex-col align-middle justify-center gap-[10px] '>
                    <button className=' bg-[#FFCA42] w-full px-[15px] py-[15px] mt-[30px] rounded-[100px] text-lg font-bold text-[#1d3557]'>Login</button>
                    <button className=' bg-[#D5E7D4] w-full px-[15px] py-[15px] mt-[20px] rounded-[100px] text-lg font-bold text-[#1d3557]'>Signup</button>
                </div>
            </main>
        </div>
    )
}

export default Home