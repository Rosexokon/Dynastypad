import React from "react";
import ListItem from "../components/RecentListing/ListItem";
import Navbar from "../components/Navbar";
import { listData } from "../data";


function RecentListingPage() {


  return (
    <>
        <Navbar />
        <div className="px-[10px] font-[grotesk] md:mx-28 py-[20px] md:py-[20px] font-poppins">
        <div className="mb-[10px]">
            <h1 className="text-[30px] md:text-[50px] font-[700] md:text-left">Recent Listing</h1>
        </div>

        <div className="">
            <div className="px-[10px] md:px-[0px]">
            <div className="w-full">
                <div className="grid grid-cols-1 gap-4 py-[20px] px-[10px] sm:grid-cols-2 md:grid-cols-4 w-full ">
                {listData.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default RecentListingPage;