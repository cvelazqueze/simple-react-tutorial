import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComponentsTutorial from "./components/ComponentsTutorial";
import StateTutorial from "./components/StateTutorial";
import EventsTutorial from "./components/EventsTutorial";
import ApiTutorial from "./components/ApiTutorial";
import HooksTutorial from "./components/HooksTutorial";

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '20px'}}>
        <h1>Simple React: Tutorial Interactivo</h1>
        <p>
          ¡Bienvenido! Este tutorial te guiará a través de los conceptos básicos de React,
          explicados de manera simple y visual. Navega a través de las secciones para aprender
          más sobre cada tema.
        </p>
        <div>
          <Link to = "/components"><button style={{ margin: '10px' }}>Componentes</button></Link>
          <Link to = "/state"><button style={{ margin: '10px' }}>Estado</button></Link>
          <Link to = "/events"><button style={{ margin: '10px' }}>Eventos</button></Link>
          <Link to = "/api"><button style={{ margin: '10px' }}>Consumo de APIs</button></Link>
          <Link to = "/hooks"><button style={{ margin: '10px' }}>Hooks</button></Link>
          {/* Agregar más botones según sea necesario */}
        </div>
      </div>

      <Routes>
        <Route path="/components" element={<ComponentsTutorial/>}/>
        <Route path="/state" element={<StateTutorial/>}/>
        <Route path="/events" element={<EventsTutorial/>}/>
        <Route path="/api" element={<ApiTutorial/>}/>
        <Route path="/hooks" element={<HooksTutorial/>}/>
      </Routes>
    </Router>
  );
}

export default App;
