import React from "react";
// import { Route, Routes } from "react-router-dom";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem
      key={Math.random() * 100}
      name={d.name}
      id={d.id}
      photo={d.photo}
    />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message key={Math.random() * 100} message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let textMsg = newMessageElement.current.value;
    alert(textMsg);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      {/* <Routes>
        <Route path="/message" element={<Message />} />
      </Routes> */}
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.addBox}>
        <textarea className={s.textarea} ref={newMessageElement}></textarea>
        <button className={s.sendBtn} onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
