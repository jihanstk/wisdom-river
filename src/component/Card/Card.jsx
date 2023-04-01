import React from "react";

const Card = (props) => {
  const { author, authorPhoto, picture, time, date, title, tags } = props.card;
  const readTime = props.readTime;
  const addToBookmark = props.addToBookmark;

  return (
    <div>
      <div className="w-11/12 bg-base-100 shadow mb-12">
        <img src={picture} alt="Shoes" className="rounded" />
        <div className="p-4">
          <div className="flex mt-5 justify-between items-center mb-8">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={authorPhoto}
                alt=""
              />
              <div className="ml-2">
                <h3 className="font-bold sm:text-sm">{author}</h3>
                <p className="text-slate-500 sm:text-sm">{date}</p>
              </div>
            </div>
            <h5>
              {time} Min Read
              <span onClick={() => addToBookmark(props.card)} className="p-2">
                <i className="fa-sharp fa-regular fa-bookmark"></i>
              </span>
            </h5>
          </div>
          <h1 className="card-title mb-5 md:text-3xl sm:text-lg sm:font-semibold">
            {title}
          </h1>
          <p>{tags}</p>
          <div className="card-actions">
            <button
              onClick={() => readTime(props.card)}
              className="btn btn-link"
            >
              Mark As Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
