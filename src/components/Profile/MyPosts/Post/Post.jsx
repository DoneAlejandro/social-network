import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://main-cdn.sbermegamarket.ru/hlr-system/449/305/976/813/202/6/600004299608b0.jpeg"
        alt="avatar"
      />
      {props.message}
      <div className={s.likeBox}>
        <span>
          Like
          <span className={s.like}>{props.likeCount}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
