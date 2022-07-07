import React from "react";
import { connect } from "react-redux";
import { setUsersAC, toggleSubscribeAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    subscribe: (userId) => {
      dispatch(toggleSubscribeAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
