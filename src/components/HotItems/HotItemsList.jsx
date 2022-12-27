import React from "react";
import { listData1 } from "../../data1";
import HotItems from "./HotItems";
// import { Link } from 'react-router-dom'
import { Link } from "@reach/router";


function HotItemsList() {


  return (
    <div className="container mb-[40px]">
      <div className="mb-[10px] general-header">
        <h1 className="text-[30px] font-[600] font-[syne]">Hot Items</h1>
        <Link to='/hotitems'><button className="btn">See all</button></Link>
      </div>

      <div className="">
        <div className="px-[10px] md:px-[0px]">
          <div className="w-full">
            <div className="overflow-auto scrollbar-hide flex flex-cols-4 gap-1 space-x-8 md:space-x-5 py-[20px] px-[10px] sm:flex-cols-3 md:flex-cols-4 md:gap-8 w-full ">
              {listData1.map((token) => (
                <HotItems token={token} key={token.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotItemsList;