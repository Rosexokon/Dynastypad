import React, { useState } from "react";
import { FaDiscord, FaGlobe,  FaTwitter } from "react-icons/fa";
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";


function ListItem({item}) {

  const [thumbs, setThumbs] = useState(false);
  const handleLike = () => {
    setThumbs(!thumbs);
  };

  return (
      <Link to={`/item/${item.id}`}>
        <div className="flex shadow-lg font-[grotesk] flex-col justify-center w-full min-w-[250px] md:max-w-[270px] bg-[#FFFFFF] rounded-[20px] shadow">
          <div>
            <div>
              <img src={item.image} alt="" onContextMenu={(e)=> e.preventDefault()} className="h-48 w-full rounded-t-xl object-center object-cover"/>
            </div>
          </div>
          <div className="px-[20px] py-[10px]">
            <div className="flex items-center justify-between my-[5px]">
              <div className="font-[700] text-[#030202] text-[15px]">
               {item.title}
              </div>
              <div></div>
            </div>
            <div className="pb-[12px]">
              <p className="text-[12px] font-[600] text-[#030202] text-left">
                {" "}
              {item.content}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-[#E8E8FB] ">
              <div className="px-[10px] flex space-x-4 items-center pt-[10px] pb-[15px]">
               <a href={item.socials.website} target='_blank' rel="noreferrer"><FaGlobe className="text-[#4176FF] text-[18px]" /></a>
                <FaTwitter className="text-[#4176FF] text-[19px]" />
                <FaDiscord className="text-[#4176FF] text-[20px]" />
              </div>
              <div className="flex items-center space-x-3">
                <FiThumbsUp
                  className={`${
                    thumbs ? "text-[#FFA500]" : "text-gray-400"
                  } cursor-pointer text-[20px]`}
                  onClick={handleLike}
                />
                <FiThumbsDown className="text-[20px]  " />
              </div>
            </div>
          </div>

        </div>
       
      </Link>
                
  );
}

export default ListItem;
