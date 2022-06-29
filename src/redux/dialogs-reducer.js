const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Алексей",
      photo: "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
    },
    {
      id: 2,
      name: "Степан",
      photo: "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
    },
    {
      id: 3,
      name: "Василий",
      photo: "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
    },
    {
      id: 4,
      name: "Инакентий",
      photo: "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
    },
    {
      id: 5,
      name: "Фёдор",
      photo: "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
    },
  ],
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Что делаешь?" },
    { id: 4, message: "Пойдём завтра гулять?" },
    { id: 5, message: "Во сколько?" },
  ],
  newMessageText: "Hay, dude!",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
  };
};

export default dialogsReducer;