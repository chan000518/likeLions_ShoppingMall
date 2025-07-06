import { Link } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "../../assets/Search.jpg"
import React from "react";
export const Navbar = () => {

  return (
    <>
       <nav className="fixed top-0  border-amber-400 left-0 right-0 h-20 bg-amber-200 text-amber-500">
        <div className="space-x-10 flex items-center relative h-full px-8">
          <Link to="/" className="font-semibold text-2xl py-5">
            멋사몰🐯
          </Link>
          <div className="flex py-5 absolute left-1/2 -translate-x-1/2">
           <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-[430px] px-4 py-2 rounded-1-md bg-amber-100 text-gray-800 focus:outline-none"/>
            <button
            className="px-4 py-2 bg-[#E38B18] text-white font-semibold rounded-r-md cursor-pointer">
              <img
                src={SearchIcon}
                alt="검색"
                className="w-9 h-9"
                />
                </button>
           </div>
          <Link to="/Signup"
          className="flex absolute py-0.5 translate-y-0.5 right-6 items-center space-x-2">
 
              <span className="text-base font-semibold text-amber-500">Sign In</span>
          </Link>
        </div>
      </nav>
    
    </>
  );
};