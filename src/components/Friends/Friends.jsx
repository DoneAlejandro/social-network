import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.scss";

const Friends = () => {
  return (
    <div className={s.friends}>
      <div className={s.title}>Friends</div>
      <div className={s.friendsBox}>
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};

export default Friends;
