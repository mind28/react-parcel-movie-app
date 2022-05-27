import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      email: null,
      birthday: null,
      favoriteMovies: [],
    };

    this.addFav = this.addFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
  }

  getUser(token) {
    let user = localStorage.getItem("user");
    axios
      .get(`https://movie-app-2828.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        //assign the result to the state
        this.setState({
          username: response.data.username,
          password: response.data.password,
          email: response.data.email,
          birthday: response.data.birthday,
          favoriteMovies: response.data.favoriteMovies,
        });
      })
      .catch((e) => console.log(e));
  }
  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  //add favorite
  addFav() {
    {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      const id = this.props.movie._id;
      //prevent adding duplicate movies
      let userFavorites = this.state.favoriteMovies;
      let isFav = userFavorites.includes(id);
      if (!isFav) {
        axios
          .post(
            `https://movie-app-2828.herokuapp.com/users/${user}/favoriteMovies/${id}`,
            {},

            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            console.log(response);
            alert(
              `${this.props.movie.Title} has been added to your list of favorites`
            );
            window.open(`/movies/${id}`, "_self");
          })
          .catch((e) => console.log(e));
      } else if (isFav) {
        alert(
          `${this.props.movie.Title} is already in your list of favorite movies!`
        );
      }
    }
  }
  //remove favorite
  removeFav() {
    {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      const id = this.props.movie._id;

      axios
        .delete(
          `https://movie-app-2828.herokuapp.com/users/${user}/favoriteMovies/${id}`,

          { headers: { Authorization: `Bearer ${token}` } },
          {}
        )
        .then((response) => {
          console.log(response);
          alert(
            `${this.props.movie.Title} has been deleted from your list of favorites`
          );
          window.open(`/movies/${id}`, "_self");
        })
        .catch((e) => console.log(e));
    }
  }
  render() {
    const { movie, onBackClick } = this.props;
    const { favoriteMovies, username, password, email, birthday } = this.state;
    let movieId = this.props.movie._id;
    let userFav = this.state.favoriteMovies;
    let isFav = userFav.includes(movieId);

    return (
      <Card>
        <Container className="text-left pt-1 pb-1 card-custom">
          <Button
            variant=""
            className="btn btn-outline-secondary btn-sm"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Container>
        <Container className="text-center card-custom">
          <Card.Img
            style={{ width: '100%' }}
            variant="top"
            src={movie.ImagePath}
          />
        </Container>

        <Card.Body>
          <Col className="d-sm-flex justify-content-between justify-content-xl-start mb-3">
            <Card.Text className="label titles h3"><span className="movie-title titles">{movie.Title}</span> </Card.Text>            
          </Col>
          <Col className="d-sm-flex justify-content-between justify-content-xl-start mt-2 mb-3">
            <Card.Text className="label titles card-text"><Link
              className="titles movie-genre card-text"
              to={`/genres/${movie.Genre.Name}`}
            >
              {movie.Genre.Name}
            </Link></Card.Text>
            
          </Col>
          <hr />

          <Col className="d-sm-flex justify-content-between justify-content-xl-start mt-2 mb-3">
            <Card.Text className="label titles"><span className="movie-description card-text ">
              {movie.Description}
            </span> </Card.Text>
            
          </Col>

          <Col className="d-sm-flex justify-content-between justify-content-xl-start mt-2 mb-1">
            <Card.Text className="label titles"><span className="movie-description card-text ">
              Directed by:
            </span> </Card.Text>
            
          </Col>

          <Col className="d-sm-flex justify-content-between justify-content-xl-start mt-2 mb-3">
            <Card.Text className="label titles "><Link
              className="movie-director titles h3"
              to={`/directors/${movie.Director.Name}`}
            >
              {movie.Director.Name}
            </Link> </Card.Text>
            
          </Col>

          <Col className="d-sm-flex justify-content-between justify-content-xl-start mt-2 mb-1">
            <Card.Text className="label titles"><span className="movie-description card-text ">
              Starring:
            </span> </Card.Text>
            
          </Col>

          {movie.Actors[0].Name && (
            <Col className="d-sm-flex justify-content-between justify-content-xl-start mt-2 mb-3">
              <Card.Text className="label titles"><Link
                className="titles movie-actor h3"
                to={`/actors/${movie.Actors[0].Name}`}
              >
                {movie.Actors[0].Name}
              </Link> </Card.Text>
            </Col>
          )}

          <Container className="text-center p-2">
            {!isFav && (
              <Button
                variant="outline-dark"
                className="btn"
                onClick={this.addFav}
              >
                Add to favorites
              </Button>
            )}
            {isFav && (
              <Button
                variant="outline-danger"
                className="btn"
                onClick={this.removeFav}
              >
                Remove from favorites
              </Button>
            )}
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,

    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,

    Featured: PropTypes.bool,

    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string,
      Death: PropTypes.string,
    }),

    Description: PropTypes.string.isRequired,
    releaseYear: PropTypes.arrayOf(PropTypes.number),

    Actors: PropTypes.arrayOf(
      PropTypes.shape({
        Name: PropTypes.string,
        Bio: PropTypes.string,
        Birth: PropTypes.string,
        Death: PropTypes.string,
        Movies: PropTypes.arrayOf(PropTypes.string),
      })
    ),

    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};