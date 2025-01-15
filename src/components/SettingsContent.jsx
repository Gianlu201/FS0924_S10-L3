import { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { BadgeHd } from 'react-bootstrap-icons';

class SettingsContent extends Component {
  render() {
    return (
      <Container className='px-3 mb-5'>
        <h1 className='text-white'>Account</h1>
        <hr className='text-secondary' />

        <Row>
          <Col md={4}>
            <h4 className='text-secondary fs-3'>MEMBERSHIP & BILLING</h4>
            <Button variant='secondary' className='rounded-0 px-4 py-2'>
              Cancel Membership
            </Button>
          </Col>
          <Col md={8}>
            <div className='d-flex justify-content-between mb-2'>
              <span className='text-white fw-bold'>Epicoder1@gmail.com</span>
              <a className='classicLink'>Change account email</a>
            </div>

            <div className='d-flex justify-content-between mb-2'>
              <span className='text-secondary'>
                Password: <span>************</span>
              </span>
              <a className='classicLink'>Change password</a>
            </div>

            <div className='d-flex justify-content-between mb-2'>
              <span className='text-secondary'>
                Phone: <span>321 044 1279</span>
              </span>
              <a className='classicLink'>Change phone number</a>
            </div>

            <hr className='text-secondary' />

            <div className='d-flex justify-content-between align-items-start'>
              <div className='w-50 d-flex align-items-center'>
                <span className='paypal-logo d-inline-block me-1'></span>
                <span className='text-white fw-bold'>Epicoder1@gmail.com</span>
              </div>
              <div className='d-flex flex-column align-items-end w-50'>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Update payment info
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Billing details
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Redeem giftcard or promo code
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Where to buy gift cards?
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className='text-secondary' />

        <Row>
          <Col md={4}>
            <h4 className='text-secondary fs-3'>PLAN DETAIL</h4>
          </Col>
          <Col md={8}>
            <div className='d-flex justify-content-between'>
              <span className='text-white fw-bold'>
                Standard <BadgeHd></BadgeHd>
              </span>
              <a href='#' className='classicLink'>
                Change plane
              </a>
            </div>
          </Col>
        </Row>

        <hr className='text-secondary' />

        <Row>
          <Col md={4}>
            <h4 className='text-secondary fs-3'>SETTINGS</h4>
          </Col>
          <Col md={8} className=' d-flex flex-column align-items-start'>
            <a href='#' className='classicLink d-inline-block mb-2'>
              Parent Controls
            </a>
            <a href='#' className='classicLink d-inline-block mb-2'>
              Test Participation
            </a>
            <a href='#' className='classicLink d-inline-block mb-2'>
              Manage download devices
            </a>
            <a href='#' className='classicLink d-inline-block mb-2'>
              Activate a device
            </a>
            <a href='#' className='classicLink d-inline-block mb-2'>
              Recent device streaming activity
            </a>
            <a href='#' className='classicLink d-inline-block mb-2'>
              Singout all device
            </a>
          </Col>
        </Row>

        <hr className='text-secondary' />

        <Row>
          <Col md={4}>
            <h4 className='text-secondary fs-3'>MY PROFILE</h4>
          </Col>
          <Col md={8}>
            <div className='d-flex align-items-start'>
              <div className='d-flex flex-column align-items-start w-50'>
                <div className='mb-2'>
                  <img
                    src='https://placedog.net/500'
                    alt='Profile picture'
                    width={'50px'}
                    height={'50px'}
                  />
                  <span className='text-white fw-bold ms-2'>Epicoder #1</span>
                </div>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Language
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Playback settings
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Subtitle appearance
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Viewing activity
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Rating
                </a>
              </div>
              <div className='d-flex flex-column align-items-end w-50'>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Manage profiles
                </a>
                <a href='#' className='classicLink d-inline-block mb-2'>
                  Add profile email
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SettingsContent;
