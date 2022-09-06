import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "JS is known for its type coercion and resulting errors. Let's see if you know the reasoning for all these output",
    images: [
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/meme-2_WlExQ53wA.png",
        alt: "js-meme",
      },
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/js_meme_HnszY45hm.png",
        alt: "js-meme",
      },
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/js_meme_3_84AKhThpg.png",
        alt: "js-meme",
      },
    ],
    likes: {
      likeCount: 3,
      likedBy: [
        {
          username: "tusharPandey",
        },
        {
          username: "shubhamSoni",
        },
        {
          username: "karanSharma",
        },
        {
          username: "keshavThakur",
        },
      ],
      dislikedBy: [],
    },
    username: "karanSharma",
    firstName: "Karan",
    lastName: "Sharma",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
    createdAt: formatDate(0, 0, 2),
    updatedAt: formatDate(0, 0, 2),
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Shah",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/charlesdeluvio-DziZIYOGAHc-unsplash_4u7_MijdT.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamShah",
        firstName: "Soham",
        lastName: "Shah",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/ralf-skirr-R4EHSKwXuLE-unsplash_WjGCK5SZp.jpg",
        content: `Basically, "+[]" is zero, and zero is falsey, so "!+[]" is the same as "!0" which is true, adding anything to "[]" causes it to become a string, so "!+[]+[]" turns into "true+[]" which is the string "true", which we then add to "![]", which is false, since arrays are truey because js, which all turns into

        "true"+false which is "truefalse" which has length 9.`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `JavaScript is not a game of brilliance; it is a game of practice.`,
    images: [],
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "shubhamSoni",
        },
      ],
      dislikedBy: [],
    },
    username: "ankitjoshi",
    firstName: "Ankit",
    lastName: "Joshi",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/alison-wang-mou0S7ViElQ-unsplash_u-K-IbvOo.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(0, 5),
    updatedAt: formatDate(0, 5),
  },
  {
    _id: uuid(),
    content:
      "Even the master of a field was once a noob at it. The no of hours he invested made him the master. Keep going man",
    images: [
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/work_mlK9f8NyC2.png",
        alt: "work desk",
      },
    ],
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamSoni",
    firstName: "Shubham",
    lastName: "Soni",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/charlesdeluvio-DziZIYOGAHc-unsplash_4u7_MijdT.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/charlesdeluvio-DziZIYOGAHc-unsplash_4u7_MijdT.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamShah",
        firstName: "Soham",
        lastName: "Shah",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/ralf-skirr-R4EHSKwXuLE-unsplash_WjGCK5SZp.jpg",
        content: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(0, 0, 5),
    updatedAt: formatDate(0, 0, 5),
  },
  {
    _id: uuid(),
    content: `Be kind.

      Your kindness has the power to make people around you slightly more kind.`,
    images: [
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/kindness_vUnvaC646Q.png",
        alt: "kindness hands",
      },
    ],
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "shubhamSoni",
        },
      ],
      dislikedBy: [],
    },
    username: "shubhamSoni",
    firstName: "Shubham",
    lastName: "Soni",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/charlesdeluvio-DziZIYOGAHc-unsplash_4u7_MijdT.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(10),
    updatedAt: formatDate(10),
  },
  {
    _id: uuid(),
    content: `Use the CSS clamp() function to give elements dynamic values, while keeping them within the min/max range.`,
    images: [
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/css_clamp_bVY0MX4SJ.png",
        alt: "css clamp",
      },
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/css_clamp-viewport_WxP63Kbfu.png",
        alt: "css clamp",
      },
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/css_clamp_devices_Qy0HZde4d.png",
        alt: "css clamp",
      },
    ],
    likes: {
      likeCount: 3,
      likedBy: [
        {
          username: "shubhamSoni",
        },
        {
          username: "karanSharma",
        },
        {
          username: "ankitjoshi",
        },
      ],
      dislikedBy: [],
    },
    username: "ankitjoshi",
    firstName: "Ankit",
    lastName: "Joshi",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/alison-wang-mou0S7ViElQ-unsplash_u-K-IbvOo.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `In a quality city, a person should be able to live their entire life without a car, and not feel deprived.`,
    images: [
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/city_71Sbd14SU.png",
        alt: "city train",
      },
    ],
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tusharPandey",
    firstName: "Tushar",
    lastName: "Pandey",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/julien-tromeur-6-adg66qleM-unsplash__H-DUJ7b_.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(8),
    updatedAt: formatDate(8),
  },
  {
    _id: uuid(),
    content: `If you didn't come from a happy family, make sure a happy family comes from you.`,
    images: [],
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "shubhamSoni",
        },
      ],
      dislikedBy: [],
    },
    username: "sohamShah",
    firstName: "Soham",
    lastName: "Shah",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/ralf-skirr-R4EHSKwXuLE-unsplash_WjGCK5SZp.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(3),
    updatedAt: formatDate(3),
  },
  {
    _id: uuid(),
    content: `Was coding toast notifications but got hungry and made myself toast first.`,
    images: [
      {
        src: "https://ik.imagekit.io/ankit9015/social_media/toast_BVVRrRFOSj.png",
        alt: "toast",
      },
    ],
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "karanSharma",
    firstName: "Karan",
    lastName: "Sharma",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `Procrastination is like a credit card, it’s a lot of fun until you get the bill.`,
    images: [],
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "sohamShah",
        },
      ],
      dislikedBy: [],
    },
    username: "keshavThakur",
    firstName: "Keshav",
    lastName: "Thakur",
    profileImage:
      "https://ik.imagekit.io/ankit9015/social_media/gaspar-uhas-j_DmMNZK-jo-unsplash_BTjWdZsV1e.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamSoni",
        firstName: "Shubham",
        lastName: "Soni",
        profileImage:
          "https://ik.imagekit.io/ankit9015/social_media/jeet-dhanoa-sR1BaDlRSKM-unsplash_x9vb2M14sU.jpg",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
