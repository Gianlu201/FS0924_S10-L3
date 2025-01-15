import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/app.css';

import HomePage from './components/Homepage';
// import AccountPage from './components/AccountPage';
// import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <>
      <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
        <HomePage />
        {/* <AccountPage /> */}
        {/* <SettingsPage /> */}
      </div>
    </>
  );
}

export default App;

// decommentare import e page component desiderati per "navigare" nella web app
