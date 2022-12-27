import React, { useState } from "react";
import { listData } from "../data";
import PopularCurators from "../components/PopularCurators/PopularCurators";
import Footer from '../components/Main/Footer'
import Navbar from "../components/Navbar";


function PopularCuratorPage() {

    const [search, setSearch] = useState('');

  return (
    <>
        <Navbar />
        <div className="container mb-12">
            <div className="my-[30px] general-header">
                <h1 className="text-[30px] font-[700] font-[syne]">Popular Curator</h1>
                <input type="search" name="search" placeholder='search' id="" onClick={e=> setSearch(e.target.value)} />
            </div>
            
            <div className="">
                <div className='cardlist'>
                {listData.filter(item=>item.title.toLowerCase().includes(search)).map((item) => (
                    <PopularCurators item={item} key={item.id} />
                ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default PopularCuratorPage;