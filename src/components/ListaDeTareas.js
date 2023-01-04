import React from 'react';
import TareaFormulario from './TareaFormulario';
import '../style/ListaDeTareas.css';

function ListaDeTareas () {
    return(
        //Un componente no puede tener más de un div al mismo nivel
        //Los fragmentos <></> en react sirven solo para mantener un orden en el código y a la hora de compilar desaparacen
        <>
          <TareaFormulario />
          <div className='tareas-lista-contenedor'>
            LISTA DE TAREAS
          </div>    
        </>
    );
}

export default ListaDeTareas;