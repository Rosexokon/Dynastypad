import { Link } from '@reach/router';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/images/dynasty.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      id:1,
      name: "Home",
      link: "/",
    },
    {
      id:2,
      name: "Trending Collections",
      link: "/trending",
    },
    {
      id:3,
      name: "Upcoming Listings",
      link: "/upcoming",
    },
    {
      id:4,
      name: "Join the Community",
      link: "/community",
    },
  ]
  return (
   <div  className='w-full flex flex-col lg:flex-row items-center justify-between bg-[#FFFFFF] lg:p-[15px_30px]   lg:space-x-20 relative'>
    <div className='w-full lg:w-fit flex items-center justify-between lg:justify-start  p-[15px] lg:p-0'>
      <p className='font-grotesk text-[#4176FF] font-[700] text-[24px]'>DynastyPad</p>
      {
        isOpen ? <FaTimes onClick={()=> setIsOpen(!isOpen)} className='lg:hidden text-[#4176FF] text-[24px]' /> : <FaBars onClick={()=> setIsOpen(!isOpen)} className='lg:hidden text-[#4176FF] text-[24px]' />
      }
    </div>
    <div className={`${ isOpen ? 'left-0' : 'left-[-100%] lg:left-0'} fixed top-0 transition-all lg:relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-center w-[70%] lg:w-full bg-gray-50 lg:bg-transparent h-screen lg:h-fit p-[30px_15px] lg:p-0 z-20`}>
    <div className='flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6'>
      {
        navLinks.map(({id,name, link})=> (
          <Link to={link} key={id} className='outline-none font-grotesk font-[500] text-[18px] text-[#04042A]'>{name}</Link>
        ))
      }
    </div>
    <div className='flex flex-col lg:flex-row items-center mt-[30px] lg:m-0 space-y-6 lg:space-y-0 lg:space-x-6'>
      <button className='border border-[#4176FF] text-[#4176FF] text-[16px] font-grotesk h-[48px] w-[160px] flex items-center justify-center '>Apply For Lisiting</button>
      <button className=' bg-[#4176FF] text-[#FFFFFF] text-[16px] font-grotesk h-[48px] w-[160px] flex items-center justify-center'>Connect Wallet</button>
    </div>
    </div>
   </div> 
  )
}

export default Navbar