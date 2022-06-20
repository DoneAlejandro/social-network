import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem
      key={Math.random() * 100}
      name={d.name}
      id={d.id}
      photo={d.photo}
    />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message key={Math.random() * 100} message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.addBox}>
        <textarea
          className={s.textarea}
          ref={newMessageElement}
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
        ></textarea>
        <button className={s.sendBtn} onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
