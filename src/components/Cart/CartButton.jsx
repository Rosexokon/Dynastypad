import React, { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { IoIosWallet } from "react-icons/io";


const CartButton = ({ itemsInCart }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-sm bg-brand1 font-medium py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
        onClick={() => setShowCart(!showCart)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>
        {/* ({itemsInCart}) */}
      </button>
      {showCart && (
        <CartSlideOver
          itemsInCart={itemsInCart}
          onClose={() => setShowCart(false)}
        />
      )}
    </div>
  );
};

const CartSlideOver = ({ itemsInCart, onClose }) => {
  return (
    <div
      className="fixed top-0 right-0 h-full rounded-lg w-64 bg-white text-brand1 shadow-lg py-4 px-6 overflow-y-auto"
      style={{ transform: "translateY(50%)" }}
    >

      {itemsInCart === 0 ? (
        <p className="text-sm text-brand1">Your cart is empty.</p>
      ) : (
        <ul>
          {Array.from({ length: itemsInCart }, (_, i) => (
            <li key={i} className="text-sm text-brand1">
              Item {i + 1}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-start justify-between">
        <h2 className="text-lg font-bold border-b-full text-brand1">Shopping cart</h2>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <span className="sr-only">Close panel</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="border-t  text-center border-gray-300 pb-24 ">
        <button className="px-[25px] justify-center items-center py-[10px] text-white bg-brand1 hover:drop-shadow-md mt-24 rounded-full flex items-center gap-2">
          Connect wallet <IoIosWallet />
        </button>
      </div>
    </div>
  );
};

// const CartSlideOver = () => {
//   const [isOpen, setIsOpen] = useState(false);


//   return (
//     <div className="relative">
//       <button
//         className="bg-brand1 p-2 rounded-full text-Blue hover:text-gray-800 focus:outline-none focus:shadow-outline"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//           <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="fixed top-0 right-0 w-64 bg-white p-4 border border-gray-300 rounded-lg shadow-xl" style={{ transform: "translateY(50%)" }}>
//           <div className="font-medium text-brand1 text-lg mb-2 border-b">Shopping Cart</div>
//           <div className="overflow-y-scroll h-32">
//             <ul className="list-reset">
//               <li className="flex items-center mb-2">
//                 <div className="w-8 h-8 bg-brand1 text-brand1 rounded-full mr-2"></div>
//                 <div>Product 1</div>
//               </li>
//               <li className="flex items-center mb-2">
//                 <div className="w-8 h-8 bg-brand1 rounded-full mr-2"></div>
//                 <div>Product 2</div>
//               </li>
//               <li className="flex items-center mb-2">
//                 <div className="w-8 h-8 bg-brand1 rounded-full mr-2"></div>
//                 <div>Product 3</div>
//               </li>
//             </ul>
//           </div>
//           <div className="border-t justify-center items-center text-center border-gray-300 pt-2">
//             <button className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-full flex items-center gap-2">
//               Connect wallet <IoIosWallet />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default CartButton;
