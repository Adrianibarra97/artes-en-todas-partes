import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header className = "header">
      <div className = "logo">
        <span>@</span>
      </div>
      <nav className = "nav">
        <ul>
          <li>
            <NavLink 
              to = "/home" 
              className = {({isActive}) => isActive ? "active" : ""}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink
              to = "/products"
              className = {({isActive}) => isActive ? "active" : ""}
            >Productos</NavLink>
          </li>
          <li>
            <NavLink
              to = "/contact"
              className = {({isActive}) => isActive ? "active" : ""}
            >Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}