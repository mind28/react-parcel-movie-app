import React from "react";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ActorView extends React.Component {
  render() {
    const { actor, movie, onBackClick } = this.props;

    return (
      <Card>
        <Card.Body>
          <Container className="extra-info">
            <Col className="d-sm-flex justify-content-between justify-content-lg-start mt-2 mb-3">
              <Card.Text className="label titles h3">{actor[0].Name}</Card.Text>
              
            </Col>

            <hr />

            <Col className="d-sm-flex justify-content-between justify-content-lg-start mt-2 mb-3">
              <Card.Text className="label titles">{actor[0].Bio} </Card.Text>
              
            </Col>

            <Col className="d-sm-flex justify-content-between justify-content-lg-start mt-2 mb-3">
              <Card.Text className="label titles h3">Born: </Card.Text>
             
            </Col>

            <Col className="d-sm-flex justify-content-between justify-content-lg-start mt-2 mb-3">
              <Card.Text className="label titles">{actor[0].Birth} </Card.Text>
              
            </Col>

            {actor.Death && (
              <Col className="d-sm-flex justify-content-between justify-content-lg-start mt-2 mb-3">
                <Card.Text className="label titles">Died: </Card.Text>
                <span className="titles ml-3 h5 ">{actor[0].Death}</span>
              </Col>
            )}

            <Col className="d-sm-flex justify-content-between justify-content-lg-start mt-2 mb-3">
              <Card.Text className="label titles h3">Featured in: </Card.Text>
             
            </Col>

            <Col className="d-sm-flex justify-content-between justify-content-lg-start mt-2 mb-3">
              <Card.Text className="label titles">{actor[0].Movies} </Card.Text>
              
            </Col>

            
            <Container className="d-flex justify-content-between mt-2 mb-3">
              <Button
                variant="outline-secondary"
                className="custom-btn"
                type="submit"
                onClick={() => {
                  onBackClick();
                }}
              >
                Back to Movie
              </Button>
              <Link to={`/`}>
                <Button 
                  className="custom-btn" 
                  type="submit"
                  variant="outline-secondary"
                  >
                  Back to List
                </Button>
              </Link>
            </Container>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}