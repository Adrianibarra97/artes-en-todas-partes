import React from 'react';

export const Footer = () => {
  return (
    <footer className = "footer">
      <div className = "footer-pays">
        <div className = "footer-pays-item">
          <h6>Métodos de pago</h6>
          <ul>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
          </ul>
        </div>
        <div className = "footer-pays-item">
          <h6>Métodos de envío</h6>
          <ul>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
           <li>@</li>
          </ul>
        </div>
        <div className = "footer-pays-item">
          <h6>contactos</h6>
          <div>
           <li>@mail: artesEnTodasPartes@gmail.com</li>
           <li>@Teléfono: 1543765958</li>
           <li>@Dirección: Matanza 23254, San Martín.</li>
          </div>
        </div>
      </div>
      <div className = "footer-devs">
        <p>Artes en todas partes - AdriWebs&copy;</p>
      </div>
    </footer>
  )
}