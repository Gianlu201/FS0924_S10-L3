import { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const URL = 'http://www.omdbapi.com/?apikey=d2993ad1&i=';

const MovieDetails = function () {
  const [currentMovie, setCurrentMovie] = useState({});
  const [movieComments, setMovieComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMovieLoaded, setIsMovieLoaded] = useState(false);
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState({});

  const params = useParams();

  const getCurrentMovie = async (id) => {
    try {
      const response = await fetch(URL + id);
      if (response.ok) {
        const data = await response.json();
        setCurrentMovie(data);
        setIsMovieLoaded(true);
        console.log(data);
      } else {
        throw new Error("Errore nella lettura dell'API");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const getComments = async (id) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + id,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg3YzZiOTFhNjgzYjAwMTU5MjE3ODYiLCJpYXQiOjE3MzY5NTE0ODEsImV4cCI6MTczODE2MTA4MX0.AGhVTu51ADXgnaa6HdlRh09M5-wM1imdcU8-FY8d3lY',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMovieComments(data);
        setIsCommentsLoaded(true);
        console.log(data);
      } else {
        throw new Error('Erorre nella chiamata API dei commenti');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentMovie(params.movieId);
    getComments(params.movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMovieLoaded && isCommentsLoaded) {
      setIsLoaded(true);
    }
  }, [isMovieLoaded, isCommentsLoaded]);

  return (
    <Container>
      {isLoaded ? (
        <>
          <Row>
            <Col xs={12} md={3}>
              <img
                src={currentMovie.Poster}
                alt={currentMovie.Title}
                className='img-fluid'
              />
            </Col>
            <Col xs={12} md={9} className='text-white'>
              <h2>{currentMovie.Title}</h2>
              <p className='text-secondary'>{currentMovie.Genre}</p>

              <h6 className='mt-5'>Trama:</h6>
              <p>{currentMovie.Plot}</p>

              <p>
                <span className='fw-bold'>Director:</span>{' '}
                {currentMovie.Director}
              </p>

              <p>
                <span className='fw-bold'>Main actors:</span>{' '}
                {currentMovie.Actors}
              </p>

              <p>
                <span className='fw-bold'>Awards:</span> {currentMovie.Awards}
              </p>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col xs={12} md={6}>
              {movieComments.length > 0 ? (
                <ListGroup>
                  {movieComments.map((commentObj) => {
                    return (
                      <ListGroup.Item
                        key={commentObj._id}
                        className='bg-dark text-light'
                      >
                        {commentObj.comment}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              ) : (
                <h4>No comment yet!</h4>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation='border' variant='danger' />
      )}
    </Container>
  );
};

export default MovieDetails;
