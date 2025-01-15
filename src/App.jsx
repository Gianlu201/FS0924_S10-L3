import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/MyNavbar';
import Main from './components/Main';
import MyFooter from './components/MyFooter';
import AccountContent from './components/AccountContent';
import SettingsContent from './components/SettingsContent';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
        <MyNavbar />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Main />
                <MyFooter />
              </>
            }
          />

          <Route path='/account' element={<AccountContent />} />

          <Route path='/settings' element={<SettingsContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// decommentare import e page component desiderati per "navigare" nella web app
