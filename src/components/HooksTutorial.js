import React, { useState, useEffect, createContext, useContext, useReducer, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ThemeContext = createContext();

function HooksTutorial() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [theme, setTheme] = useState('light');
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '20px' }}>
        <h2>{t('HooksInReact')}</h2>
        <p>{t('HooksDescription')}</p>

        <h3>{t('UseState')}</h3>
        <p>{t('UseStateDescription')}</p>
        <pre>
          <code>
            {`const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)} style={{ padding: '10px', fontSize: '16px' }}>\nconsole.log("${t('Count')}: ", ${count})`}
          </code>
        </pre>
        <p>{t('CurrentState')}: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)} style={{ padding: '10px', fontSize: '16px' }}>
          {t('IncrementCounter')}
        </button>

        <h3>{t('UseEffect')}</h3>
        <p>{t('UseEffectDescription')}</p>
        <pre>
          <code>
            {`const [time, setTime] = useState(new Date().toLocaleTimeString());\nuseEffect(() => {\n  const timer = setInterval(() => {\n    setTime(new Date().toLocaleTimeString());\n  }, 1000);\n\n  return () => clearInterval(timer);\n}, []);\nconsole.log("${t('Time')}: ", ${time})`}
          </code>
        </pre>
        <p>{t('CurrentTime')}: <strong>{time}</strong></p>

        <h3>{t('UseContext')}</h3>
        <p>{t('UseContextDescription')}</p>
        <pre>
          <code>
            {`const [theme, setTheme] = useState('light');\n<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>\nconsole.log("${t('Theme')}: ", ${theme})`}
          </code>
        </pre>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} style={{ padding: '10px', fontSize: '16px' }}>
          {t('ChangeTheme')}
        </button>
        <ThemedComponent />

        <h3>{t('UseReducer')}</h3>
        <p>{t('UseReducerDescription')}</p>
        <pre>
          <code>
            {`const [state, dispatch] = useReducer(countReducer, { count: 0 });\n<button onClick={() => dispatch({ type: 'increment' })}>\n<button onClick={() => dispatch({ type: 'decrement' })}>`}
          </code>
          <code>
            {`\n\nfunction countReducer(state, action) {\n    switch (action.type) {\n      case 'increment':\n        return { count: state.count + 1 };\n      case 'decrement':\n        return { count: state.count - 1 };\n      default:\n        return state;\n    }\nconsole.log("${t('StateCount')}: ", ${state.count})}`}
          </code>
        </pre>
        <p>{t('Counter')}: <strong>{state.count}</strong></p>
        <button onClick={() => dispatch({ type: 'increment' })} style={{ marginRight: '10px', padding: '10px', fontSize: '16px' }}>
          {t('Increment')}
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })} style={{ padding: '10px', fontSize: '16px' }}>
          {t('Decrement')}
        </button>

        <h3>{t('UseRef')}</h3>
        <p>{t('UseRefDescription')}</p>
        <input ref={inputRef} type="text" placeholder={t('TypeSomething')} style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }} />
        <button onClick={focusInput} style={{ padding: '10px', fontSize: '16px' }}>
          {t('FocusInput')}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
    const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  const style = {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    textAlign: 'center',
  };

  return <div style={style}>{t('CurrentTheme')}: {theme}</div>;
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
