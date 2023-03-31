import React, { useState } from "react";

import "./Cards.css";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      <div className=""></div>
      <div className="h-fit">
        <div className="border mb-4 p-4 read-time">
          <h2 className="text-2xl">Spent time on read : min</h2>
        </div>
        <div className="border p-6 book-mark">
          <h2>Bookmarked Blogs :</h2>
          <div className="p-3 rounded mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
