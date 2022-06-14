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
  },
  profilePage: {
    posts: [
      { id: 1, message: "Hi, i`m trueing project on React", likeCount: "4" },
      { id: 2, message: "Good luck, man", likeCount: "6" },
      { id: 3, message: "You can do this, dude", likeCount: "8" },
    ],
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

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 4,
    message: { postMessage },
    likeCount: 2,
  };
  state.profilePage.posts.push(newPost);
};

export default state;
