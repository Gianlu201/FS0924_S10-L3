import { Component } from 'react';
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';

class MyNavbar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand='lg'
        data-bs-theme='dark'
        style={{ backgroundColor: '#221f1f' }}
      >
        <div className='container-fluid'>
          <Navbar.Brand href='#'>
            <img
              src='../../public/assets/images/logo.png'
              style={{ width: '100px', height: '55px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active fw-bold' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-bold' href='#'>
                  TV Shows
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-bold' href='#'>
                  Movies
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-bold' href='#'>
                  Recently Added
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-bold' href='#'>
                  My List
                </a>
              </li>
            </ul>
            <div className='d-flex align-items-center'>
              <Search className='icons'></Search>
              <div id='kids' className='fw-bold'>
                KIDS
              </div>
              <Bell className='icons'></Bell>
              <PersonCircle className='icons'></PersonCircle>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MyNavbar;
