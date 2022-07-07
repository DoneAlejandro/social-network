const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi, i`m trueing project on React", likeCount: "4" },
    { id: 2, message: "Good luck, man", likeCount: "6" },
    { id: 3, message: "You can do this, dude", likeCount: "8" },
  ],
  newPostText: "Hello, man",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let postText = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: 4, message: postText, likeCount: 2 }],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
