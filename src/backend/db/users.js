import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ankit",
    lastName: "Joshi",
    username: "ankitjoshi",
    password: "ankit123",
    profileImage: null,
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Karan",
    lastName: "Sharma",
    username: "karanSharma",
    password: "karan123",
    profileImage: null,
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamSoni",
    password: "shubham123",
    profileImage: null,
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Soham",
    lastName: "Shah",
    username: "sohamShah",
    password: "soham123",
    profileImage: null,
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
