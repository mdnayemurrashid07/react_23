import React from 'react'

const Projects = () => {
  return (
    <div>
      <div>
        <h1 className='text-5xl font-bold text-center mt-10 mb-10'>Our Latest Project</h1>
        <ul className='flex justify-center items-center gap-20 text-xl mt-10 mb-10'>
            <li className='text-[#7B7B7B] hover:text-[#06C279] cursor-pointer'>Mobile App</li>
            <li className='text-[#7B7B7B] hover:text-[#06C279] cursor-pointer'>Web Development</li>
            <li className='text-[#7B7B7B] hover:text-[#06C279] cursor-pointer'>UI/UX Design</li>
            <li className='text-[#7B7B7B] hover:text-[#06C279] cursor-pointer'>Graphic Design</li>
            <li className='text-[#7B7B7B] hover:text-[#06C279] cursor-pointer'>Motion Graphic</li>
        </ul>
        <div className='py-1 bg-black'></div>
      </div>
      <div className='flex justify-between items-center'>
        <div className="div_1">
        <a href=''>
            <img src='src/assets/Rectangle-1.png' alt='Rectangle-1'/>
        </a>
        <h1>Portfolio Landing Page</h1>
        <p>Web development is the art of creating engaging and visually appealing websites </p>
      </div>
      <div className="div_2">
        <a href=''>
            <img src='src/assets/Rectangle-2.png' alt='Rectangle-1'/>
        </a>
        <h1>Plant Landing Page</h1>
        <p>Web development is the art of creating engaging and visually appealing websites </p>
      </div>
      <div className="div_3">
        <a href=''>
            <img src='src/assets/Rectangle-3.png' alt='Rectangle-1'/>
        </a>
        <h1>Real Estate Landing Page</h1>
        <p>Web development is the art of creating engaging and visually appealing websites </p>
      </div>
      </div>
      <button className='px-3 py-5 bg-[#06C279] text-white hover:bg-white hover:text-black font-bold rounded-2xl'>View All Products</button>
    </div>
  )
}

export default Projects
 