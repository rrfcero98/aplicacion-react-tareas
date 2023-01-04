import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import Logo from './components/Logo';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
