import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/dynasty.svg";
import UAuth from "@uauth/js";
import { IoIosWallet } from "react-icons/io";

const useLocalStorage = (storageKey, fallbackState) => {
  const [connectedUser, setConnectedUser] = useState(
    localStorage.getItem("user") ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, connectedUser);
  }, [connectedUser, storageKey]);

  return [connectedUser, setConnectedUser];
};

function Navbar() {
  // Connect wallet function

  // const [connectedAddress, setConnectedAddress] = useState('');
  const [connectedAddress, setConnectedAddress] = useLocalStorage("user", "");

  // UAth login function is set here

  const uauth = new UAuth({
    clientID: "f196fade-1a56-49d3-9bf0-74a50e34674d",
    redirectUri: "http://localhost:3000",
    // redirectUri: "https://www.dynastypad.com/",
    scope: "openid wallet",
  });

  // Logout
  const logout = async () => {
    await uauth.logout();

    console.log("Logged out with Unstoppable");

    setConnectedAddress("");
  };

  // Sign in Modal
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup();
      const domainName = authorization.idToken.sub;
      // const walletAddress = authorization.idToken.wallet_address;

      console.log("Logged in with Unstoppable");

      setConnectedAddress(domainName);
    } catch (error) {
      console.error(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      id: 1,
      name: "Discover",
      link: "/",
    },
    {
      id: 2,
      name: "Featured",
      link: "/trending",
    },
    // {
    //   id: 3,
    //   name: "Upcoming",
    //   link: "/upcoming",
    // },
    // {
    //   id:4,
    //   name: "Join the Community",
    //   link: "/community",
    // },
  ];
  return (
    <div className="container">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:p-[15px_0px] lg:space-x-20 relative text-white">
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-start  p-[15px] lg:p-0">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-10 h-10" />
          </Link>
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brand1 text-[24px]"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brand1 text-[24px]"
            />
          )}
        </div>
        <div
          className={`${
            isOpen ? "left-0 z-50 w-[70%] bg-bg-dark" : "left-[-100%] lg:left-0"
          } fixed top-0 transition-all-0.1s lg:relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-center bg-gray-50 lg:bg-transparent h-screen lg:h-fit p-[30px_15px] lg:p-0 force`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
            {navLinks.map(({ id, name, link }) => (
              <Link
                to={link}
                key={id}
                className="font-[500] text-[16px] text-white"
              >
                {name}
              </Link>
            ))}
          </div>
             {/* Search button */}
          <div class="w-[250px] flex items-center justify-between w-full p-[10px_20px] border-[0.7px] text-white border-[#757575] bg-bg-dark rounded-full focus:outline-none">
            <input type="search" id="" className="bg-bg-dark" placeholder="Search for NFT Collections"/>
            <button className="block text-center text-xl absolute left-[90%] text-white focus:outline-none hover:text-brand1 transition-colors"><FaSearch/></button>
          </div>
        </div>
        <div className={`${isOpen ? 'z-50 mt-[80px] lg:mt-0 mr-[212px]' : "left-[-100%] lg:block  hidden lg:left-0"} flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 force`}>
            {connectedAddress ? (
              <button
                onClick={logout}
                className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-full flex items-center gap-2"
              >
                {connectedAddress.length > 0 &&
                  `${connectedAddress.substring(
                    0,
                    5
                  )}...${connectedAddress.substring(12)}`}
              </button>
            ) : (
              <button
                onClick={login}
                className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-full flex items-center gap-2"
              >
                Connect wallet <IoIosWallet />
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
