import React from 'react'
// import {Link} from 'react-router-dom'
import { Link } from '@reach/router'

function NotFound() {
  return (
    <div className='flex items-center min-h-screen w-full justify-center '>
        <div className='bg-[#0404290d] rounded-[20px] px-[30px] md:px-[80px] py-[30px] md:py-[60px]  text-center'>
        <h1 className='font-[700] text-[70px] text-primary'>404</h1>
        <p className='text-primary font-[500] text-[30px]'>Page not found</p>
       <div className='mt-[10px] '>
       <Link to='/' className='text-primary font-[500] text-[15px]  bg-gray-300 rounded-[18px] flex items-center justify-center px-[5px] py-[5px]'>Go back to home</Link>
       </div>
        </div>

    </div>
  )
}

export default NotFound