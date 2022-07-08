const TOGGLE_SUBSCRIBE = "TOGGLE-SUBSCRIBE";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      subscribe: false,
      userPhoto: "https://www.kino-teatr.ru/video/7243/start.jpg",
      fullName: "Alex",
      status: "Hey, whats up?",
      location: {
        country: "Russia",
        city: "Moscow",
      },
    },
    {
      id: 2,
      subscribe: false,
      userPhoto: "https://www.kino-teatr.ru/video/7243/start.jpg",
      fullName: "Fedor",
      status: "Hey, whats up?",
      location: {
        country: "Belarus",
        city: "Minsk",
      },
    },
    {
      id: 3,
      subscribe: false,
      userPhoto: "https://www.kino-teatr.ru/video/7243/start.jpg",
      fullName: "Alexandr",
      status: "Hey, whats up?",
      location: {
        country: "Russia",
        city: "Moscow",
      },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SUBSCRIBE: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, subscribe: !u.subscribe };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    default:
      return state;
  }
};

export const toggleSubscribeAC = (userId) => {
  return {
    type: TOGGLE_SUBSCRIBE,
    userId,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
