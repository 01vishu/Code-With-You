import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-screen flex h-[80px] fixed z-10 drop-shadow-lg bg-zinc-200">
        <div className="px-2 justify-between items-center w-full h-full flex">
          <div className="item-center flex">
            <h1 className="text-lg font-bold flex mr-4 items-center sm:text-xl">
              CODE.WITH.YOU
            </h1>
            <ul className="hidden md:flex">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Support</li>
              <li className="cursor-pointer">Platforms</li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4">
              Sign In
            </button>
            <button className="px-2 py-3">Sign Up </button>
          </div>
          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
          </div>
        </div>
        <ul
          className={
            !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 top-16"
          }
        >
          <li className="border-b-2 border-zinc-200 w-full">Home</li>
          <li className="border-b-2 border-zinc-200 w-full">About</li>
          <li className="border-b-2 border-zinc-200 w-full">Support</li>
          <li className="border-b-2 border-zinc-200 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-200 w-full">Pricing</li>
          <div className="flex flex-col m-y-4">
            <button className="bg-transparent px-2 py-3 my-4 text-indigo-600">
              Sign In
            </button>
            <button className="px-2 py-3 bg-indigo-600 mb-4">Sign Up</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
