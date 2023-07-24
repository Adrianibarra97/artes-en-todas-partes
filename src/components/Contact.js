import React from 'react';

export const Contact = () => {
  const handleContactExit = () => {
    const contactForm = document.getElementById('contact-component')
    contactForm.style.display = 'none'
  }

  return (
    <div id = "contact-component" className = "contact-container">
      <form className = "contact-container-form">
        <button
          className = "contact-button contact-exit-button"
          onClick = { () => handleContactExit() }
        >X</button>
        <fieldset className = "w-100 h-100">
          <div className = "d-flex justify-content-center">
            <legend className = "d-flex justify-content-center text-white">Contactanos</legend>
          </div>
          <div className = { window.innerWidth < window.innerHeight ? "d-flex flex-column justify-content-center": "d-flex justify-content-center" }>
            <div className = "d-flex flex-column justify-content-center m-3">
              <div className = "mb-3">
                <label for = "disabledTextInput" className = "form-label">Nombre:</label>
                <input type = "text" id = "disabledTextInput" className = "form-control" placeholder = "Nombre:" />
              </div>
              <div className = "mb-3">
                <label for = "disabledTextInput" className = "form-label">Email:</label>
                <input type = "email" id = "disabledTextInput" className = "form-control" placeholder = "Email:" />
              </div>
              <div className = "mb-3">
                <label for = "disabledTextInput" className = "form-label">Teléfono:</label>
                <input type = "phone" id = "disabledTextInput" className = "form-control" placeholder = "Teléfono:" />
              </div>
            </div>
            <div className = "d-flex flex-column justify-content-center m-3">
              <div className = "mb-3 flex-grow-2">
                <label for = "disabledTextInput" className = "form-label">Asunto:</label>
                <input type = "text" id = "disabledTextInput" className = "form-control" placeholder = "Asunto:" />
              </div>
              <div className = "mb-3 flex-grow-1">
                <label for = "disabledTextInput" className = "form-label">Mensaje:</label>
                <textarea type = "text" id = "disabledTextInput" className = "form-control" placeholder = "Mensaje:" />
              </div>
            </div>
          </div>
          <div className = "d-flex justify-content-center">
            <button type = "submit" className = "btn btn-success">Enviar Mensaje</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}