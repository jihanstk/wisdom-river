import React, { useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import Card from "../Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cards.css";

const Cards = ({ cards }) => {
  const [time, setTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  console.log(bookmarks);
  //   let totalTime = 0;
  const readTime = (readTime) => {
    const currentTime = readTime.time;
    const totalTime = time + currentTime;
    setTime(totalTime);
  };

  const addToBookmark = (bookmark) => {
    let newBookmarks;
    const title = bookmark.title;
    const id = bookmark.id;
    if (id in bookmarks) {
      toast("Already Bookmarked");
      return;
    } else {
      newBookmarks = [...bookmarks, { title, id }];
    }

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
        <div className="border mb-4 p-2 read-time">
          <h2 className="text-2xl">Spent time on read :{time} min</h2>
        </div>
        <div className="border p-6 book-mark">
          <h2>Bookmarked Blogs : {bookmarks.length}</h2>
          <div className="p-3 rounded mb-5">
            {bookmarks.map((bookmark) => {
              //   console.log(bookmark);
              return (
                <Bookmark
                  bookmark={bookmark.title}
                  key={bookmark.id}
                ></Bookmark>
              );
            })}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
