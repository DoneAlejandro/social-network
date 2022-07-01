import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  //   debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        // store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // updateNewPostText={props.updateNewPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
