import React, { useState } from "react";
import "./Styles/Login.css";
import Glogo from "./images/g_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import EditAttributesOutlinedIcon from "@material-ui/icons/EditAttributesOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useHistory } from "react-router";
import { auth, provider } from "../firebase";
import { Link } from "react-router-dom";

function Login() {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result) {
          console.log(result);
          History.push("/homepage");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        History.push("/homepage");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
  };
  return (
    <div className="login">
      <div className="login_left">
        <div className="login_left_info">
          <div className="login_left_info_item1">
            <div>
              <h2>You're one step away from the shiny new Bitter.com </h2>
              <h5>We've added tons of cool features, including...</h5>
            </div>
          </div>
          <div className="login_left_info_item2">
            <SearchIcon className="icons" />
            <div>
              <h4>Explore</h4>
              <p>Get the latest Tweets, news and videos in one place.</p>
            </div>
          </div>
          <div className="login_left_info_item3">
            <BookmarkBorderOutlinedIcon className="icons" />
            <div>
              <h4>Bookmarks</h4>
              <p>Save that interesting Tweet for later.</p>
            </div>
          </div>
          <div className="login_left_info_item4">
            <EditAttributesOutlinedIcon className="icons" />
            <div>
              <h4>Personalize</h4>
              <p>Choose from new themes and more dark mode options .</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login_right">
        <div className="form_group">
          <form className="form">
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form_input"
            />

            <h5>Password</h5>
            <input
              type="password"
              className="form_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login_signInButton"
            >
              Sign In
            </button>
          </form>
          <div className="login_logos">
            <img onClick={googleAuth} className="g_logo" alt="" src={Glogo} />
          </div>
        </div>
        <div className="login_right_info">
          <div>
            <TwitterIcon className="twitter_icon" />
            <div className="right_info_item">
              <h2>See what's happening in the world right now</h2>
              <h5>Join Bitter Today</h5>
              <Link to="/signup">
                <button className="signup_btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
