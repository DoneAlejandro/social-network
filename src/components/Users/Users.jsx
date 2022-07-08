import React from "react";
import styleOfUsers from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={styleOfUsers.usersBox}>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <img className={styleOfUsers.userPhoto} src={u.userPhoto} />
            </div>

            <div>
              {u.subscribe ? (
                <button
                  onClick={() => {
                    props.subscribe(u.id);
                  }}
                >
                  Отписаться
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.subscribe(u.id);
                  }}
                >
                  Подписаться
                </button>
              )}
            </div>

            <div>
              <span className={styleOfUsers.fullName}>{u.fullName}</span>
              <span>{u.status}</span>
            </div>

            <div>
              <span> {u.location.country} </span>
              <span> {u.location.city} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
