import React from "react";
import "./Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
import { auth } from "../firebase";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ user }] = useStateValue();
  const History = useHistory();
  const handleSignOut = () => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        auth.signOut();
        History.push("/");
      }
    });
  };
  return (
    <div className="header">
      <div className="tw_icon">
        <div className="twitter_logo">
          <TwitterIcon className="tweet_logo" />
        </div>
      </div>
      <div className="header_div">
        <div className="s_icon_div">
          <SearchIcon className="s_icon" />
        </div>
        <div className="search_input">
          <form>
            <label>
              <input
                className="s_input"
                type="text"
                name="name"
                placeholder="Search Bitter..."
              />
            </label>
          </form>
        </div>
        {!user ? (
          ""
        ) : (
          <div className="user_avatar">
            {!user?.photoURL ? (
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/user-3286274-2738983.png"
                alt=""
              ></img>
            ) : (
              <img src={user?.photoURL} alt=""></img>
            )}
            <div onClick={handleSignOut} className="drop_down">
              <span>Sign out</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
