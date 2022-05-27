import React from "react";
import PropTypes from "prop-types";
import './movie-card.scss'
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card style={{width: '18rem'}} className="container ">
        <Link 
          className="text"
          to={`/movies/${movie._id}`}>
          <Card.Img
            variant="top"
            src={movie.ImagePath}
            className="image"
            
           
          />
          <Card.Title className="title-text ">
            {movie.Title}
          </Card.Title>
        </Link>

        
      </Card>
     
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};