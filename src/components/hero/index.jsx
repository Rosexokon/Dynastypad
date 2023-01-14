import React from "react";
import './main.css'
import bgcard from '../../assets/images/card.png'

function HomeHero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-[100px] flex text-[58px] text-center justify-center font-[700] ">
          <h1 className="max-w-[750px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Discover, Analyze, and Buy NEAR NFTs easily.</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
