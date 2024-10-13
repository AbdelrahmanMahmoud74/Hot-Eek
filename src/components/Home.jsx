import React from 'react'
import Header from './Header'
// import Category from './Category'
import { Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <>
  <Header />

    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-8  ">
      <div className="text-center  md:text-left md:mr-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0A75E] ">
          Upgrade Your Kitchen with  
        </h1>
       <h1 className='text-3xl font-bold mb-4 text-[#E0A75E]'>Our Stylish & Functional</h1>
       <h1 className='text-3xl font-bold mb-4 text-[#E0A75E]'>Accessories</h1>
       <button className='bg-[#D38521] text-[#fff] w-24 h-10 mt-5 rounded-md'>Shop Now</button>

      </div>

      
    
        <img 
          src="https://s3-alpha-sig.figma.com/img/ead5/fa94/b58accefbb9a2be7daf93d7bc1ed3f4a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9RSUBWNbxoYx7loJ5lkJSx8OtumNLTPQGQqlREUrNJSZJhhLTTPdTWKMyb4-O4yusH7bgWmAPvCp-beUtkXheYxfUTKHtq59sCRXAoRQvNqXLRJipRlu2vJ0wKr0yjMB3FriEIiZrs~arEZoxzvfpBj94Av5a~a7znGnu5hZTYnJASX0c4VT2N2VmBLogGWJmui~4R5Hd9EmZerorapWj9TR5WWXoXIyYuC9KPERbmRiKnJEujCTq2CWGkinTHoet7Bu6z~s612mmS~jeMZOx49YGbMqpDL4Tzmj2d9G~3AXWOcwmWOi79ibEXJCw-ksRGXMnM4yLCzF5am4M3ycA__" 
          alt="Kitchen Accessories" 
          className="w-3/5 h-auto  "
        />
       
   
    </div>
  <Outlet />
    </>

  )
}
