import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import {
  Card,
  Form,
  FormGroup,
  Col,
  Row,
  Container,
  FormControl,
  Button,
} from "react-bootstrap";


export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      email: null,
      birthday: null,
      favoriteMovies: [],
    };
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

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  editProfile = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    axios
      .put(
        `https://movie-app-2828.herokuapp.com/users/${user}`,
        {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          birthday: this.state.birthday,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
          email: response.data.email,
          birthday: response.data.birthday,
        });
        localStorage.setItem("user", this.state.username);
        alert("profile updated successfully!");
        window.open("/profile", "_self");
      });
  };

  deleteProfile() {
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://movie-app-2828.herokuapp.com/users/${username}`,

        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
        alert("profile deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      })
      .catch((e) => console.log(e));
  }

  setUsername(value) {
    this.setState({
      username: value,
    });
  }
  setPassword(value) {
    this.setState({
      password: value,
    });
  }
  setEmail(value) {
    this.setState({
      email: value,
    });
  }
  setBirthday(value) {
    this.setState({
      birthday: value,
    });
  }
  removeFav(movie) {
    {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      const id = movie._id;

      axios
        .delete(
          `https://movie-app-2828.herokuapp.com/users/${user}/favoriteMovies/${id}`,

          { headers: { Authorization: `Bearer ${token}` } },
          {}
        )
        .then((response) => {
          console.log(response);
          alert(
            `${movie.Title} has been deleted from your list of favorites`
          );
          window.open(`/movies/${id}`, "_self");
        })
        .catch((e) => console.log(e));
    }
  }

  render() {
    const { movies, onBackClick } = this.props;
    const { favoriteMovies, username, password, email, birthday } = this.state;

    if (!username) {
      return null;
    }

    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="titles h1 text-center">Hi, {username}</div>
                <Card.Title className="titles text-center custom-card-title">
                  View and update your details
                </Card.Title>
                <Form
                  className="update-form"
                  onSubmit={(e) =>
                    this.editProfile(
                      e,
                      this.username,
                      this.password,
                      this.email,
                      this.birthday
                    )
                  }
                >
                  <FormGroup>
                    <Form.Label className="titles h3">Username</Form.Label>
                    <Container className="d-flex flex-column flex-sm-row justify-content-between p-1">
                      <FormControl
                        className="mb-3"
                        style={{ width: "40%" }}
                        type="text"
                        name="username"
                        placeholder={username}
                        disabled
                      ></FormControl>

                      <div
                        className="p-0 d-flex-column"
                        style={{ width: "50%" }}
                      >
                        {" "}
                        <FormControl
                          type="text"
                          name="username"
                          placeholder="insert your new username here"
                          onChange={(e) => this.setUsername(e.target.value)}
                          required
                        />
                        <Form.Text className="text-muted">
                          Your username should be at least 4 characters long
                        </Form.Text>
                      </div>
                    </Container>
                  </FormGroup>

                  <FormGroup>
                    <Form.Label className="titles h3">Password</Form.Label>
                    <Container className="d-flex flex-column flex-sm-row justify-content-between p-1">
                      <FormControl
                        className="mb-3"
                        style={{ width: "40%" }}
                        type="text"
                        name="password"
                        placeholder={password}
                        disabled
                      ></FormControl>

                      <div
                        className="p-0 d-flex-column"
                        style={{ width: "50%" }}
                      >
                        {" "}
                        <FormControl
                          type="text"
                          name="password"
                          placeholder="insert your new password here"
                          onChange={(e) => this.setPassword(e.target.value)}
                          required
                        />
                        <Form.Text className="text-muted">
                          Your password should be at least 8 characters long
                        </Form.Text>
                      </div>
                    </Container>
                  </FormGroup>

                  <FormGroup>
                    <Form.Label className="titles h3">Email</Form.Label>
                    <Container className="d-flex flex-column flex-sm-row justify-content-between p-1">
                      <FormControl
                        className="mb-3"
                        style={{ width: "40%" }}
                        type="email"
                        name="email"
                        placeholder={email}
                        disabled
                      ></FormControl>

                      <div
                        className="p-0 d-flex-column"
                        style={{ width: "50%" }}
                      >
                        {" "}
                        <FormControl
                          type="email"
                          name="email"
                          placeholder="insert your new email here"
                          onChange={(e) => this.setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </Container>
                  </FormGroup>

                  <FormGroup>
                    <Form.Label className="titles h3">Birth date</Form.Label>
                    <Container className="d-flex flex-column flex-sm-row justify-content-between p-1">
                      <FormControl
                        className="mb-3"
                        style={{ width: "40%" }}
                        type="text"
                        name="birthday"
                        placeholder={birthday}
                        disabled
                      ></FormControl>

                      <div
                        className="p-0 d-flex-column"
                        style={{ width: "50%" }}
                      >
                        {" "}
                        <FormControl
                          type="date"
                          name="birthday"
                          placeholder="insert your new email here"
                          onChange={(e) => this.setBirthday(e.target.value)}
                          required
                        />
                      </div>
                    </Container>
                  </FormGroup>

                  <Container className="p-1 text-center card-custom">
                    <Button
                      className="m-1"
                      variant="outline-warning"
                      type="submit"
                      onClick={this.editProfile}
                      style={{ width: "80%" }}
                    >
                      Update profile info
                    </Button>                   

                    <Button
                    style={{ width: "80%" }}
                    className="m-1"
                    variant="outline-danger"
                    type="submit"
                    onClick={this.deleteProfile}
                  >
                  Delete your entire profile
                  </Button>{" "}

                  </Container>
                </Form>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>

        <Card>
          <Card.Body>
            {favoriteMovies.length === 0 && (
              <div className="titles text-center">
                <h3>No favorite movies yet,</h3>
                <span>
                  Head over to the{" "}
                  <Link to={`/`}>
                    <span>
                     List of movies
                    </span>
                    {/* <Button variant="link" type="submit">
                      List of movies
                    </Button> */}
                  </Link>{" "}
                  <span>
                  to add some

                  </span>

                </span>
              
              </div>
            )}
            <Row className="favorite-movies d-flex justify-content-around">
              {favoriteMovies.length > 0 &&
                movies.map((movie) => {
                  if (
                    movie._id ===
                    favoriteMovies.find((fav) => fav === movie._id)
                  ) {
                    return (
                      <Card className="favorite-movie text-center m-2" key={movie._id}>
                        <div className="titles h1 text-center">{username}'s Favorite Movies</div>
                        <Card.Img src={movie.ImagePath} />
                        <Card.Body>
                          <Card.Title className="h1 titles">
                            {movie.Title}
                          </Card.Title>
                         
                            <Button
                              className="m-1"
                              style={{ width: "80%" }}
                              variant="outline-danger"
                              onClick={this.removeFav(movie)}
                            >
                              Remove from List
                            </Button>
                         
                          
                        </Card.Body>
                      </Card>
                    );
                  }
                })}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}