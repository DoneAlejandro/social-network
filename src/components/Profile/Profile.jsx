import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://ka-ap.ru/wp-content/uploads/f/1/2/f12ae9b5d6e525b8e2c0269ad8d1bd36.jpeg" />
      </div>
      <div>
        <img src="https://luckywings.ru/wp-content/uploads/2020/04/staryj-avtomobil-kuba-768x1024.jpg" />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
