import React, { useState, useEffect } from 'react';

function ApiTutorial() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ejemplo de consumo de API utilizando fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al consumir la API:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Consumo de APIs en React</h2>
      <p>
        El consumo de APIs es una parte fundamental del desarrollo web moderno. En React, 
        podemos utilizar el hook <b>useEffect</b> para realizar peticiones a APIs y actualizar 
        el estado del componente con los datos obtenidos.
      </p>

      <h3>Ejemplo de Consumo de API</h3>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '100%' }}>
        <code>
            {`const [data, setData] = useState([]);\nconst [loading, setLoading] = useState(true);\n\nuseEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then((response) => response.json())\n      .then((data) => {\n        setData(data);\n        setLoading(false);\n      })\n      .catch((error) => {\n        console.error('Error al consumir la API:', error);\n        setLoading(false);\n      });\n}, []);`}
        </code>
      </pre>
      Nos otorga como resultado:
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        // <ul>
        //   {data.map((user) => (
        //     <li key={user.id}>{user.name} - {user.email}</li>
        //   ))}
        // </ul>
        <pre style={{ backgroundColor: '#3b3d3e', color: '#fff', padding: '10px', borderRadius: '5px' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default ApiTutorial;
