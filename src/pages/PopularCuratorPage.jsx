import React, { useState } from "react";
import { listData } from "../components/data/data";
import Footer from '../components/Footer/index'
import Navbar from "../components/Navbar/index";
import PopularCurators from "../components/popularcurator/PopularCuratorsList";


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