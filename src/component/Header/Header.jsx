import React from "react";
import image from "../../assets/20221214012311__MG_8221 (1).jpg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header flex items-center justify-between my-10 pb-12 border-b">
      <h1 className="font-bold text-2xl">Wisdom River</h1>
      <div className="flex items-center gap-6">
        <img className="w-10 h-10 rounded-full" src={image} alt="" />
      </div>
    </nav>
  );
};

export default Header;
