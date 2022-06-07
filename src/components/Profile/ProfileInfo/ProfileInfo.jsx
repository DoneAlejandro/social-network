import React from "react";
import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://ka-ap.ru/wp-content/uploads/f/1/2/f12ae9b5d6e525b8e2c0269ad8d1bd36.jpeg" />
      </div>
      <div className={s.avatarProfile}>
        <img className={s.avatarProfileImg} src="https://luckywings.ru/wp-content/uploads/2020/04/staryj-avtomobil-kuba-768x1024.jpg" />
      </div>
    </div>
  );
};

export default ProfileInfo;
