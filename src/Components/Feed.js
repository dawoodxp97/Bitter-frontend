import React, { useEffect, useState } from "react";
import db from "../firebase";
import Post from "./Post";
import Sidebar from "./Sidebar";
import "./Styles/Feed.css";
import TweetBox from "./TweetBox";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      <div className="home_feed">
        <div className="sidebaar_div">
          <Sidebar />
        </div>
        <div className="feed">
          <TweetBox />
          {posts.map((post, key) => (
            <Post
              key={key}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </div>
      </div>
      <div className="twitter_embed">
        <a
          class="twitter-timeline"
          href="https://twitter.com/javascript_tips?ref_src=twsrc%5Etfw"
        >
          Tweets by javascript_tips
        </a>
      </div>
    </>
  );
}

export default Feed;
