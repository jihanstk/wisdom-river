import React, { useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ cards }) => {
  const [time, setTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  //   let totalTime = 0;
  const readTime = (readTime) => {
    // console.log(readTime);
    const currentTime = readTime.time;
    const totalTime = time + currentTime;
    setTime(totalTime);
  };

  const addToBookmark = (bookmark) => {
    const title = bookmark.title;
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
  };

  return (
    <div className="cards">
      <div className="">
        {cards.map((card) => (
          <Card
            card={card}
            readTime={readTime}
            addToBookmark={addToBookmark}
            key={card.id}
          ></Card>
        ))}
      </div>
      <div className="h-fit">
        <div className="border mb-4 p-4 read-time">
          <h2 className="text-2xl">Spent time on read :{time} min</h2>
        </div>
        <div className="border p-6 book-mark">
          <h2>Bookmarked Blogs : {bookmarks.length}</h2>
          <div className="p-3 rounded mb-5">
            {bookmarks.map((bookmark) => {
              return (
                <h2 className="text-xl bg-slate-50 p-3 rounded-xl mb-5">
                  {bookmark}
                </h2>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
