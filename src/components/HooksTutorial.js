import React, { useState, useEffect, createContext, useContext, useReducer, useRef } from 'react';
const ThemeContext = createContext();

function HooksTutorial() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [theme, setTheme] = useState('light');
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // useEffect para actualizar el tiempo cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
    <div style={{ padding: '20px' }}>
      <h2>Hooks en React</h2>
      <p>
        Los hooks son una nueva adición en React 16.8 que te permiten usar estado y otras 
        características de React sin escribir una clase.
      </p>

      <h3>useState</h3>
      <p>
        El hook <b>useState</b> te permite añadir estado local a componentes funcionales. 
        Aquí tienes un ejemplo simple:
      </p>
      <pre>
        <code>
          {`const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)} style={{ padding: '10px', fontSize: '16px' }}>\nconsole.log("Count:", ${count})`}
        </code>
      </pre>
      <p>
        El estado actual es: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px', fontSize: '16px' }}>
        Incrementar Contador
      </button>

      <h3>useEffect</h3>
      <p>
        El hook <b>useEffect</b> te permite realizar efectos secundarios en componentes funcionales. 
        Es similar a <b>componentDidMount</b>, <b>componentDidUpdate</b>, y <b>componentWillUnmount </b> 
        combinados en clases.
      </p>
      <pre>
        <code>
          {`const [time, setTime] = useState(new Date().toLocaleTimeString());\nuseEffect(() => {\n  const timer = setInterval(() => {\n    setTime(new Date().toLocaleTimeString());\n  }, 1000);\n\n  return () => clearInterval(timer);\n}, []);\nconsole.log("time:", ${time})`}
        </code>
      </pre>
      <p>
        La hora actual es: <strong>{time}</strong>
      </p>
      <h3>useContext</h3>
      <p>
        El hook <b>useContext</b> se usa para consumir un contexto, que es una forma de 
        pasar datos a través del árbol de componentes sin pasar props manualmente en cada nivel.
      </p>
      <pre>
        <code>
          {`const [theme, setTheme] = useState('light');\n<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>\nconsole.log("theme: ", ${theme})`}
        </code>
      </pre>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} style={{ padding: '10px', fontSize: '16px' }}>
        Cambiar Tema
      </button>
      <ThemedComponent />
      <h3>useReducer</h3>
      <p>
        El hook <b>useReducer</b> es una alternativa a <b>useState</b>, y es útil para manejar 
        lógica de estado más compleja, especialmente cuando hay múltiples subvalores o lógica complicada.
      </p>
      <pre>
        <code>
          {`const [state, dispatch] = useReducer(countReducer, { count: 0 });\n<button onClick={() => dispatch({ type: 'increment' })}>\n<button onClick={() => dispatch({ type: 'decrement' })}>`}
        </code>
        <code>
          {`\n\nfunction countReducer(state, action) {\n    switch (action.type) {\n      case 'increment':\n        return { count: state.count + 1 };\n      case 'decrement':\n        return { count: state.count - 1 };\n      default:\n        return state;\n    }\nconsole.log("State Count:", ${state.count})}`}
        </code>
      </pre>
      <p>
        Contador: <strong>{state.count}</strong>
      </p>
      <button onClick={() => dispatch({ type: 'increment' })} style={{ marginRight: '10px', padding: '10px', fontSize: '16px' }}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ padding: '10px', fontSize: '16px' }}>
        Decrementar
      </button>
      <h3>useRef</h3>
      <p>
        El hook <b>useRef</b> te permite acceder directamente a un elemento DOM o almacenar 
        valores persistentes entre renders sin causar un re-renderizado.
      </p>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }} />
      <button onClick={focusInput} style={{ padding: '10px', fontSize: '16px' }}>
        Enfocar Input
      </button>
    </div>
  </ThemeContext.Provider>
  );
}

function ThemedComponent() {
    const theme = useContext(ThemeContext);
  
    const style = {
      padding: '10px',
      margin: '10px 0',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      textAlign: 'center',
    };
  
    return <div style={style}>El tema actual es: {theme}</div>;
}

function countReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
}
export default HooksTutorial;
