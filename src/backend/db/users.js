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
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/alison-wang-mou0S7ViElQ-unsplash_u-K-IbvOo.jpg",
    coverImage:
      "https://ik.imagekit.io/ankit9015/social_media/brennan-ehrhardt-HALe2SmkWAI-unsplash_tWlAzcMbCf._DaaImsHlL.jpg",
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        firstName: "Karan",
        lastName: "Sharma",
        username: "karanSharma",
      },
      {
        firstName: "Shubham",
        lastName: "Soni",
        username: "shubhamSoni",
      },
      {
        firstName: "Soham",
        lastName: "Shah",
        username: "sohamShah",
      },
    ],
    following: [
      {
        firstName: "Karan",
        lastName: "Sharma",
        username: "karanSharma",
      },
      {
        firstName: "Shubham",
        lastName: "Soni",
        username: "shubhamSoni",
      },
      {
        firstName: "Soham",
        lastName: "Shah",
        username: "sohamShah",
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamSoni",
    password: "shubham123",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/charlesdeluvio-DziZIYOGAHc-unsplash_4u7_MijdT.jpg",
    coverImage:
      "https://ik.imagekit.io/ankit9015/social_media/sandro-katalina-k1bO_VTiZSs-unsplash_DAcWZ8Rhx5.jpg",
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
    ],
    followers: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
      {
        firstName: "Shubham",
        lastName: "Soni",
        username: "shubhamSoni",
      },
      {
        firstName: "Soham",
        lastName: "Shah",
        username: "sohamShah",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Karan",
    lastName: "Sharma",
    username: "karanSharma",
    password: "karan123",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
    coverImage:
      "https://ik.imagekit.io/ankit9015/social_media/timon-klauser-3MAmj1ZKSZA-unsplash_cM3odJLb9.jpg",
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
      {
        firstName: "Shubham",
        lastName: "Soni",
        username: "shubhamSoni",
      },
      {
        firstName: "Soham",
        lastName: "Shah",
        username: "sohamShah",
      },
    ],
    followers: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
    ],
  },
  {
    _id: uuid(),
    firstName: "Soham",
    lastName: "Shah",
    username: "sohamShah",
    password: "soham123",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/ralf-skirr-R4EHSKwXuLE-unsplash_WjGCK5SZp.jpg",
    coverImage:
      "https://ik.imagekit.io/ankit9015/social_media/natalia-yakovleva-DIewyzpUbRc-unsplash_GeVrN9c5z.jpg",
    bio: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
    ],
    followers: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
      {
        firstName: "Shubham",
        lastName: "Soni",
        username: "shubhamSoni",
      },
      {
        firstName: "Soham",
        lastName: "Shah",
        username: "sohamShah",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Kesahv",
    lastName: "Thakur",
    username: "keshavThakur",
    password: "keshav123",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/gaspar-uhas-j_DmMNZK-jo-unsplash_BTjWdZsV1e.jpg",
    coverImage:
      "https://ik.imagekit.io/ankit9015/social_media/joanna-kosinska-bF2vsubyHcQ-unsplash_Fnr5kX5hw.jpg",
    bio: "",
    website: "",
    following: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
      {
        firstName: "Shubham",
        lastName: "Soni",
        username: "shubhamSoni",
      },
      {
        firstName: "Soham",
        lastName: "Shah",
        username: "sohamShah",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tushar",
    lastName: "Pandey",
    username: "tusharPandey",
    password: "tushar123",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/julien-tromeur-6-adg66qleM-unsplash__H-DUJ7b_.jpg",
    coverImage:
      "https://ik.imagekit.io/ankit9015/social_media/brennan-ehrhardt-HALe2SmkWAI-unsplash_tWlAzcMbCf.jpg",
    bio: "",
    website: "",
    following: [
      { firstName: "Ankit", lastName: "Joshi", username: "ankitjoshi" },
      {
        firstName: "Shubham",
        lastName: "Soni",
        username: "shubhamSoni",
      },
      {
        firstName: "Soham",
        lastName: "Shah",
        username: "sohamShah",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
