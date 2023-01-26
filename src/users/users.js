import React from "react";
const Users = ({ users = [] }) => {
  if (users.length <= 0) {
    return <h1>Items not found</h1>;
  } else {
    return (
      <div>
        <ol>
          {users.map((users, index) => (
            <li key={index}>{users}</li>
          ))}
        </ol>
      </div>
    );
  }
};

export default Users;
