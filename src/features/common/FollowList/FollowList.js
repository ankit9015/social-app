import React, { useState, useEffect, useCallback } from "react";
import "./FollowList.css";
import AvatarInfo from "../AvatarInfo/AvatarInfo";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../user/userSlice";
import FollowUnfollowButton from "../FollowUnfollowButton/FollowUnfollowButton";
import { useNavigate } from "react-router-dom";

function FollowList() {
  const [allUsers, setAllUsers] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const getUsers = useCallback(getAllUsers, []);
  useEffect(() => {
    (async () => {
      const data = await dispatch(getUsers()).unwrap();
      setAllUsers(data.users);
    })();
  }, [dispatch, getUsers]);

  const isFollower = (suggestion) =>
    user.followers.find((follower) => follower._id === suggestion._id);

  const suggestedUsers = allUsers
    ? allUsers.filter((_user) => _user.username !== user.username)
    : [];

  return (
    <div className="follow-list flex-column">
      <div className="follow-list__header flex-row">
        <h6 className="text-md">Who to follow</h6>
        <span className="text-md">Show More</span>
      </div>
      <ul>
        {suggestedUsers &&
          suggestedUsers.map(
            (suggestedUser) =>
              suggestedUser._id !== user._id && (
                <li key={suggestedUser._id} className="follow-list__account">
                  <AvatarInfo
                    user={suggestedUser}
                    variant="horizontal"
                    openUserPage="true"
                    onClick={() => navigate(`../${user.username}`)}
                  />
                  {isFollower(suggestedUser) && (
                    <span className="follower__badge text-sm font-bold">
                      Follows you
                    </span>
                  )}
                  <FollowUnfollowButton currUser={suggestedUser} />
                </li>
              )
          )}
      </ul>
    </div>
  );
}

export default FollowList;
