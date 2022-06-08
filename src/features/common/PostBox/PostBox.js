import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  BookmarkBorderIcon,
  ChatBubbleOutlineOutlinedIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
  MoreHorizIcon,
  ShareIcon,
} from "../../../icon";
import "./PostBox.css";
import Modal from "../Modal/Modal";
import { usePosition, timeDifference } from "../../../helperFunction";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkPost,
  deletePost,
  dislikePost,
  likePost,
  removeBookmarkPost,
} from "./PostBoxSlice";
import PostBoxEditModal from "./PostBoxEditModal";

function PostBox({ post }) {
  const createdAt = new Date(post.createdAt).getTime();
  const now = new Date().getTime();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { coords, updateCoords } = usePosition();
  const optionsRef = useRef(null);
  const { isDarkTheme } = useSelector((state) => state.theme);
  const { authToken, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const hasLiked = post?.likes.likedBy?.find(
    (item) => item.username === user.username
  );

  return (
    <div className="post-box flex-row">
      <div className="post-box__left">
        <Avatar className="post-box__avatar" />
      </div>
      <div className="post-box__right flex-column">
        <div className="post-box__header flex-row text-md">
          <h4>Name</h4>
          <h4>@{post.username}</h4>
          <p className="text-gray">
            {timeDifference({ oldTime: createdAt, newTime: now })}
          </p>

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
                  className="post-box__options-modal flex-column"
                >
                  <p className="text-md pointer">Mock</p>
                  {post.username === user.username && (
                    <>
                      <div
                        onClick={() => setShowEditModal((prev) => !prev)}
                        className="text-md pointer"
                      >
                        Edit
                        {showEditModal && (
                          <PostBoxEditModal
                            post={post}
                            exitModal={() => {
                              setShowEditModal(false);
                              setShowOptionsModal(false);
                            }}
                          />
                        )}
                      </div>
                      <div
                        className="text-md pointer"
                        onClick={() => {
                          dispatch(
                            deletePost({ postId: post._id, authToken })
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
        <div className="post-box__content text-md">
          <p>{post.content}</p>
        </div>
        <div className="post-box__footer flex-row">
          <span
            className="pointer"
            onClick={() => {
              console.log(post);
              dispatch(
                hasLiked
                  ? dislikePost({ postId: post._id, authToken })
                  : likePost({ postId: post._id, authToken })
              ).unwrap();
            }}
          >
            {hasLiked ? (
              <FavoriteIcon fontSize="large" style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
            <span className="text-md">{post.likes?.likeCount}</span>
          </span>
          <span className="pointer">
            <ChatBubbleOutlineOutlinedIcon fontSize="large" />
            <span className="text-md">{post.comments?.length}</span>
          </span>
          <span className="pointer">
            <ShareIcon fontSize="large" />
          </span>
          <span
            onClick={() =>
              dispatch(
                hasLiked
                  ? removeBookmarkPost({ postId: post._id, authToken })
                  : bookmarkPost({ postId: post._id, authToken })
              ).unwrap()
            }
            className="pointer"
          >
            <BookmarkBorderIcon fontSize="large" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostBox;
