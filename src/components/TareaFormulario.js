import React, { useState } from 'react';
import '../style/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    console.log('Escribiendo...');
    setInput(e.target.value); //Extrayendo el texto ingresado por el usuario
  }

  const manejarEnvio = e => {
    e.preventDefault(); //Evitar que se cargue toda la aplicación cuando se envía el formulario
    console.log('Enviando formulario');

    const tareaNueva = {
      id: uuidv4(), //Paquete para generar ids unicos
      texto: input,
      completada: false
    }

    console.log(tareaNueva); 
    props.onSubmit(tareaNueva);  
  }

    return(
      <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>
        <input 
          className='tarea-input'
          type='text'
          placeholder='Escribe una tarea'
          name='texto'
          onChange={manejarCambio}
        />
        <button 
          className='tarea-boton'
          
          >
          Agregar tarea
        </button>
      </form>
    );
}

export default TareaFormulario;