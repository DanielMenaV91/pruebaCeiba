import React from "react";

export default function Navigation({ route }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={"nav-link " + (route === "/login" ? " active" : "")}
                href="/login"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  "nav-link " + (route === "/usuarios" ? " active" : "")
                }
                href="/usuarios"
              >
                Usuarios
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + (route === "/crear" ? " active" : "")}
                href="/crear"
              >
                Crear
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
