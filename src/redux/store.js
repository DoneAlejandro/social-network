import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// ПЕРЕМЕННЫЕ

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Алексей",
          photo:
            "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
        },
        {
          id: 2,
          name: "Степан",
          photo:
            "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
        },
        {
          id: 3,
          name: "Василий",
          photo:
            "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
        },
        {
          id: 4,
          name: "Инакентий",
          photo:
            "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
        },
        {
          id: 5,
          name: "Фёдор",
          photo:
            "https://android-obzor.com/wp-content/uploads/2022/03/45-2.jpg",
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
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hi, i`m trueing project on React", likeCount: "4" },
        { id: 2, message: "Good luck, man", likeCount: "6" },
        { id: 3, message: "You can do this, dude", likeCount: "8" },
      ],
      newPostText: "Hello, man",
    },
    sidebar: {
      navigation: [
        { id: 1, page: "Profile", to: "/profile" },
        { id: 2, page: "Message", to: "/dialogs" },
        { id: 3, page: "News", to: "/news" },
        { id: 4, page: "Music", to: "/music" },
        { id: 5, page: "Setting", to: "/settings" },
        { id: 6, page: "Friends", to: "/friends" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return store._state;
  },
  //   addPost() {
  //     let newPost = {
  //       id: 4,
  //       message: this._state.profilePage.newPostText,
  //       likeCount: 2,
  //     };
  //     this._state.profilePage.posts.push(newPost);
  //     this._state.profilePage.newPostText = "";
  //     this._callSubscriber(this._state);
  //   },
  //   addMessage() {
  //     let newMessage = {
  //       id: 6,
  //       message: this._state.dialogsPage.newMessageText,
  //     };
  //     this._state.dialogsPage.messages.push(newMessage);
  //     this._state.dialogsPage.newMessageText = "";
  //     this._callSubscriber(this._state);
  //   },
  //   updateNewPostText(newText) {
  //     this._state.profilePage.newPostText = newText;
  //     this._callSubscriber(this._state);
  //   },
  //   updateNewMessageText(newMessageText) {
  //     this._state.dialogsPage.newMessageText = newMessageText;
  //     this._callSubscriber(this._state);
  //   },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
    dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
    },
};

window.store = store;

export default store;
