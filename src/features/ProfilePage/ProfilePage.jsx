import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfilePage.css";
import { getUser, getUserPost } from "./ProfilePageSlice";
import { useParams } from "react-router-dom";
import { PostBox } from "../common";

function ProfilePage() {
  const dispatch = useDispatch();
  const { posts: storePosts } = useSelector((state) => state.posts);

  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState();
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
      const data = await dispatch(getUser({ username })).unwrap();
      setProfile(data.user);
    })();
  }, [dispatch, username]);

  return (
    <main className="profile flex-column">
      <section className="profile__info flex-column text-md">
        <Avatar
          className="profile__avatar"
          sx={{ width: "8rem", height: "8rem" }}
        />

        <h1 className="profile__name">
          {profile?.firstName + " " + profile?.lastName}
        </h1>
        <h1 className="profile__username">{profile?.username}</h1>
        <button className="profile__edit--button button button-outline-primary text-md">
          Edit Profile
        </button>
        <p className="profile__about text-center">about</p>
        <p className="text-center">external links</p>
        <div className="profile__account-info flex-row">
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
