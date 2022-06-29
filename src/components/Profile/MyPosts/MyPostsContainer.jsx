import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  //  ФУНКЦИЯ ДОБАВЛЕНИЯ ПОСТА
  // ПРОПСАМИ ДИСПАТЧИТ В СЕБЯ ВЫЗОВ ЭКШНКРЕЭЙТЕР
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;