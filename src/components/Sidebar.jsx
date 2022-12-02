import React, { useState } from "react";
// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-primary-900 flex-col justify-between h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 pt-20 duration-300 ${showMenu ? "left-0" : "-left-full"
          }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center text-center p-8 gap-2 h-[30vh]">
          <img
            src="thais.jpg"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">Thais de Paula Oliveira</h1>
          <p className="bg-primary-100 py-2 my-4 px-4 rounded-full text-white">
            Pro level
          </p>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <p className="text-gray-400">Having troubles?</p>
            <a href="#">Contact us</a>
          </div>
        </div>
        {/* Nav */}
        <div className="flex justify-center mt-80">
          <img
            src="logoBank.svg"
            className="w-20 h-20 object-cover"
          />
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
