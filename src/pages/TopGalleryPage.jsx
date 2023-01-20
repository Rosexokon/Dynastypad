import React, { useState } from "react";
import Footer from '../components/Footer/index'
import Navbar from "../components/Navbar/index";
import { listData } from "../components/data/data";
import GalleryItems from "../components/TopGallery/Topgallery";


function TopGalleryPage() {

    const [search, setSearch] = useState('');

  return (
    <>
        <Navbar />
        <div className="container mb-12">
            <div className="my-[30px] general-header">
                <h1 className="text-[30px] font-[700] font-[syne]">Top Gallery</h1>
                <input type="search" name="search" placeholder='search' id="" onClick={e=> setSearch(e.target.value)} />
            </div>
            
            <div className="">
                <div className='cardlist'>
                {listData.filter(item=>item.title.toLowerCase().includes(search)).map((item) => (
                    <GalleryItems item={item} key={item.id} />
                ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default TopGalleryPage;