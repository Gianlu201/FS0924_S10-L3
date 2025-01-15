import { Search, Bell, PersonCircle } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MyNavbar = function () {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      data-bs-theme='dark'
      style={{ backgroundColor: '#221f1f' }}
    >
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <img
            src='../../public/assets/images/logo.png'
            style={{ width: '100px', height: '55px' }}
          />
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active fw-bold' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link fw-bold' to='tv-shows'>
                TV Shows
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link fw-bold' to='/movies'>
                Movies
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link fw-bold' to='recently-added'>
                Recently Added
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link fw-bold' to='my-list'>
                My List
              </Link>
            </li>
          </ul>
          <div className='d-flex align-items-center'>
            <Search className='icons'></Search>
            <div id='kids' className='fw-bold'>
              KIDS
            </div>
            <Bell className='icons'></Bell>
            <div className='dropdown'>
              <button
                className='btn btn-sm dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <PersonCircle className='icons'></PersonCircle>
              </button>
              <ul className='dropdown-menu dropdown-menu-end'>
                <li>
                  <Link className='dropdown-item' to='/account'>
                    Account
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/settings'>
                    Settings
                  </Link>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
