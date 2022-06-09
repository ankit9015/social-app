import React, { useRef, useState } from "react";
import "./Comment.css";
import { Avatar } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { usePosition } from "../../../helperFunction";
import { MoreHorizIcon } from "../../../icon";
import Modal from "../Modal/Modal";
import PostEditor from "../PostEditor/PostEditor";
import { deleteComment } from "./CommentSlice";

function Comment({ comment, post }) {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { coords, updateCoords } = usePosition();
  const optionsRef = useRef(null);
  const { isDarkTheme } = useSelector((state) => state.theme);
  const { authToken, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isUserComment = comment.username === user.username;
  return (
    <div className="comment flex-row">
      <div className="comment__left">
        <Avatar className="comment__avatar" />
      </div>
      <div className="comment__right flex-column">
        <div className="comment__header flex-row text-md">
          <h4>Name</h4>
          <h4>@{comment.username}</h4>

          <span
            ref={optionsRef}
            onClick={() => {
              setShowOptionsModal((prev) => !prev);
              updateCoords(optionsRef.current);
            }}
          >
            <MoreHorizIcon className="pointer" fontSize="large" />
            {showOptionsModal && (
              <Modal
                coords={{
                  left: coords.left + "px",
                  top: coords.top + coords.height + "px",
                }}
                updateCoords={() => updateCoords(optionsRef.current)}
                position="bottom-left"
              >
                <div
                  data-theme={isDarkTheme ? "dark" : "light"}
                  className="comment__options-modal flex-column"
                >
                  {!isUserComment && (
                    <button className="text-md pointer">
                      Unfollow @{comment.username}
                    </button>
                  )}
                  {isUserComment && (
                    <>
                      <div
                        disabled={true}
                        onClick={() => setShowEditModal((prev) => !prev)}
                        className="text-md pointer"
                      >
                        Edit
                        {showEditModal && (
                          <Modal>
                            <div className="comment__editor">
                              <PostEditor
                                currPost={comment}
                                commentOn={post}
                                exitModal={() => setShowEditModal(false)}
                              />
                            </div>
                          </Modal>
                        )}
                      </div>
                      <div
                        className="text-md pointer"
                        onClick={() => {
                          dispatch(
                            deleteComment({
                              postId: post._id,
                              commentId: comment._id,
                              authToken,
                            })
                          ).unwrap();
                        }}
                      >
                        Delete
                      </div>
                    </>
                  )}
                </div>
              </Modal>
            )}
          </span>
        </div>
        <div className="comment__content text-md">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
