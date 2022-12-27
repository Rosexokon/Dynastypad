import React, { useState } from "react";
// import { Link } from "react-router-dom";
import profile from '../../images/profile.svg'
import { BsFillPatchCheckFill, BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "@reach/router";


function PopularCurators({item}) {

  return (
      <div className="flex flex-col justify-center min-w-[250px] bg-[#FFFFFF] rounded-[20px] drop-shadow scaling">
        <div>
          <div className="justify-center">
            <img src={item.image} alt="" onContextMenu={(e)=> e.preventDefault()}  className="h-48 w-full rounded-t-xl object-center object-cover"/>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="mt-[-60px]">
              <div className="justify-center flex">
                  <img src={profile} onContextMenu={(e)=> e.preventDefault()} width='80px' />
              </div>
              <div className="flex justify-between items-center flex-col mb-[12px]">
                <div className="flex justify-center items-center">
                  <h1 className="text-[18px] font-[700] pr-2 text-[#000]">{item.title}</h1>
                  <div className="text-[#4176FF]"><BsFillPatchCheckFill /></div>
                </div>
                <div className="flex text-[14px] justify-center font-[600] follower">
                  <p>{item.followers}</p>
                </div>
                <Link to={`/item/${item.id}`}>
                  <div className="flex justify-center items-center p-2 w-24 bg-[#4176FF] text-[#ffffff] hover:bg-[#040429] text-center rounded-md">
                    <BsFillPlusCircleFill />
                    <button className="text-xs pl-2 flex items-center">Follow </button>
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </div>               
  );
}

export default PopularCurators;
