import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function ApiTutorial() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(t('ApiError'), error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('ApiTutorialHeading')}</h2>
      <p>
        {t('ApiTutorialDescription')}
      </p>

      <h3>{t('ApiExample')}</h3>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '100%' }}>
        <code>
            {`const [data, setData] = useState([]);\nconst [loading, setLoading] = useState(true);\n\nuseEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then((response) => response.json())\n      .then((data) => {\n        setData(data);\n        setLoading(false);\n      })\n      .catch((error) => {\n        console.error('${t('ApiError')}', error);\n        setLoading(false);\n      });\n}, []);`}
        </code>
      </pre>
      {t('ApiResult')}:
      {loading ? (
        <p>{t('Loading')}</p>
      ) : (
        <pre style={{ backgroundColor: '#3b3d3e', color: '#fff', padding: '10px', borderRadius: '5px' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default ApiTutorial;
