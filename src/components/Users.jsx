import React, { useState } from "react";

const users = [
  { name: "John Doe", id: 1, career: "Software engineer" },
  { name: "Jane Doe", id: 2, career: "Data Scientist" },
  { name: "Billy Doe", id: 3, career: "Cyber Security Analyst" }
];

function Users({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.career}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
