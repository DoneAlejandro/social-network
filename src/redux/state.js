let renderEntireTree = () => {
  console.log("State changed");
};

let state = {
  dialogsPage: {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likeCount: 2,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  renderEntireTree(state);
};
export const updateNewMessageText = (newMessageText) => {
  state.dialogsPage.newMessageText = newMessageText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
