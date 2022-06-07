import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.scss";

const DialogItem = (props) => {
  const activeLink = ({ isActive }) => (isActive ? s.active : s.dialog);
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} className={activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
