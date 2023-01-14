import React from "react";
import './main.css'
import bgcard from '../../assets/images/card.png'

function HomeHero() {
  return (
    <div className="container">
      <div className="row header">
        <div className="col-lg-6 col-md-6 col-sm-12 p-8">
          <div className="font-[syne] header-text">
            <h1>Discover, Buy, Add and Curate <span className='text-[#4176FF]'>NFTs</span> Easily</h1>
            {/* <p>Join users who use DynastyPad, the #1 Curate-and-Earn Platform to buy NEAR nfts from one place, and earn rewards for curating.</p> */}
          </div>          
          <div className="header-btn mt-4">
            <button className='btn px-3 py-2 rounded-md '>Browse Collection</button>
            <button className='btn btn2 px-3 py-2 rounded-md '>Apply for Listing</button>
          </div>
        </div>
        <div className='header-img col-lg-6 col-md-6 col-sm-12 p-8'>
          <img src={bgcard} alt="" srcset="" width={500} />
        </div>
      </div>
      
    </div>
  );
}

export default HomeHero;
