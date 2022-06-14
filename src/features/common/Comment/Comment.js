import React, { useRef, useState } from "react";
import "./Comment.css";
import { Avatar } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { usePosition } from "../../../helperFunction";
import {
  MoreHorizIcon,
  ThumbDownIcon,
  ThumbDownOutlinedIcon,
  ThumbUpIcon,
  ThumbUpOutlinedIcon,
} from "../../../icon";
import Modal from "../Modal/Modal";
import PostEditor from "../PostEditor/PostEditor";
import { deleteComment, downVoteComment, upVoteComment } from "./CommentSlice";
import { useNavigate } from "react-router-dom";
import { followUser, unfollowUser } from "../../ProfilePage/ProfilePageSlice";

function Comment({ comment, post }) {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { coords, updateCoords } = usePosition();
  const optionsRef = useRef(null);
  const { authToken, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserComment = comment.username === user.username;
  const hasUpVoted = comment.votes.upvotedBy.find(
    (_user) => _user.username === user.username
  );
  const hasDownVoted = comment.votes.downvotedBy.find(
    (_user) => _user.username === user.username
  );
  const isFollowing = user.following.find(
    (follow) => follow.username === comment.username
  );

  return (
    <div className="comment flex-row">
      <div className="comment__left">
        <Avatar
          className="comment__avatar"
          onClick={() => navigate(`../${comment.username}`)}
          src={comment.profileImage}
        />
      </div>
      <div className="comment__right flex-column">
        <div className="comment__header flex-row text-md">
          <h4>{`${comment.firstName ?? ""}  ${comment.lastName ?? ""}`}</h4>
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
                <div className="comment__options-modal flex-column">
                  {!isUserComment && (
                    <button
                      className="text-md pointer"
                      onClick={() => {
                        dispatch(
                          isFollowing
                            ? unfollowUser({
                                followUserUsername: comment.username,
                                authToken,
                              })
                            : followUser({
                                followUserUsername: comment.username,
                                authToken,
                              })
                        ).unwrap();
                      }}
                    >
                      {isFollowing ? "Unfollow" : "Follow"} @{comment.username}
                    </button>
                  )}
                  {isUserComment && (
                    <>
                      <div
                        disabled={true}
                        onClick={() => {
                          setShowEditModal((prev) => !prev);
                        }}
                        className="text-md pointer"
                      >
                        Edit
                        {showEditModal && (
                          <Modal>
                            <div className="comment__editor">
                              <PostEditor
                                currPost={comment}
                                commentOn={post}
                                closeEditor={() => {
                                  setShowEditModal((prev) => false);
                                  setShowOptionsModal(false);
                                }}
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
        <div className="comment__footer flex-row">
          <span
            onClick={() =>
              dispatch(
                hasUpVoted &&
                  upVoteComment({
                    postId: post._id,
                    commentId: comment._id,
                    authToken,
                  })
              ).unwrap()
            }
          >
            {hasUpVoted ? (
              <ThumbUpIcon
                style={{ color: "var(--primary-color)" }}
                fontSize="large"
              />
            ) : (
              <ThumbUpOutlinedIcon fontSize="large" />
            )}
          </span>
          <span
            onClick={() =>
              dispatch(
                downVoteComment({
                  postId: post._id,
                  commentId: comment._id,
                  authToken,
                })
              ).unwrap()
            }
          >
            {hasDownVoted ? (
              <ThumbDownIcon
                style={{ color: "var(--primary-color)" }}
                fontSize="large"
              />
            ) : (
              <ThumbDownOutlinedIcon fontSize="large" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
