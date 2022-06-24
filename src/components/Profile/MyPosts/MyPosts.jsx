import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";
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
  let newPostText = props.newPostText;
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    // props.updateNewPostText(text);
    props.dispatch(action);
  };

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={s.posts}>
      <h3 className={s.postsTitle}>My posts</h3>
      <div>
        <div className={s.postsArea}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
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
