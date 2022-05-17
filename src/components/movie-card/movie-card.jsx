import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Container} from 'react-bootstrap';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props
    //conditional to check if death year is present for Director.Death and Actors.Death 
    //actors.Death and Director.Death
   /* if(Actors.Death in this.props === null 
      || Director.Death in this.props === null){
      console.log("no death year")
    }*/


    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath}/>
        <Card.Body>
          <Card.Title className="titles text-center">{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Container className="text-center">
          <Button className="custom-btn" onClick={()=> onMovieClick(movie)} variant="link">Open</Button>
          </Container>
        </Card.Body>
      </Card>
    
    )}
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string,
  }),
  onMovieClick: PropTypes.func
};