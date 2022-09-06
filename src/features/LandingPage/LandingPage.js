import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostAddIcon } from "../../icon";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Post-it";
  });
  return (
    <main className="landing-page flex-row">
      <section className="landing-page__image">
        <img src="./landing-image.svg" alt="laniding" />
      </section>
      <section className="landing-page__content flex-column">
        <h1 className="landing-page__logo logo">
          <PostAddIcon fontSize="inherit" /> Post-It
        </h1>
        <div>
          <p className="text-md slogan">
            Write what's on your mind and
            <span className="highlight text-lg">
              <PostAddIcon fontSize="inherit" /> Post-It
            </span>
          </p>
          <p className="text-md">
            <span className="highlight text-lg">Follow</span> people around the
            globe
          </p>
          <p className="text-md">
            <span className="highlight text-lg">Connect</span> with your friends
          </p>
        </div>
        <button
          className="button button-primary text-md"
          onClick={() => navigate("../signup")}
        >
          Join Now
        </button>
        <p
          className="highlight pointer text-md"
          onClick={() => navigate("../login")}
        >
          Already have an account
        </p>
      </section>
    </main>
  );
}

export default LandingPage;
