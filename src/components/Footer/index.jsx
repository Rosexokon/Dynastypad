import React from "react";
import { FaDiscord, FaGlobe, FaTwitter, FaCopyright } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Logo from "../../assets/images/dynasty.svg";

function Footer() {
  return (
    <div className="bg-[#f3f3f3] py-8">
      <div className="container">
        <div className="footer col-12">
          <img src={Logo} alt="" srcset="" />
          <form action="" method="get">
            <h2>Sign up for our newsletter so you don't miss any updates.</h2>
            <div className="footer-item">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                id=""
              />
              <button>
                <IoIosSend size={24} />
              </button>
            </div>
          </form>
          <div className="footer-icon">
            <FaDiscord size={25} className="mr-4" />
            <FaTwitter size={25} className="mr-4" />
            <FaGlobe size={25} className="mr-4" />
          </div>
          <div className="section-comp">
            <FaCopyright /> <span>Copyright2022, Mintyplex.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
