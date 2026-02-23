import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center mx-auto max-w-[1220px] mt-5'>
      <a href='/'>
        <img src='src/assets/Logo.png' alt='Logo'/>
      </a>
      <ul className=' flex justify-between items-center gap-10'>
        <li href="#" className='text-xl font-bold hover:text-[#06C279] cursor-pointer'>Home</li>
        <li href="#"className='text-xl font-bold hover:text-[#06C279] cursor-pointer'>About</li>
        <li href="#"className='text-xl font-bold hover:text-[#06C279] cursor-pointer'>Portfolio</li>
        <li href="#"className='text-xl font-bold hover:text-[#06C279] cursor-pointer'>Service</li>
        <li href="#"className='text-xl font-bold hover:text-[#06C279] cursor-pointer'>Blog</li>
        <li href="#"className='text-xl font-bold hover:text-[#06C279] cursor-pointer'>Testimonial</li>
      </ul>
      <button className='px-10 py-3 border rounded-2xl text-xl font-bold bg-[#06C279] text-white hover:text-black hover:bg-white'>Register</button>
    </div>
    </div>
  )
}

export default Navbar
