import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Container, Col} from 'react-bootstrap';

export class MovieView extends React.Component {

  //implementing a show more and show less button

  render() {
      const {movie, onBackClick }=this.props;
     
      return (
 
        <Card>
        <Container className="text-center p-3">
        <Card.Img className="movie-poster" variant="top" src={movie.ImagePath}/>
        </Container>

       <Card.Body>

       <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Title:  </Card.Text>
       <span className="movie-title titles ml-3 ">{movie.Title}</span>
      </Col>
      
      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Description:  </Card.Text>
       <span className="movie-description card-text ml-3 ">{movie.Description}</span>
      </Col>

      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Genre:  </Card.Text>
       <span className="movie-genre titles ml-3 ">{movie.Genre.Name}</span>
      </Col>

      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Release Year:  </Card.Text>
       <span className="movie-release titles ml-3 ">{movie.releaseYear}</span>
      </Col>

      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Director:  </Card.Text>
       <span className="movie-director titles ml-3 ">{movie.Director.Name}</span>
      </Col>


      <Container className="extra-info">
      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Bio:  </Card.Text>
       <span className="movie-director-bio card-text  ml-3 ">{movie.Director.Bio}</span>
      </Col>

      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Born:  </Card.Text>
       <span className="movie-director-birth titles ml-3 ">{movie.Director.Birth}</span>
      </Col>

      { (movie.Director.Death) &&
      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Death:  </Card.Text>
       <span className="movie-director-death titles ml-3 ">{movie.Director.Death}</span>
      </Col>}
    </Container>

          
      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Main Actor:  </Card.Text>
       <span className="movie-actor titles ml-3 ">{movie.Actors[0].Name}</span>
      </Col>


      <Container className="extra-info">

       <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Bio:  </Card.Text>
       <span className="movie-actor-bio card-text  ml-3 ">{movie.Actors[0].Bio}</span>
      </Col>

      <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Born:  </Card.Text>
       <span className="movie-actor-name titles ml-3 ">{movie.Actors[0].Birth}</span>
      </Col>

      { (movie.Actors[0].Death) &&
       <Col className="d-sm-flex justify-content-between justify-content-lg-start">
       <Card.Text className="label titles">Died:  </Card.Text>
       <span className="movie-director titles ml-3 ">{movie.Actors[0].Death}</span>
      </Col>
      }
        </Container>         
     
    
              
          <Container className="text-center p-2">
         <Button variant="primary" className="custom-btn" onClick={()=>{onBackClick(null);}}>Go Back</Button>
     </Container>
     </Card.Body>
  </Card>

          
      )
  }}


  MovieView.propTypes={
  movie: PropTypes.shape({
    Title: PropTypes.string,

    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    }),

    Featured: PropTypes.bool,

    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birth: PropTypes.string,
      Death: PropTypes.string,
    }),

    Description: PropTypes.string,
    releaseYear: PropTypes.arrayOf(PropTypes.number),

    Actors: PropTypes.arrayOf(PropTypes.shape(
      {
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birth: PropTypes.string,
      Death: PropTypes.string,
      Movies: PropTypes.arrayOf(PropTypes.string)
    })),

    ImagePath: PropTypes.string,
  }),
  onBackClick: PropTypes.func
}