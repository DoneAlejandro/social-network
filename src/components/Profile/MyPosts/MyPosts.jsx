import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((m) => (
    <Post
      message={m.message}
      likeCount={m.likeCount}
      key={Math.random() * 100}
    />
  ));

  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let addPost = () => {
    props.addPost();
  };

  return (
    <div className={s.posts}>
      <h3 className={s.postsTitle}>My posts</h3>
      <div>
        <div className={s.postsArea}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div className={s.postsBtn}>
          <button onClick={addPost}>Send message</button>
        </div>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
