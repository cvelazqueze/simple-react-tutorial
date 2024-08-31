import React, { useState } from 'react';
import Welcome from './Welcome';
import { useTranslation } from 'react-i18next';

function EventsTutorial() {
  const { t } = useTranslation();
  const [name, setName] = useState('Mundo');
  const [greeting, setGreeting] = useState(t('Hello'));

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    setGreeting(greeting === t('Hello') ? t('Welcome') : t('Hello'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('EventHandlingInReact')}</h2>
      <p>
        {t('EventHandlingDescription')}
      </p>
      <pre>
        <code>{`const handleInputChange = (e) => {setName(e.target.value);}; \nconst handleButtonClick = () => {setGreeting(greeting === '${t('Hello')}' ? '${t('Welcome')}' : '${t('Hello')}');};\n<input \n    type="text"\n    value={name} \n    onChange={handleInputChange} \n    placeholder="${t('EnterName')}" \n    style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}\n/>
    \n<button onClick={handleButtonClick} style={{ padding: '10px', fontSize: '16px' }}>${t('ChangeGreeting')}</button>
    \n<Welcome greeting={'${greeting}'} name={'${name}'} />`}
        </code>
      </pre>
      <h3>{t('EventExample')}</h3>
      <p>{t('EventExampleDescription')}</p>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder={t('EnterName')} 
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={handleButtonClick} style={{ padding: '10px', fontSize: '16px' }}>
        {t('ChangeGreeting')}
      </button>
      <Welcome greeting={greeting} name={`${name}`} />
    </div>
  );
}

export default EventsTutorial;
