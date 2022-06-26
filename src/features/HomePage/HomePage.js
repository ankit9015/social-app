import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { FilterDropdown, Modal, PostBox, PostEditor } from "../common";
import { AddIcon } from "../../icon";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./HomePageSlice";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    (async () => {
      await dispatch(getPosts()).unwrap();
    })();
  }, [dispatch]);

  return (
    <main className="home flex-column">
      <div
        className="create-post__floating-button button button-primary text-lg"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <AddIcon fontSize="inherit" />
        {showModal && (
          <Modal>
            <PostEditor closeEditor={() => setShowModal(false)} />
          </Modal>
        )}
      </div>
      <div className="home__header flex-row">
        <h1 className="text-md">Home</h1>
      </div>
      <PostEditor />

      <div className="home__posts-header flex-row">
        <h2 className="text-md">Posts</h2>
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

export default HomePage;
