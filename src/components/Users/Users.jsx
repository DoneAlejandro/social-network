import React from "react";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <img src={u.userPhoto} />
            </div>
            ;
            <div>
              <button></button>
            </div>
            ;
            <div>
              <span>{u.fullName}</span>
              <span>{u.status}</span>
            </div>
            ;
            <div>
              <span> {u.location.country} </span>
              <span> {u.location.city} </span>
            </div>
            ;
          </div>
        );
      })}
    </div>
  );
};

export default Users;
