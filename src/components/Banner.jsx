import React from 'react'

const Banner = () => {
  return (
    <>
     <div className=" bg-[#DAF6EB] flex justify-between items-center px-40 py-20 mt-10">
      <div className="left">
        <h1 className='text-2xl mb-20'>Empower Your Team <br/><span className='text-4xl font-bold'>With CoreWave's</span></h1>
        <p className='mb-20'>Boost Productivity and Wellness in Your Organization with <br/> CoreWave's Advanced Tools and Techniques</p>
        <div className="btn">
        <button className='px-10 py-3 border rounded-2xl text-xl font-bold bg-[#06C279] text-white hover:text-black hover:bg-white'>Explore More</button>
        <button className='px-10 py-3 border-[#06C279] border-2 rounded-2xl text-xl font-bold hover:bg-[#06C279] text-black hover:text-white bg-white'>Watch Vedio</button>
        </div>
      </div>
      <div className="right">
         <a href=''>
        <img src='src/assets/Banner_Image.png' alt=''/>
      </a>
      </div>
    </div>
    </>
  )
}

export default Banner
