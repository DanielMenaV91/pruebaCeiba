import React, { Fragment, useState } from "react";

export default function CreateUserForm() {
  const [data, setData] = useState({
    name: "",
    job: "",
  });

  const postCreate = (credencial) => {
    let url = "https://reqres.in/api/users";
    const token = localStorage.getItem("token");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(credencial),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    postCreate(data);
  };

  return (
    <Fragment>
      <form onSubmit={enviarDatos}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Ingrese el nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Trabajo</label>
          <input
            type="text"
            className="form-control"
            name="job"
            placeholder="Ingrese el trabajo"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Guardar
        </button>
      </form>
    </Fragment>
  );
}
