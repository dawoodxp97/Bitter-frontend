import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Styles/TweetBox.css";
import db from "../firebase";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
function TweetBox() {
  const [{ user }] = useStateValue();
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: user?.displayName,
      username: user?.displayName,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: !user?.photoURL
        ? "https://cdn.iconscout.com/icon/premium/png-64-thumb/user-3286274-2738983.png"
        : user?.photoURL,
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            src={
              !user?.photoURL
                ? "https://cdn.iconscout.com/icon/premium/png-64-thumb/user-3286274-2738983.png"
                : user?.photoURL
            }
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
