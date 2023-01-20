import React from "react";
import { FaDiscord, FaGlobe, FaTwitter, FaCopyright } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Logo from "../../assets/images/dynasty.svg";

function Footer() {
  return (
    <div className="bg-black py-8">
     
        <div className="footer col-12">
          <a href="https://dynastypad.com/" class="flex items-center mb-4 sm:mb-0">
            <img src={Logo} class="h-8 mr-3" alt="Dynastypad Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dynastypad</span>
          </a>
          <form action="" method="get">
            <h2 className="text-3xl">Sign up for our newsletter so you don't miss any updates.</h2>
            {/* <div className="footer-item">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                id=""
              />
              <button>
                <IoIosSend size={24} />
              </button>
            </div> */}
          </form>
          <div className="footer-icon">
            <FaDiscord size={25} className="mr-4" />
            <FaTwitter size={25} className="mr-4" />
            <FaGlobe size={25} className="mr-4" />
          </div>
          <div className="section-comp">
            <FaCopyright /> <span>Built with by <a>Mintyplex</a></span>
          </div>
        </div>
      
    </div>
  );
}

export default Footer;
