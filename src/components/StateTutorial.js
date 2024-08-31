import React, { useState } from 'react';
import Welcome from './Welcome';
import { useTranslation } from 'react-i18next';

function StateTutorial() {
  const { t } = useTranslation();
  const [name, setName] = useState('Mundo');

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('WhatIsState')}</h2>
      <p>
        {t('StateDescription')}
      </p>

      <h3>{t('UseStateExample')}</h3>
      <pre>
        <code>
          {`const [name, setName] = useState('Mundo');\nfunction Welcome(props) { return <h1>${t('Hello')}, {props.name}</h1>; }\nfunction StateTutorial(){\n    return (\n<div>\n<input\n    type="text"\n    value={name}\n    onChange={(e) => setName(e.target.value)}\n    placeholder="${t('EnterName')}"\n/>\n<Welcome greeting="${t('Hello')}" name=${name}/>\n</div> );\n}`} 
        </code>
      </pre>

      <h3>{t('ModifyState')}</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder={t('EnterName')} 
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <Welcome greeting={t('Hello')} name={name} />
    </div>
  );
}

export default StateTutorial;
