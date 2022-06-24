import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";
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
  let newMessageText = props.dialogsPage.newMessageText;

  let addMessage = () => {
    // props.addMessage();
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    // props.updateNewMessageText(text);
    props.dispatch(action);
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
          value={newMessageText}
        ></textarea>
        <button className={s.sendBtn} onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
