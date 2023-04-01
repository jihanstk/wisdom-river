import React from "react";

const Bookmark = (props) => {
  const { bookmark } = props;
  return (
    <div>
      <h2 className="text-xl bg-slate-50 p-3 rounded-xl mb-5">{bookmark}</h2>
    </div>
  );
};

export default Bookmark;
