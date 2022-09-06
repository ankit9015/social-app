import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserInfo } from "./ProfilePageSlice";
import "./ProfilePage.css";
import { AddAPhotoOutlinedIcon } from "../../icon";

function ProfileEdit({ onSave }) {
  const { user, authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: user.firstName ?? "",
    lastName: user.lastName ?? "",
    bio: user.bio ?? "",
    website: user.website ?? "",
    profileImage: user.profileImage ?? null,
    coverImage: user.coverImage ?? null,
  });

  const submitHandler = () => {
    dispatch(editUserInfo({ userData: formData, authToken }));
    onSave();
  };

  return (
    <div className="profile-editor flex-column">
      <div className="profile-editor__header flex-row">
        <h1 className="text-md">Edit Profile</h1>
        <button
          onClick={() => {
            submitHandler();
          }}
          className="text-md button button-primary"
        >
          Save
        </button>
      </div>
      <div className="text-md profile-editor__form flex-column">
        <div className="profile-editor__images-wrapper">
          <div className="cover__wrapper">
            {formData?.coverImage ? (
              <img
                className="cover-image"
                src={formData?.coverImage}
                alt="cover"
              />
            ) : (
              <div className="cover-image"></div>
            )}
            <label htmlFor="coverImage">
              <AddAPhotoOutlinedIcon fontSize="large" />
            </label>
            <input
              className="cover__img-input--hidden"
              type="file"
              accept="image/*"
              alt="cover-image"
              name="coverImage"
              id="coverImage"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  coverImage: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </div>
          <div className="avatar__wrapper">
            <Avatar
              className="profile__avatar"
              sx={{ width: "8rem", height: "8rem" }}
              src={formData.profileImage}
              alt="profile-image"
            />
            <label htmlFor="profileImage">
              <AddAPhotoOutlinedIcon fontSize="large" />
            </label>
            <input
              className="avatar__img-input--hidden"
              type="file"
              accept="image/*"
              alt="profile-image"
              name="profileImage"
              id="profileImage"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  profileImage: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </div>
        </div>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            rows="4"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            type="url"
            name="website"
            id="website"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
