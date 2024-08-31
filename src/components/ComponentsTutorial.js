import React from 'react';
import Welcome from './Welcome';

function ComponentsTutorial() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>¿Qué es un Componente en React?</h2>
      <p>
        En React, un componente es una pieza reutilizable de la interfaz de usuario. 
        Puedes pensar en los componentes como funciones de JavaScript que reciben entradas, llamadas "props", 
        y devuelven elementos React que describen lo que debería aparecer en la pantalla.
      </p>

      <h3>Ejemplo de un Componente Básico</h3>
      <pre>
        <code>
          {`function Welcome(props) {\n    return <h1>Hola, {props.name}</h1>;\n}`} 
        </code>
      </pre> 
        <p> En el ejemplo anterior, Welcome es un componente que acepta un prop llamado name y lo utiliza para mostrar un mensaje personalizado. </p>
      <h3>Componente en Acción</h3>
      <p>Para utilizar nuestro componente se utiliza la sintaxis</p>
      <pre>
        <code>
          {`import Welcome from './Welcome';\n<Welcome greeting="Hola" name="Mundo" />`} 
        </code>
      </pre> 
        <p>Donde Welcome es el nombre de nuestro componente importado desde nuestro directorio <b>./Welcome</b></p>
        <Welcome greeting ="Hola" name="Mundo" />
    </div>
        );
    }
   
export default ComponentsTutorial;
   
