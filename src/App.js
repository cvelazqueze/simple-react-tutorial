import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComponentsTutorial from "./components/ComponentsTutorial";
import StateTutorial from "./components/StateTutorial";
import EventsTutorial from "./components/EventsTutorial";
import ApiTutorial from "./components/ApiTutorial";
import HooksTutorial from "./components/HooksTutorial";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '20px'}}>
        <h1>{t('WelcomeMessage')}</h1>
        <p>
          {t('TutorialDescription')}
        </p>
        <div>
          <Link to="/components"><button style={{ margin: '10px' }}>{t('Components')}</button></Link>
          <Link to="/state"><button style={{ margin: '10px' }}>{t('State')}</button></Link>
          <Link to="/events"><button style={{ margin: '10px' }}>{t('Events')}</button></Link>
          <Link to="/api"><button style={{ margin: '10px' }}>{t('ApiConsumption')}</button></Link>
          <Link to="/hooks"><button style={{ margin: '10px' }}>{t('Hooks')}</button></Link>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => changeLanguage('es')} style={{ marginRight: '10px' }}>ES</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>

      <Routes>
        <Route path="/components" element={<ComponentsTutorial />} />
        <Route path="/state" element={<StateTutorial />} />
        <Route path="/events" element={<EventsTutorial />} />
        <Route path="/api" element={<ApiTutorial />} />
        <Route path="/hooks" element={<HooksTutorial />} />
      </Routes>
    </Router>
  );
}

export default App;
