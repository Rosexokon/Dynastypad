import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "@reach/router";


function ListItem({ item }) {


  return (
    <div className="flex gap-[10px] flex-col justify-center min-w-[300px] p-[15px] bg-[#1C1C1C] rounded-[10px] text-[#fff]">
      <div>
        <img src={item.image} alt="" onContextMenu={(e) => e.preventDefault()} className="h-[200px] w-full rounded-[10px] object-center object-cover" />
      </div>
      <div className="flex items-center justify-between font-[700] text-[18px]">
        {item.title}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[3px]">
          <p>Last price</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <FaDiscord />
            49
          </div>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p>Current price</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <FaDiscord />
            49
          </div>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p>Number</p>
          <p className="font-[600]">#2312</p>
        </div>
      </div>
      <Link to={`/item/${item.id}`}>
        <div className="p-[10px] text-center font-[600] bg-brand1 rounded-[10px] hover:bg-brand4 ">
          Buy now
        </div>
      </Link>
    </div>


  );
}

export default ListItem;
