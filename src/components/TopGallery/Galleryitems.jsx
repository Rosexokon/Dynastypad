import React, { useState } from "react";
// import { Link } from "react-router-dom";
import profile from '../../images/profile.svg'
import { BsFillPatchCheckFill, BsFillPlusCircleFill } from "react-icons/bs";
import { FaStar } from 'react-icons/fa'
import { Link } from "@reach/router";


function GalleryItems({item}) {


  return (
      <Link to={`/item/${item.id}`}>
        <div className="flex flex-col justify-center w-full w-[250px] bg-[#FFFFFF] rounded-[20px] drop-shadow scaling">
          <div>
            <div className="justify-center">
              <img src={item.image} alt="" onContextMenu={(e)=> e.preventDefault()}  className="h-48 w-full rounded-t-xl object-center object-cover"/>
            </div>
          </div>
          <div className="px-[20px] py-[12px]">
            <div className="">
              <div className="text-[#030202] flex justify-between items-center">
                <img src={profile} onContextMenu={(e)=> e.preventDefault()} width='60px' />
                <div className="">
                  <div className="flex items-center">
                    <h1 className="text-[18px] font-[700] pr-2">Sadiq Gallery</h1>
                    <div className="text-[#4176FF]"><BsFillPatchCheckFill /></div>
                  </div>
                  <div className="flex text-xs items-center justify-between items-details font-[600]">
                    <p className="">362 items</p>
                    <p><FaStar size={16} /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
       
                
  );
}

export default GalleryItems;
