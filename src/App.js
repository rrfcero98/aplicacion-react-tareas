import './App.css';
import Logo from './components/Logo';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario  />
        <Tarea texto='Esto es la primer tarea' completada={true} />
        <Tarea texto='Esto es la segunda tarea' completada={false} />
      </div>
    </div>
  );
}

export default App;
