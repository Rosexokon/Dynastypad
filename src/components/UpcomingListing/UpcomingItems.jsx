import React, { useState } from "react";
import { FaDiscord, FaGlobe,  FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";


function UpcomingItems({item}) {


  return (
        <div className="flex drop-shadow grid grid-col justify-center min-w-[250px] md:max-w-[270px] bg-[#FFFFFF] rounded-[20px]">
          <div>
            <div className="flex justify-center">
              <img src={item.image} alt="" onContextMenu={(e)=> e.preventDefault()}  className="h-60 min-w-[250px] md:max-w-[270px] rounded-t-xl object-center object-cover"/>
            </div>
          </div>
          <div className="font-[700] text-[#ffffff] text-[15px] mt-[-47px] p-3 w-full text-center bg-gradient-to-b from-transparent to-black ">
              {item.title}
          </div>
          <div className="mx-[20px] my-[10px]">
            <div className="flex items-center justify-between mt-[10px]">
              <div className="px-[10px] items-center">
                <h5 className="text-sm text-[#9f9f9f] font-[500]">Price </h5>
                <h5 className="text-sm text-[#00000] font-[500]">{item.floor}</h5>
              </div>
              <div className="px-[10px] items-center">
                <h5 className="text-sm text-[#9f9f9f] font-[500]">Total Supply</h5>
                <h5 className="text-sm text-[#00000] font-[500]">{item.total_supply}</h5>
              </div>
            </div>
            <div className="flex items-center justify-between mb-[5px]">
              <div className="mx-[10px] flex space-x-4 items-center mt-[10px]">
               <p className="text-[12px] font-[600]">12h 4m 20s</p>
              </div>
              <div className="mx-[10px] flex justify-center items-center p-2 w-24 mt-[10px] bg-[#4176FF] text-[#ffffff] hover:bg-[#040429] text-center rounded-md">
                <Link to={`/item/${item.id}`}><button className="text-xs "> View More </button></Link>
              </div>
            </div>
            
          </div>

        </div>
       
                
  );
}

export default UpcomingItems;
