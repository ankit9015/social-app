import React, { useEffect } from "react";
import "./Bookmarks.css";
import { useSelector } from "react-redux";
import { PostBox } from "../common";

function Bookmarks() {
  const { bookmarks } = useSelector((state) => state.posts);

  useEffect(() => {
    document.title = "Bookmarks";
  }, []);
  return (
    <main className="bookmarks flex-column">
      <div className="bookmarks__header flex-row">
        <h1 className="text-md font-bold">Your Bookmarks</h1>
      </div>
      {bookmarks &&
        bookmarks.map((post) => <PostBox key={post._id} post={post} />)}
    </main>
  );
}

export default Bookmarks;
