import React, { useState } from "react";
import { listData1 } from "../data1";
import Footer from '../components/Main/Footer'
import HotItems from '../components/HotItems/HotItems'
import Navbar from "../components/Navbar";


function HotItemPage() {

    const [search, setSearch] = useState('');

  return (
    <>
        <Navbar />
        <div className="container mb-12">
            <div className="my-[30px] general-header">
                <h1 className="text-[30px] font-[700] font-[syne]">Hot Items</h1>
                <input type="search" name="search" placeholder='search' id="" onClick={e=> setSearch(e.target.value)} />
            </div>
            
            <div className="">
                <div className='cardlist'>
                {listData1.filter(token=>token.title.toLowerCase().includes(search)).map((token) => (
                    <HotItems token={token} key={token.id} />
                ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default HotItemPage;