import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header mx-auto w-9/12 flex justify-between align-items-center my-10 pb-12 border-b">
      <h1 className="font-bold">Wisdom River</h1>
      <div className="flex items-center gap-6 text-xl">
        <a className="text-black" href="/home">
          Home
        </a>
        <a className="text-black" href="/blog">
          Blog
        </a>
        <a className="text-black" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
