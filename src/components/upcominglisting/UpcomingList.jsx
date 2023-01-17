import React from "react";
import { listData } from "../data/data";
import UpcomingItems from ".";
import { RxDashboard } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "@reach/router";


function FeaturedCollection() {


  return (
    <div className="container my-[50px] flex flex-col gap-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[20px] text-[#fff]">
          <div className='p-[5px] bg-brand7 text-brand8 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center'>
            <RxDashboard size='20px' />
          </div>
          <h1 className="text-[28px] font-[600]">Featured Collections</h1>
        </div>
        <Link to='/'>
          <div className="text-[#757575] hover:text-[#fff]">
            <FaArrowRight size='20px' />
          </div>
        </Link>
      </div>

      <div className="">
        <div className="px-[10px] md:px-[0px]">
          <div className="w-full">
            <div className="flex-wrap flex flex-cols-4 gap-1 justify-between py-[20px] px-[10px] sm:flex-cols-3 md:flex-cols-4 md:gap-8 w-full ">
              {listData.map((item) => (
                <UpcomingItems item={item} key={item.id} />
              ))} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollection;