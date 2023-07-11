import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header className = "header">
      {/* <div className = "logo">
        <figure className = "logo-figure">
          <img 
            className = "logo-img"
            src = {"/images/logo2.png"}
            alt = "logo"
          />
        </figure>
      </div> */}
      <nav className = "navbar navbar-expand-lg navbar-dark bg-dark nav-style">
        <div className = "container-fluid">
          <button
            className = "navbar-toggler" 
            type = "button"
            data-bs-toggle = "collapse"
            data-bs-target = "#navbarSupportedContent"
            aria-controls = "navbarSupportedContent"
            aria-expanded = "false"
            aria-label = "Toggle navigation"
          >
            <span className = "navbar-toggler-icon"></span>
          </button>
          <NavLink className = "navbar-brand" to = "/home">Artes En todas Partes</NavLink>
          <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
            <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
              <li className = "nav-item">
                <NavLink 
                  className = "nav-link active nav-link-component"
                  aria-current = "page"
                  to = "/home"
                >Inicio</NavLink>
              </li>
              <li className = "nav-item">
                <NavLink 
                  className = "nav-link active nav-link-component"
                  aria-current = "page"
                  to = "/products"
                >Productos</NavLink>
              </li>
              <li className = "nav-item">
                <NavLink
                  className = "nav-link active nav-link-component"
                  to = "/contact"
                >Contacto</NavLink>
              </li>
            </ul>
            <form className = "d-flex">
              <input 
                className = "form-control me-2"
                type = "search"
                placeholder = "Buscar..."
                aria-label = "Search"
              />
              <button className = "btn btn-outline-success" type = "submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}