import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {

  return (
    <>
       <nav className="fixed top-0 border-b-2 border-amber-400 left-0 right-0 h-20 bg-amber-200 text-amber-500 items-center justify-between px-10 z-50">
        <div className="space-x-10 flex items-center">
          <Link to="/" className="font-semibold text-2xl pt-5">
            Main
          </Link>
          <Link to="/Signup" className="font-semibold text-2xl pt-5">Signup</Link>
          <h1 className="font-semibold text-3xl pt-5 pl-100"> 멋사몰🐯</h1>
        </div>
      </nav>
    
    </>
  );
};