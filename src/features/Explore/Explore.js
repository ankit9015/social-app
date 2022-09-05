import React, { useEffect } from "react";
import "./Explore.css";
import { useDispatch, useSelector } from "react-redux";
import { FilterDropdown, PostBox } from "../common";
import { getPosts } from "../HomePage/HomePageSlice";
import { filterLatestPosts } from "../posts/postsSlice";

function Explore() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(getPosts()).unwrap();
      dispatch(filterLatestPosts());
    })();
  }, [dispatch]);

  useEffect(() => {
    document.title = "Explore";
  }, []);

  return (
    <main className="explore flex-column">
      <div className="explore__header flex-row">
        <h1 className="text-md">Explore</h1>
        <FilterDropdown />
      </div>
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <PostBox post={post} />
          </div>
        ))}
    </main>
  );
}

export default Explore;
