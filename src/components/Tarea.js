import React from "react";
import "../style/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai"; //Usando paquete de react-icons, especificamente Ant Design Icons

function Tarea({ texto, completada }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-contendor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" /> {/* Se agrega el icono como un componente de React */}
      </div>
    </div>
  );
}

export default Tarea;
