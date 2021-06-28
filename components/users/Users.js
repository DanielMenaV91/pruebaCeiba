import React, { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState({
    data: [],
  });
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const url = "https://reqres.in/api/users?page=2";
    const token = localStorage.getItem("token");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };
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
