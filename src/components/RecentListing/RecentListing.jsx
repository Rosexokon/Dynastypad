import React from "react";
import ListItem from "./ListItem";
import { listData } from "../../data";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";


function RecentListing() {


  return (
    <div className="px-[10px] font-[grotesk] md:mx-28 py-[20px] md:py-[20px] font-poppins">
      <div className="mb-[10px]">
        <h1 className="text-[30px]  font-[600] md:text-left">Recent Listing</h1>
      </div>

      <div className="">
        <div className="px-[10px] md:px-[0px]">
          <div className="w-full">
            <div className="overflow-auto scrollbar-hide flex flex-cols-4 gap-1 space-x-8 md:space-x-5 py-[20px] px-[10px] sm:flex-cols-3 md:flex-cols-4 md:gap-8 w-full ">
              {listData.map((item) => (
                <ListItem item={item} key={item.id} />
              ))}
            </div>
            <div className="mt-2 flex justify-center items-center">
                <Link to='/recent'><button className="bg-[#4176FF] hover:bg-[#040429] text-white m-2 rounded-lg px-8 py-3">View more</button></Link>
                {/* <button className="border-[#4176FF] border-2 text-[#4176FF] hover:bg-[#040429] hover:text-white hover:border-none m-2 rounded-lg px-10 py-3">Apply for listing</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentListing;