import React, { useState } from "react";
import { useRouter } from "next/router";
export default function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const router = useRouter();

  const postLogin = (credencial) => {
    let url = "https://reqres.in/api/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(credencial),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((rest) => rest.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        router.push("/");
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
    postLogin(data);
  };

  return (
    <form onSubmit={enviarDatos}>
      <div className="mb-3">
        <label className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Ingrese su correo"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Clave</label>
        <input
          type="password"
          className="form-control"
          name="password"
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
