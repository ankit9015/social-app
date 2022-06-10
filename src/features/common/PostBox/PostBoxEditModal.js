import React from "react";
import Modal from "../Modal/Modal";
import PostEditor from "../PostEditor/PostEditor";

function PostBoxEditModal({ post, exitModal }) {
  return (
    <Modal>
      <div className="post-box__edit-modal">
        <PostEditor currPost={post} closeEditor={exitModal} />
      </div>
    </Modal>
  );
}

export default PostBoxEditModal;
