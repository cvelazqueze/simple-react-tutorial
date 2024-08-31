import React, { useState } from 'react';
import Welcome from './Welcome';

function EventsTutorial() {
  const [name, setName] = useState('Mundo');
  const [greeting, setGreeting] = useState('Hola');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    setGreeting(greeting === 'Hola' ? 'Bienvenido' : 'Hola');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Manejo de Eventos en React</h2>
      <p>
        Los eventos en React funcionan de manera similar a como lo hacen en HTML. 
        Puedes escuchar eventos como clics, cambios en un input, o envío de formularios y manejar 
        esas interacciones a través de funciones.
      </p>
      <pre>
        <code>{`const handleInputChange = (e) => {setName(e.target.value);}; \nconst handleButtonClick = () => {setGreeting(greeting === 'Hola' ? 'Bienvenido' : 'Hola');};\n<input \n    type="text"\n    value={name} \n    onChange={handleInputChange} \n    placeholder="Escribe un nombre" \n    style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}\n/>
    \n<button onClick={handleButtonClick} style={{ padding: '10px', fontSize: '16px' }}>Cambiar Saludo</button>
    \n<Welcome greeting={'${greeting}'} name={'${name}'} />`}
        </code>
      </pre>
      <h3>Ejemplo de Eventos</h3>
      <p>Escribe un nombre y luego cambia el saludo con el botón:</p>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Escribe un nombre" 
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={handleButtonClick} style={{ padding: '10px', fontSize: '16px' }}>
        Cambiar Saludo
      </button>
      <Welcome greeting={greeting} name={`${name}`} />
    </div>
  );
}

export default EventsTutorial;
