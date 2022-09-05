import React, { useEffect, useState } from "react";
import "./Search.css";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../user/userSlice";
import { AvatarInfo, FollowUnfollowButton } from "../common";

function SearchResults() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user: loggedUser } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = searchParams.get("s")?.toLowerCase();
  const filteredUsers = users?.filter(
    (user) =>
      (user.firstName + " " + user.lastName).toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
  );

  const isFollower = (suggestion) =>
    loggedUser.followers.find((follower) => follower._id === suggestion._id);

  useEffect(() => {
    (async () => {
      const data = await dispatch(getAllUsers()).unwrap();
      setUsers(data?.users);
    })();
  }, [dispatch]);

  useEffect(() => {
    location.state && setSearchParams({ s: location.state });
  }, [setSearchParams, location.state]);

  return (
    <section className="search-results">
      <h1 className="text-md m-s text-center">
        Search Results ({filteredUsers.length})
      </h1>
      <ul className="flex-column">
        {filteredUsers &&
          filteredUsers.map(
            (user) =>
              user._id && (
                <li key={user._id} className="follow-list__account">
                  <AvatarInfo
                    user={user}
                    variant="horizontal"
                    openUserPage="true"
                    onClick={() => navigate(`../${user.username}`)}
                  />
                  {isFollower(user) && (
                    <span className="follower__badge text-sm font-bold">
                      Follows you
                    </span>
                  )}
                  {user.username !== loggedUser.username && (
                    <FollowUnfollowButton currUser={user} />
                  )}
                </li>
              )
          )}
      </ul>
    </section>
  );
}

export default SearchResults;
