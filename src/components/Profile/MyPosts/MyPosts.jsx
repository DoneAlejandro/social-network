import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostText = props.newPostText;
  let posts = props.posts

  let postsElement = posts.map((m) => (
    <Post
      message={m.message}
      likeCount={m.likeCount}
      key={Math.random() * 100}
    />
  ));
  let onPostChange = (e) => {
    let text = e.target.value;
    // let action = updateNewPostTextActionCreator(text);
    props.updateNewPostText(text);
    // props.dispatch(action);
  };

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  return (
    <div className={s.posts}>
      <h3 className={s.postsTitle}>My posts</h3>
      <div>
        <div className={s.postsArea}>
          <textarea onChange={onPostChange} value={newPostText} />
        </div>
        <div className={s.postsBtn}>
          <button onClick={onAddPost}>Send message</button>
        </div>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
