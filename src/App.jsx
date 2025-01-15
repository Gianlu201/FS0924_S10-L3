import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../public/assets/css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/MyNavbar';
import Main from './components/Main';
import MyFooter from './components/MyFooter';
import AccountContent from './components/AccountContent';
import SettingsContent from './components/SettingsContent';
import TvShows from './components/TvShows';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import WorkInProgress from './components/WorkInProgress';

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

          <Route path='/tv-shows' element={<TvShows />} />

          <Route path='/movie-details/:movieId' element={<MovieDetails />} />

          <Route path='/account' element={<AccountContent />} />

          <Route path='/settings' element={<SettingsContent />} />

          <Route path='/tv-shows' element={<WorkInProgress />} />

          <Route path='/movies' element={<WorkInProgress />} />

          <Route path='/recently-added' element={<WorkInProgress />} />

          <Route path='/my-list' element={<WorkInProgress />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// decommentare import e page component desiderati per "navigare" nella web app
