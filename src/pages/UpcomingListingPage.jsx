import React from "react";
import { listData } from "../components/data/data";
import UpcomingItems from "../components/upcominglisting/UpcomingList";
import Navbar from "../components/Navbar/index";



function UpcomingListingPage() {


  return (
    <>
        <Navbar />
        <div className="px-[10px] md:py-[20px] md:mx-28 font-[grotesk]">
            <div className="mb-[10px]">
                <h1 className="text-[30px] md:text-[50px] font-[700] md:text-left">Upcoming Listing</h1>
            </div>

            <div className="">
                <div className="px-[10px] md:px-[0px]">
                <div className="w-full">
                    <div className="grid grid-cols-1 gap-4 py-[20px] px-[10px] sm:grid-cols-2 md:grid-cols-4 w-full ">
                    {listData.map((item) => (
                        <UpcomingItems item={item} key={item.id} />
                    ))} 
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default UpcomingListingPage;