import React, { useState } from "react"; //Importando hook de otra forma
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import "../style/ListaDeTareas.css";

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
        
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } else {
      alert('La tarea está vacía');
    }

  };

  return (
    //Un componente no puede tener más de un div al mismo nivel
    //Los fragmentos <></> en react sirven solo para mantener un orden en el código y a la hora de compilar desaparacen
    <>
      <TareaFormulario
        onSubmit={agregarTarea}      
      />
      <div className="tareas-lista-contenedor">
        { //Renderizando una lista de componentes, cada tarea se mostrará como un objeto en el array
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id} //Se debe pasar doble para evitar errores
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
