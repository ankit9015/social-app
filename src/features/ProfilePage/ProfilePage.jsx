import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfilePage.css";
import { getUser, getUserPost } from "./ProfilePageSlice";
import { useParams } from "react-router-dom";
import { FollowUnfollowButton, Modal, PostBox } from "../common";
import ProfileEdit from "./ProfileEdit";

function ProfilePage() {
  const dispatch = useDispatch();
  const { posts: storePosts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const { openedUser: profile } = useSelector((state) => state.users);
  const [posts, setPosts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const { username } = useParams();

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

  return (
    <main className="profile flex-column">
      <section className="profile__info flex-column text-md">
        <Avatar
          className="profile__avatar"
          sx={{ width: "8rem", height: "8rem" }}
          src={profile?.profileImage}
        />

        <h1 className="profile__name">
          {profile?.firstName + " " + profile?.lastName}
        </h1>
        <h1 className="profile__username">{profile?.username}</h1>
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
      <section className="profile__posts flex-column">
        <h1 className="font-bold text-md">Your Posts</h1>
        {posts && posts.map((post) => <PostBox key={post._id} post={post} />)}
      </section>
    </main>
  );
}

export default ProfilePage;
