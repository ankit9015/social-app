import React, { useEffect, useMemo, useState } from "react";
import "./HomePage.css";
import {
  FilterDropdown,
  Modal,
  PostBox,
  PostEditor,
  PostsModalEditor,
} from "../common";
import { getPosts } from "./HomePageSlice";
import { AddIcon } from "../../icon";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { filterLatestPosts } from "../posts/postsSlice";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const postsFromFollowedUsers = createSelector(
    [(state) => state.posts.posts, (state) => state.auth.user],
    (posts, user) => {
      const following = user.following.map((user) => user.username);
      const postsFollowing = posts.filter((post) =>
        [...following, user.username].includes(post.username)
      );
      return postsFollowing;
    }
  );

  const posts = useMemo(
    () => postsFromFollowedUsers(state),
    [postsFromFollowedUsers, state]
  );

  useEffect(() => {
    (async () => {
      await dispatch(getPosts()).unwrap();
      dispatch(filterLatestPosts());
    })();
  }, [dispatch]);

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main className="home flex-column">
      <div
        className="create-post__floating-button button button-primary text-lg"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <AddIcon fontSize="large" />
        {showModal && (
          <Modal>
            <PostsModalEditor closeEditor={() => setShowModal(false)} />
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
