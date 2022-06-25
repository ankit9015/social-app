import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../ProfilePage/ProfilePageSlice";
import { useToast } from "../Toast/ToastProvider";

function FollowUnfollowButton({ currUser }) {
  const dispatch = useDispatch();
  const { user, authToken } = useSelector((state) => state.auth);
  const { message: usersMessage } = useSelector((state) => state.users);
  let isFollowing = user.following.some(
    (follow) => follow._id === currUser._id
  );
  const { addToast } = useToast();

  const style = {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    boxSizinf: "border-box",
  };

  useEffect(() => {
    if (usersMessage) {
      addToast(usersMessage);
    }
  }, [usersMessage]);
  return (
    <>
      {isFollowing ? (
        <button
          onClick={() =>
            dispatch(
              unfollowUser({
                followUserUsername: currUser.username,
                authToken,
              })
            ).unwrap()
          }
          className="follow-button button button-outline-primary text-md"
          style={style}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch(
              followUser({ followUserUsername: currUser.username, authToken })
            ).unwrap
          }
          className="unfollow-button button button-primary text-md"
          style={style}
        >
          Follow
        </button>
      )}
    </>
  );
}

export default FollowUnfollowButton;
