import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/dynasty.svg";
import UAuth from "@uauth/js";
import { IoIosWallet } from "react-icons/io";
import CartButton from "../Cart/CartButton";

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
    <div className="container bg-[#1C1E1E4D]">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:p-[15px_0px] lg:space-x-20 relative text-white">
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-start  p-[15px_10px] lg:p-0">
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


        <div className='hidden  lg:flex items-center space-x-[50px]'>
          <div>
            <Link to='/discover' className='font-[500] text-[16px] font-syne'>Discover</Link>
          </div>
          <form className='flex items-center space-x-[20px] p-[8px_11px] w-[400px] border bg-[#1C1E1E4D] rounded-[40px] ' >
            <button type="submit"><FaSearch /></button>
            <input type="text" className=" outline-none bg-[#1C1E1E4D] w-full placeholder:text-center text-[#BFBFC0] placeholder:text-[#BFBFC0] placeholder:font-syne" placeholder="Search for NFT Collections" />
          </form>
          <div>
            <Link to='/featured' className='font-[500] text-[16px] font-syne  '>Featured</Link>
          </div>
        </div>


        <div className={`${isOpen ? 'left-0' : 'left-[-100%]'} fixed bg-[#ffffff]  lg:hidden h-screen flex flex-col space-y-[30px] z-30 w-full p-[20px] transition-all`}>
          <button onClick={() => setIsOpen(false)} className='w-full flex items-center justify-end'>
            <FaTimes className='text-brand1 text-[35px]' />
          </button>
          <div className='flex flex-col space-y-[30px] items-center'>
            <div>
              <Link to='/discover' className='font-[500] text-[18px] font-syne text-brand1'>Discover</Link>
            </div>
            <form className='hidden lg:flex items-center space-x-[20px] p-[8px_11px] w-[400px] border bg-[#1C1E1E4D] rounded-[40px] ' >
              <button type="submit"><FaSearch /></button>
              <input type="text" className=" outline-none bg-[#1C1E1E4D] w-full placeholder:text-center text-[#BFBFC0] placeholder:text-[#BFBFC0] placeholder:font-syne" placeholder="Search for NFT Collections" />
            </form>
            <div>
              <Link to='/featured' className='font-[500] text-[18px] font-syne  text-brand1 '>Featured</Link>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 force'>
            <CartButton />

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
        {/* <div
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
          <div>
          <div class="relative">
            <input type="text" id="password" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 bg-none rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..."/>
            <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-white focus:outline-none hover:text-brand1 transition-colors"><FaSearch/></button>
          </div>
          </div>
        </div> */}
        <div className='hidden lg:flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 force'>
          <CartButton />
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
