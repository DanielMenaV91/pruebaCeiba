import React, { Fragment, useState } from "react";

export default function CreateUserForm() {
  const [data, setData] = useState({
    nombre: "",
    trabajo: "",
    id: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(data.nombre + "" + "" + data.trabajo + "" + data.id);
  };

  return (
    <Fragment>
      <form onSubmit={enviarDatos}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Ingrese el nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Trabajo</label>
          <input
            type="text"
            className="form-control"
            name="trabajo"
            placeholder="Ingrese el trabajo"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            name="id"
            placeholder="Ingrese el id"
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
