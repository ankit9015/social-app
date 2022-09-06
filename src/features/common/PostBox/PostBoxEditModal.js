import React from "react";
import Modal from "../Modal/Modal";
import PostsModalEditor from "../PostEditorModal/PostsModalEditor";

function PostBoxEditModal({ post, exitModal }) {
  return (
    <Modal>
      <div className="post-box__edit-modal">
        <PostsModalEditor currPost={post} closeEditor={exitModal} />
      </div>
    </Modal>
  );
}

export default PostBoxEditModal;
