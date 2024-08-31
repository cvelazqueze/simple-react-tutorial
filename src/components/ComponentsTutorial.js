import React from 'react';
import Welcome from './Welcome';
import { useTranslation } from 'react-i18next';

function ComponentsTutorial() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('WhatIsComponent')}</h2>
      <p>
        {t('ComponentDescription')}
      </p>

      <h3>{t('BasicComponentExample')}</h3>
      <pre>
        <code>
          {`function Welcome(props) {\n    return <h1>${t('Hello')}, {props.name}</h1>;\n}`} 
        </code>
      </pre> 
      <p>{t('BasicComponentExplanation')}</p>

      <h3>{t('ComponentInAction')}</h3>
      <p>{t('UsageSyntax')}</p>
      <pre>
        <code>
          {`import Welcome from './Welcome';\n<Welcome greeting="${t('Hello')}" name="Mundo" />`} 
        </code>
      </pre> 
      <p>{t('ImportExplanation')}</p>
      <Welcome greeting={t('Hello')} name="Mundo" />
    </div>
  );
}

export default ComponentsTutorial;
