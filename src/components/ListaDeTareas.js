import React, { useState } from "react"; //Importando hook de otra forma
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import "../style/ListaDeTareas.css";

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  return (
    //Un componente no puede tener más de un div al mismo nivel
    //Los fragmentos <></> en react sirven solo para mantener un orden en el código y a la hora de compilar desaparacen
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        { //Renderizando una lista de componentes, cada tarea se mostrará como un objeto en el array
          tareas.map((tarea) =>
            <Tarea 
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
