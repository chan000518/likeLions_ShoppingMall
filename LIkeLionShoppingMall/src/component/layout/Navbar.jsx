import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {

  return (
    <>
       <nav className="fixed top-0 border-b-1 border-amber-300 left-0 right-0 h-20 bg-amber-200 text-amber-500 items-center justify-between px-10 z-50">
        <div className="space-x-10 flex items-center">
          <Link to="/" className="font-semibold text-2xl">
            Main
          </Link>
          <Link to="/Signup" className="font-semibold text-2xl">Signup</Link>
        </div>
      </nav>
    
    </>
  );
};