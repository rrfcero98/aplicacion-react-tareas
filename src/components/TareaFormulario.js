import React from 'react';
import '../style/TareaFormulario.css';

function TareaFormulario(props) {
    return(
      <form className='tarea-formulario'>
        <input 
          className='tarea-input'
          type='text'
          placeholder='Escribe una tarea'
          name='texto'
        />
        <button 
          className='tarea-boton'>
          Agregar tarea
          </button>
      </form>
    );
}

export default TareaFormulario;