import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "../Friends/Friend/Friend";
import s from "./Nav.module.scss";

const Nav = (props) => {
  const activeLink = ({ isActive }) => (isActive ? s.active : s.item);
  //   let navElements = props.state.navigation.map((n) => (
  //     <NavLink to={n.to}> {n.page} </NavLink>
  //   ));
  return (
    <nav className="nav">
      <div className={s.itemBox}>
        <NavLink to="/profile" className={activeLink}>
          Profile
        </NavLink>
        {/* <div>{navElements}</div> */}
      </div>
      <div className={s.itemBox}>
        <NavLink to="/dialogs" className={activeLink}>
          Message
        </NavLink>
      </div>
      <div className={s.itemBox}>
        <NavLink to="/news" className={activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.itemBox}>
        <NavLink to="/music" className={activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.itemBox}>
        <NavLink to="/settings" className={activeLink}>
          Setting
        </NavLink>
      </div>
      <div className={s.itemBox}>
        <NavLink to="/friends" className={activeLink}>
          Friends
          <div className={s.friendBox}>
            <Friend />
            <Friend />
            <Friend />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
