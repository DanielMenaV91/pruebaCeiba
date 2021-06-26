import React from "react";

export default function Users({ users }) {
  return (
    <ul className="list-group">
      {users.data.map((user) => (
        <li className="list-group-item" key={user.id}>
          <div>
            <h5>{`Correo: ${user.email}`}</h5>
          </div>
          <strong>
            <h5>Imagen de la persona</h5>
          </strong>
          <img src={user.avatar}></img>
        </li>
      ))}
    </ul>
  );
}
