import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem key={Math.random() * 100} name={d.name} id={d.id} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message key={Math.random() * 100} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
