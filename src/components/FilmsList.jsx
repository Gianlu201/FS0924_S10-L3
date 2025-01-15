import { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

import '../../public/assets/css/filmList.css';

const URL = 'http://www.omdbapi.com/?apikey=d2993ad1&s=';

class FilmsList extends Component {
  state = {
    filmList: [],
    errorMessage: '',
  };

  errorBlock = (
    <Alert variant='danger' dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    </Alert>
  );

  getFilmList = async () => {
    try {
      const response = await fetch(URL + this.props.query);
      if (response.ok) {
        const data = await response.json();
        this.setState({ filmList: data.Search, isLoading: false });
      } else {
        throw new Error("Errore nella lettura dell'API");
      }
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  };

  componentDidMount() {
    this.getFilmList();
  }

  render() {
    return (
      <>
        {this.props.isLoaded && this.state.errorMessage === '' && (
          <h4>{this.props.title}</h4>
        )}

        {this.props.isLoaded && this.state.errorMessage === '' && (
          <Row className='filmList mb-4'>
            {this.state.filmList.map((film, i) => {
              if (i < 6) {
                return (
                  <Col
                    sm={6}
                    lg={3}
                    xl={2}
                    key={film.imdbID}
                    className='singleFilm mb-2 px-1'
                  >
                    <img
                      src={film.Poster}
                      alt={film.Title}
                      className='filmPoster'
                    />
                  </Col>
                );
              }
            })}
          </Row>
        )}

        {this.props.isLoaded &&
          this.state.errorMessage != '' &&
          this.errorBlock}
      </>
    );
  }
}

export default FilmsList;
