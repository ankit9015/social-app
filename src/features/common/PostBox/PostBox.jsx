import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  BookmarkBorderIcon,
  BookmarkIcon,
  ChatBubbleOutlineOutlinedIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
  MoreHorizIcon,
  PhotoLibraryIcon,
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
import { useLocation, useNavigate } from "react-router-dom";
import { followUser, unfollowUser } from "../../ProfilePage/ProfilePageSlice";
import PostsModalEditor from "../PostEditorModal/PostsModalEditor";
import ImageModal from "../ImageModal/ImageModal";

function PostBox({ post }) {
  const createdAt = new Date(post.createdAt);
  const now = new Date();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [commentModal, setcommentModal] = useState(false);
  const { coords, updateCoords } = usePosition();
  const optionsRef = useRef(null);
  const { authToken, user } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const hasLiked = post?.likes.likedBy?.find(
    (item) => item.username === user.username
  );

  const isLocationPost = location.pathname.includes("post");
  const isUserPost = post.username === user.username;
  const isInBookmarks = bookmarks?.find((_post) => _post._id === post._id);
  const isFollowing = user.following.find(
    (follow) => follow.username === post.username
  );
  const isPostPage = location.pathname === "/" + post.username + "/" + post._id;
  return (
    <div className="post-box flex-row">
      <div className="post-box__left">
        <Avatar
          className="post-box__avatar"
          onClick={() => navigate(`../${post.username}`)}
          src={post.profileImage}
        />
      </div>
      <div className="post-box__right flex-column">
        <div className="post-box__header flex-row text-md">
          <h4>{post.firstName + " " + post.lastName}</h4>
          <h4>@{post.username}</h4>
          {!location.pathname.includes("post") && (
            <p className="text-gray">
              {timeDifference({ oldTime: createdAt, newTime: now })}
            </p>
          )}

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
                <div className="post-box__options-modal flex-column">
                  {!isUserPost && (
                    <button
                      className="text-md pointer"
                      onClick={() => {
                        dispatch(
                          isFollowing
                            ? unfollowUser({
                                followUserUsername: post.username,
                                authToken,
                              })
                            : followUser({
                                followUserUsername: post.username,
                                authToken,
                              })
                        ).unwrap();
                        setShowOptionsModal(false);
                      }}
                    >
                      {isFollowing ? "Unfollow" : "Follow"} @{post.username}
                    </button>
                  )}
                  {isUserPost && (
                    <>
                      <button
                        onClick={() => {
                          setShowEditModal((prev) => !prev);
                        }}
                        className="text-md pointer"
                      >
                        Edit
                        {showEditModal && (
                          <PostBoxEditModal
                            post={post}
                            exitModal={() => {
                              setShowOptionsModal(false);
                              setShowEditModal(false);
                            }}
                          />
                        )}
                      </button>
                      <button
                        className="text-md pointer"
                        onClick={() => {
                          dispatch(
                            deletePost({ postId: post._id, authToken })
                          ).unwrap();
                        }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </Modal>
            )}
          </span>
        </div>
        <div
          onClick={() => {
            if (!isLocationPost) {
              navigate(`../${post.username}/${post._id}`);
            }
          }}
          className="post-box__content text-md"
        >
          <p>{post.content}</p>

          {isPostPage ? (
            <div className="flex-column">
              {post.images.map((image, idx) => {
                let curr_image = image;
                return (
                  <ImageModal
                    key={idx}
                    className="post-box__img pointer"
                    src={curr_image.src}
                    alt={`${curr_image.alt}`}
                  />
                );
              })}
            </div>
          ) : (
            post.images?.length > 0 && (
              <div className="post-box__img-wrapper">
                <img
                  className="post-box__img"
                  src={post.images && post.images[0]?.src}
                  alt={`${post.images[0].alt}`}
                />
                {post.images?.length > 1 && (
                  <span className="more-image text-md">
                    +{post.images.length} <PhotoLibraryIcon fontSize="large" />
                  </span>
                )}
              </div>
            )
          )}
        </div>
        {isLocationPost && (
          <p className="text-gray post__time">
            {`
             ${createdAt.toLocaleString("default", {
               timeStyle: "short",
               dateStyle: "long",
             })}`}
          </p>
        )}
        <div className="post-box__footer flex-row">
          <span
            className="pointer"
            onClick={() => {
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
          {!isLocationPost && (
            <span
              className="pointer"
              onClick={() => setcommentModal((prev) => !prev)}
            >
              <ChatBubbleOutlineOutlinedIcon fontSize="large" />
              <span className="text-md">{post.comments?.length}</span>
              {commentModal && (
                <Modal>
                  <PostsModalEditor
                    commentOn={post}
                    closeEditor={() => setcommentModal(false)}
                  />
                </Modal>
              )}
            </span>
          )}
          <span
            onClick={() =>
              dispatch(
                isInBookmarks
                  ? removeBookmarkPost({ postId: post._id, authToken })
                  : bookmarkPost({ postId: post._id, authToken })
              ).unwrap()
            }
            className="pointer"
          >
            {isInBookmarks ? (
              <BookmarkIcon fontSize="large" />
            ) : (
              <BookmarkBorderIcon fontSize="large" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostBox;
