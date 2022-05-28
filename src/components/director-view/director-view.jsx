import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DirectorView extends React.Component {
  render() {
    const { director, movie, onBackClick } = this.props;

    return (
      <Card>
        <Card.Body>
          <Container className="director-view">
            <Col className="d-sm-flex justify-content-between justify-content-xl-start">
              <Card.Text className="label titles h3"><span className="movie-director-bio h3">
                {director.Name}
              </span></Card.Text>
              
            </Col>
            <hr />

            <Col className="d-sm-flex justify-content-between justify-content-xl-start mb-5">
              <Card.Text className="label titles h3"></Card.Text>
              <span className="movie-director-bio card-text">
                {director.Bio}
              </span>
            </Col>

            {/* <Col className="d-sm-flex justify-content-between justify-content-xl-start">
              <Card.Text className="label titles h3">Born: </Card.Text>
              <span className="movie-director-birth titles ml-3 h1">
                {director.Birth}
              </span>
            </Col> */}

            {/* {director.Death && (
              <Col className="d-sm-flex justify-content-between justify-content-xl-start">
                <Card.Text className="label titles h3">Death: </Card.Text>
                <span className="movie-director-death titles ml-3 h1">
                  {director.Death}
                </span>
              </Col>
            )} */}
          </Container>
          <Container className="d-flex justify-content-between">
            <Button
              className="custom-btn"
              type="submit"
              onClick={() => {
                onBackClick();
              }}
            >
              Go back
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