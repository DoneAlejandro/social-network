import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem
      key={Math.random() * 100}
      name={d.name}
      id={d.id}
      photo={d.photo}
    />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={Math.random() * 100} message={m.message} />
  ));

  let newMessageText = state.newMessageText;

  let onAddMessage = () => {
	
    props.addMessage();
    // props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (e) => {
    
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.addBox}>
        <textarea
          className={s.textarea}
          onChange={onMessageChange}
          value={newMessageText}
        ></textarea>
        <button className={s.sendBtn} onClick={onAddMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
