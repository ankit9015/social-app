import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../ProfilePage/ProfilePageSlice";

function FollowUnfollowButton({ currUser }) {
  const dispatch = useDispatch();
  const { user, authToken } = useSelector((state) => state.auth);
  let isFollowing = user.following.some(
    (follow) => follow?.username === currUser?.username
  );

  const style = {
    width: "8rem",
    boxSizinf: "border-box",
  };
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
