import { Link } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "../../assets/Search.jpg"
import React from "react";

export const Navbar = () => {

  return (
    <>
       <nav className="fixed top-0 items-center border-amber-400 left-0 right-0 h-20 bg-amber-200 text-amber-500">
        <div className="flex justify-between items-center relative h-full px-8">
          <Link to="/" className="font-semibold text-2xl py-5">
            멋사몰🐯
          </Link>
          <div className="flex shadow-lg items-stretch bg-amber-100 rounded-md overflow-hidden">
           <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-[430px] px-4 py-2 rounded-1-md bg-amber-100 text-gray-800 focus:outline-none"/>
            <button
            className="pl-3 pr-2 flex items-center justify-center bg-[#ED8A09] text-white font-semibold rounded-r-md cursor-pointer">
              <img
                src={SearchIcon}
                alt="검색"
                className="w-8 h-8 "
                />
                <div className="bg-[#ED8A09] w-1 h-full relative left-[-4px]"></div>
              </button>
           </div>
           <div className="flex items-center gap-4">
          <Link to="/Signup"
          className="text-sm font-medium">
            Sign In
          </Link>
          <Link to="/cart" className="text-sm font-medium">
            Cart
          </Link>
          </div>
        </div>
      </nav>
    
    </>
  );
};