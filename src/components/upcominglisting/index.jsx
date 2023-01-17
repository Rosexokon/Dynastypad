import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "@reach/router";


function UpcomingItems({ item }) {


  return (
    <div className="flex gap-[10px] flex-col justify-center min-w-[300px] p-[15px] border-[0.1px] border-[#757575] rounded-[10px] text-[#fff]">
      <div>
        <img src={item.image} alt="" onContextMenu={(e) => e.preventDefault()} className="h-[200px] w-full rounded-[10px] object-center object-cover" />
      </div>
      <div className="flex items-center justify-between font-[700] text-[18px]">
        {item.title}
      </div>
      <div className="flex items-center justify-between font-[500] text-[16px] w-[260px]">
        {item.content}
      </div>
      <div className="flex items-center gap-[15px] justify-start">
        <div className="flex flex-col gap-[3px]">
          <p>Floor price</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <FaDiscord />
            49
          </div>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p>Volume</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <FaDiscord />
            49
          </div>
        </div>
      </div>
      <Link to={`/item/${item.id}`}>
        <div className="p-[10px] text-center font-[600] bg-brand1 rounded-[10px] hover:bg-brand4 ">
          View collection
        </div>
      </Link>
    </div>
  );
}

export default UpcomingItems;
