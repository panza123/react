import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] max-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">AWIZY.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <IoIosMenu size={20} /> : <FiX size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Awizy</h1>
        <ul className="pt-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resource</li>
          <li className="p-4 border-b border-gray-600 ">Contact</li>
        </ul>
      </div>
    </div>
  );
}
