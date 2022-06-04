import React, { useState } from "react";
import "./HomePage.css";
import { Modal, PostBox, PostEditor } from "../common";
import { AddIcon } from "../../icon";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="home flex-column">
      <div
        className="create-post__floating-button button button-primary text-lg"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <AddIcon fontSize="inherit" />
        {showModal && (
          <Modal>
            <PostEditor />
          </Modal>
        )}
      </div>
      <div className="home__header flex-row">
        <h1 className="text-md">Home</h1>
      </div>
      <PostEditor />

      <div>
        <h2 className="text-md">Latest Posts</h2>
      </div>

      <PostBox />
    </main>
  );
}

export default HomePage;
