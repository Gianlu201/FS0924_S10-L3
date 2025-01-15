import { Component } from 'react';
import { Dropdown, Container, Spinner } from 'react-bootstrap';
import { Grid, Grid3x3 } from 'react-bootstrap-icons';
import FilmsList from './FilmsList';

class Main extends Component {
  state = {
    isLoading: true,
  };

  getLoading = async () => {
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 4000);
    }
  };

  render() {
    this.getLoading();
    return (
      <Container fluid className='px-4 flex-grow-1'>
        {this.state.isLoading && (
          <div className='d-flex justify-content-center align-items-center spinnerBox'>
            <Spinner animation='border' variant='danger'></Spinner>
          </div>
        )}

        {!this.state.isLoading && (
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <h2 className='mb-4'>TV Shows</h2>
              <div className='btn-group' role='group'>
                <Dropdown className='ms-4 mt-1'>
                  <Dropdown.Toggle
                    variant='secondary'
                    size='sm'
                    className='rounded-0'
                    id='dropdown-basic'
                    style={{ backgroundColor: '#221f1f' }}
                  >
                    Genres&nbsp;
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>Comedy</Dropdown.Item>
                    <Dropdown.Item href='#'>Drama</Dropdown.Item>
                    <Dropdown.Item href='#'>Thriller</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <Grid className='icons'></Grid>
              <Grid3x3 className='icons'></Grid3x3>
            </div>
          </div>
        )}

        <FilmsList
          title='Trending Now'
          query='Star Wars'
          isLoaded={!this.state.isLoading}
        />

        <FilmsList
          title='Watch it Again'
          query='Fast and Furious'
          isLoaded={!this.state.isLoading}
        />

        <FilmsList
          title='New Releases'
          query='Harry Potter'
          isLoaded={!this.state.isLoading}
        />
      </Container>
    );
  }
}

export default Main;
