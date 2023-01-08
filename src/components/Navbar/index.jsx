import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/dynasty.svg";
import UAuth from "@uauth/js";

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
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Trending",
      link: "/trending",
    },
    {
      id: 3,
      name: "Upcoming",
      link: "/upcoming",
    },
    // {
    //   id:4,
    //   name: "Join the Community",
    //   link: "/community",
    // },
  ];
  return (
    <div className="container">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-[#FFFFFF] lg:p-[15px_30px]   lg:space-x-20 relative">
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-start  p-[15px] lg:p-0">
          {/* <p className='font-grotesk text-[#4176FF] font-[700] text-[24px]'>DynastyPad</p> */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-medium text-[#4176FF] dark:text-blue-100"
          >
            <img src={Logo} alt="logo" className="w-10 h-10" />
          </Link>
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#4176FF] text-[24px]"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#4176FF] text-[24px]"
            />
          )}
        </div>
        <div
          className={`${
            isOpen ? "left-0 z-50" : "left-[-100%] lg:left-0"
          } fixed top-0 transition-all lg:relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-center w-[70%] lg:w-full bg-gray-50 lg:bg-transparent h-screen lg:h-fit p-[30px_15px] lg:p-0`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
            {navLinks.map(({ id, name, link }) => (
              <Link
                to={link}
                key={id}
                className="font-grotesk font-[500] text-[16px] text-[#04042A]"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-[30px] lg:m-0 space-y-6 lg:space-y-0 lg:space-x-6">
            <button className="px-3 py-2 font-[grotesk] border-[#4176FF] border-[1px] text-[#4176FF] bg-[#fff] btnwlt rounded-md">
              Apply For Lisiting
            </button>

            {connectedAddress ? (
              <div className="flex gap-2">
                <button className="text-[#4176FF] font-[600] ">
                  {connectedAddress.length > 0 &&
                    `${connectedAddress.substring(
                      0,
                      5
                    )}...${connectedAddress.substring(12)}`}
                </button>
                <div onClick={logout}>
                  <button className="px-3 py-2 font-[grotesk] text-white bg-[#4176FF] btnwlt hover:drop-shadow-md rounded-md md:ml-5">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div onClick={login}>
                <button className="px-3 py-2 font-[grotesk] text-white bg-[#4176FF] btnwlt hover:drop-shadow-md rounded-md ">
                  Connect wallet
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
