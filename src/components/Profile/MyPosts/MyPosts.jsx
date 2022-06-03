import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Send message</button>
      </div>
      <div>
        <Post message="Hi, i`m trueing project on React" likeCount="4" />
        <Post message="Good luck, man" likeCount="6" />
        <Post message="You can do this, dude" likeCount="8" />
      </div>
    </div>
  );
};

export default MyPosts;
