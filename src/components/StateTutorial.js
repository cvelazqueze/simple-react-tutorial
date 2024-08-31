import React, { useState } from 'react';
import Welcome from './Welcome';

function StateTutorial() {
  const [name, setName] = useState('Mundo');

  return (
    <div style={{ padding: '20px' }}>
      <h2>¿Qué es el Estado en React?</h2>
      <p>
        El estado en React es una estructura que se utiliza para contener datos o información sobre el componente. 
        Cuando el estado cambia, el componente se vuelve a renderizar para reflejar esos cambios.
      </p>

      <h3>Ejemplo de Uso de useState</h3>
      <pre>
        <code>
          {`const [name, setName] = useState('Mundo');\nfunction Welcome(props) { return <h1>Hola, {props.name}</h1>; }\nfunction StateTutorial(){\n    return (\n<div>\n<input\n    type="text"\n    value={name}\n    onChange={(e) => setName(e.target.value)}\n    placeholder="Escribe un nombre"\n/>\n<Welcome greeting="Hola" name=${name}/>\n</div> );\n}`} 
        </code>
        </pre>
        <h3>Modifica el Estado</h3>
         <input 
           type="text" 
           value={name} 
           onChange={(e) => setName(e.target.value)} 
           placeholder="Escribe un nombre" 
           style={{ padding: '10px', fontSize: '16px' }}
         />
         <Welcome greeting="Hola" name={name} />
       </div>
     );
   }

export default StateTutorial;