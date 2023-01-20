import React from "react";
import { FaHeart } from "react-icons/fa";
import Logo from "../../assets/images/dynasty.svg";

function Footer() {
  return (
    <div className="pb-[10px]">
      <div className="container my-[50px]">
        <div className="flex flex-col rounded-[20px] gap-[30px] items-center border border-[#757575] py-[50px]">
          <a href="https://dynastypad.com/" class="flex items-center">
            <img src={Logo} class="h-8 mr-3" alt="Dynastypad Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dynastypad</span>
          </a>
          <div>
            <p className="m-0 text-center text-[16px] font-[400] max-w-[300px] ">The best aggregator and go-to platform for all NEAR NFTs.</p>
          </div>
          <div>
            <p className="flex items-center gap-[5px]">Built with <FaHeart /> by <a href='/' className="text-brand4">Mintyplex</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
