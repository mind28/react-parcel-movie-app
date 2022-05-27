import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export class GenreView extends React.Component {
  render() {
    const { genre, movie, onBackClick } = this.props;


    return (
      <Card>
        <Card.Body>
          <Container className="genre-view">
            <Col className="d-sm-flex justify-content-between justify-content-xl-start">
              <Card.Text className="label titles h3"><span className="movie-director-bio titles mb-5">
                {genre.Name}
              </span></Card.Text>          
            </Col>
            <hr />

            <Col className="d-sm-flex justify-content-between justify-content-xl-start mb-5">
              <Card.Text className="label titles"><span className="movie-director-bio card-text">
                {genre.Description}
              </span> </Card.Text>
            </Col>
          </Container>
          <Container className="d-flex justify-content-between">
            <Button
              className="custom-btn"
              type="submit"
              onClick={() => {
                onBackClick();
              }}
            >
              Back to movie
            </Button>
            <Link to={`/`}>
              <Button className="custom-btn" type="submit">
                Back to List
              </Button>
            </Link>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};