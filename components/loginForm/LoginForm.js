import React, { useState } from "react";

export default function LoginForm() {
  const [data, setData] = useState({
    correo: "",
    clave: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(data.correo + "" + "" + data.clave);
  };

  return (
    <form onSubmit={enviarDatos}>
      <div className="mb-3">
        <label className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          name="correo"
          placeholder="Ingrese su correo"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Clave</label>
        <input
          type="password"
          className="form-control"
          name="clave"
          placeholder="Ingrese su contraseña"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Ingresar
      </button>
    </form>
  );
}
