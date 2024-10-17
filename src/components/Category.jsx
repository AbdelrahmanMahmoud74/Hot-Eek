import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

function cateogry() {
  return (
    <div className='mt-32'>
      <h1 className='text-[#D38521] font-bold ml-14 text-2xl'>Categories</h1>
      <div className='mt-5 ml-16'>
        <img className='w-32' src="https://s3-alpha-sig.figma.com/img/2d03/cfcd/c1de93b6f102c0eea332c3458883cace?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAVlV2zp51-tNMASVoKRLpcOtAxx3~XHRQDmxn3eXt~-Qjk1iX~vcVEz02Aj3nX0W6XgctU7P166k4LQ2gQjrXog6yZWkjcUCUP4LXvwIKEzoZH8~nK9dFpGeY72wlKfcuEE3wsbNASbCMLvBlCf9b5d4VnXui748-76jekDbFwud-6jxX4EgjMtPArkHd4Gxu6RYKszsE50y5-bvwBSrcIQ2ImF-3-YdfLBeJZjoW47F6iky4UGwFY3BweyV6eZkeaMF0kUSG5ihEE5dPRi8aHz6ld9F2W0llKW9T4O65mFKVo8kFizWBy~TwwU8KIar6VM3UMXXl7lXwmkjTWCjQ__" alt="" />
        <span style={{display:'flex',alignItems:'center'}} className='text-[#fff] bg-[#e9a64e] w-32 h-8 pl-1 '>CookWare<FaArrowRight style={{marginLeft:'30px'}} /></span>
      </div>
    </div>
  )
}

export default cateogry 
