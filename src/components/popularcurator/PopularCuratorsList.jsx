import { Link } from "@reach/router";
import React from "react";
import { listData } from "../data/data";
import PopularCurators from ".";
// import { Link } from 'react-router-dom'


function PopularCuratorsList() {


  return (
    <div className="container mb-[40px]">
      <div className="mb-[10px] general-header">
        <h1 className="text-[30px] font-[600] font-[syne]">Popular Curators</h1>
        <Link to='/popularcurator'><button className="rounded">See all</button></Link>
      </div>

      <div className="">
        <div className="px-[10px] md:px-[0px]">
          <div className="w-full">
            <div className="overflow-auto scrollbar-hide flex flex-cols-4 gap-1 space-x-8 md:space-x-5 py-[20px] px-[10px] sm:flex-cols-3 md:flex-cols-4 md:gap-8 w-full ">
              {listData.map((item) => (
                <PopularCurators item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCuratorsList;