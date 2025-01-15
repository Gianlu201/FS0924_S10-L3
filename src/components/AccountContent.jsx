import { Component } from 'react';
import {
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Row,
  Button,
} from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';

class AccountContent extends Component {
  state = {
    accountName: 'Epicoder #1',
  };

  render() {
    return (
      <>
        <Container fluid className='d-flex flex-column align-items-center'>
          <h1 className='text-center text-white'>Edit Profile</h1>
          <Row className='w-75'>
            <Col
              xs={12}
              lg={4}
              className='d-flex justify-content-center align-items-start mb-4'
            >
              <div className='position-relative w-100'>
                <img
                  src='https://placedog.net/500'
                  className='rounded-3'
                  width={'100%'}
                />
                <span className='modifyPicture'>
                  <Pencil className='text-white'></Pencil>
                </span>
              </div>
            </Col>

            <Col xs={12} lg={8} className='mb-5'>
              <Form style={{ width: 'fit-content' }}>
                <FormGroup className='mt-2'>
                  <Form.Control
                    type='text'
                    value={this.state.accountName}
                    onChange={(e) => {
                      this.setState({ accountName: e.target.value });
                    }}
                    maxLength={20}
                    className='bg-secondary border-0 rounded-0 text-white fs-5'
                    style={{ width: '250px' }}
                  ></Form.Control>
                </FormGroup>

                <FormGroup className='formSection my-3'>
                  <h4 className='text-secondary fs-3 mb-3'>Language:</h4>
                  <Form.Select
                    className='text-white bg-dark rounded-0'
                    style={{ width: 'fit-content' }}
                  >
                    <option>English</option>
                    <option>Italiano</option>
                    <option>Espanol</option>
                  </Form.Select>
                </FormGroup>

                <FormGroup className='formSection my-3'>
                  <h4 className='text-secondary fs-3 mb-3'>
                    Maturity Settings:
                  </h4>
                  <span
                    className='d-block p-2 px-3 bg-secondary text-white'
                    style={{ width: 'fit-content' }}
                  >
                    ALL MATURITY SETTINGS
                  </span>
                  <FormText className='text-white fs-6 d-inline-block my-3'>
                    Show files for all maturity settings for this profile.
                  </FormText>
                  <Button
                    variant='outline-secondary'
                    className='d-block rounded-0'
                  >
                    EDIT
                  </Button>
                </FormGroup>

                <FormGroup className='formSection'>
                  <h4 className='text-secondary fs-3'>Maturity Settings:</h4>
                  <div className='d-flex align-items-center my-2'>
                    <input
                      type='checkbox'
                      className='myCheckbox'
                      id='checkboxOne'
                    />
                    <label
                      className='text-white lead ms-2'
                      htmlFor='checkboxOne'
                    >
                      Autoplay next episode in a series on all device
                    </label>
                  </div>
                  <div className='d-flex align-items-center my-2'>
                    <input
                      type='checkbox'
                      className='myCheckbox'
                      id='checkboxTwo'
                    />
                    <label
                      className='text-white lead ms-2'
                      htmlFor='checkboxTwo'
                    >
                      Autoplay next episode in a series on all device
                    </label>
                  </div>
                </FormGroup>

                <div className='mt-3'>
                  <Button
                    type='button'
                    variant='light'
                    className='fw-bold fs-5 me-2 mb-3'
                  >
                    SAVE
                  </Button>
                  <Button
                    type='button'
                    variant='outline-secondary'
                    className='fs-5 me-2 mb-3'
                  >
                    CANCEL
                  </Button>
                  <Button
                    type='button'
                    variant='outline-secondary'
                    className='fs-5 mb-3'
                  >
                    DELETE PROFILE
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AccountContent;
