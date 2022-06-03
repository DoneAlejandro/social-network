import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

const Nav = () => {
  const activeLink = ({ isActive }) => (isActive ? s.active : s.item);
  return (
    <nav className="nav">
      <div className={s.itemBox}>
        <NavLink to="/profile" className={activeLink}>
          Profile
        </NavLink>
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
    </nav>
  );
};

export default Nav;
