import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
// import store from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/storeContext";

const MyPostsContainer = () => {
  debugger;
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        //  ФУНКЦИЯ ДОБАВЛЕНИЯ ПОСТА
        // ПРОПСАМИ ДИСПАТЧИТ В СЕБЯ ВЫЗОВ ЭКШНКРЕЭЙТЕР
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
