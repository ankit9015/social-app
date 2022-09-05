import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfilePage.css";
import { getUser, getUserPost } from "./ProfilePageSlice";
import { useParams } from "react-router-dom";
import { FollowList, FollowUnfollowButton, Modal, PostBox } from "../common";
import ProfileEdit from "./ProfileEdit";
import { useWindowSize } from "../../helperFunction";

function ProfilePage() {
  const dispatch = useDispatch();
  const { posts: storePosts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const { openedUser: profile } = useSelector((state) => state.users);
  const [posts, setPosts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const { username } = useParams();
  const { width: screenWidth } = useWindowSize();

  useEffect(() => {
    (async () => {
      const data = await dispatch(
        getUserPost({ username, storePosts })
      ).unwrap();
      setPosts(data.posts);
    })();
  }, [dispatch, username, storePosts]);

  useEffect(() => {
    (async () => {
      await dispatch(getUser({ username })).unwrap();
    })();
  }, [dispatch, username]);

  useEffect(() => {
    document.title = `${profile?.firstName + " " + profile?.lastName}`;
  }, [profile?.firstName, profile?.lastName]);

  return (
    <main className="profile flex-column">
      <section className="profile__info flex-column text-md">
        <div className="profile__images">
          {profile?.coverImage ? (
            <img
              className="cover-image"
              src={profile?.coverImage}
              alt="cover"
            />
          ) : (
            <div className="cover-image"></div>
          )}

          <Avatar
            className="profile__avatar"
            sx={{ width: "10rem", height: "10rem" }}
            src={profile?.profileImage}
          />
        </div>
        <h1 className="profile__name">
          {profile?.firstName + " " + profile?.lastName}
        </h1>
        <h1 className="profile__username">@{profile?.username}</h1>
        {user.username === profile?.username ? (
          <button
            onClick={() => setShowEditModal((prev) => !prev)}
            className="profile__edit--button button button-outline-primary text-md"
          >
            Edit Profile
            {showEditModal && (
              <Modal>
                <ProfileEdit onSave={() => setShowEditModal(false)} />
              </Modal>
            )}
          </button>
        ) : (
          <FollowUnfollowButton currUser={profile} />
        )}
        <p className="profile__bio text-center">{profile?.bio}</p>
        <p className="text-center">{profile?.website}</p>
        <div className="profile__stats flex-row">
          <div className="flex-column text-center">
            <span className="font-bold">{profile?.following.length}</span>
            <span>Following</span>
          </div>
          <div className="flex-column text-center">
            <span className="font-bold">{posts.length}</span>
            <span>Posts</span>
          </div>
          <div className="flex-column text-center">
            <span className="font-bold">{profile?.followers.length}</span>
            <span>Followers</span>
          </div>
        </div>
      </section>
      {screenWidth < 900 && (
        <section className="profile__follow-list">
          <FollowList />
        </section>
      )}
      <section className="profile__posts flex-column">
        <h1 className="font-bold text-md">Your Posts</h1>
        {posts && posts.map((post) => <PostBox key={post._id} post={post} />)}
      </section>
    </main>
  );
}

export default ProfilePage;
