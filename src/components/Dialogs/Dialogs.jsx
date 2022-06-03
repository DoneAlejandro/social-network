import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";



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

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Алексей" id="1" />
        <DialogItem name="Степан" id="2" />
        <DialogItem name="Василий" id="3" />
        <DialogItem name="Инакентий" id="4" />
        <DialogItem name="Фёдор" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Привет" />
        <Message message="Как дела?" />
        <Message message="Что делаешь?" />
        <Message message="Пойдём завтра гулять?" />
        <Message message="Во сколько?" />
      </div>
    </div>
  );
};

export default Dialogs;
