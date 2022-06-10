import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.state.map((m) => (
    <Post
      message={m.message}
      likeCount={m.likeCount}
      key={Math.random() * 100}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.posts}>
      <h3 className={s.postsTitle}>My posts</h3>
      <div>
        <div className={s.postsArea}>
          <textarea ref={newPostElement}></textarea>
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
