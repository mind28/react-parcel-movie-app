import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  //Declare hook for each input
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  //form validation logic
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username is required");
      isReq = false;
    } else if (username.length < 4) {
      setUsernameErr("Username must be 4 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password is required (6 characters long)");
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr("Password must be 6 characters long");
      isReq = false;
    }
    if (!email) {
      setEmailErr("Add Email");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmail("Email must be a valid email address");
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post("https://movie-app-2828.herokuapp.com/users", {
          username: username,
          password: password,
          email: email,
          birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login!");
          window.open("/", "_self");
          //open in the current tab
        })
        .catch((response) => {
          console.error(response);
          alert("error registering the user");
        });
    }
  };

  return (
    <Container>
      <Row>
        <Col med={4}>
          <Card>
            <Card.Body>
              <Card.Title>Sign up here</Card.Title>
              <Form className="register-form">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label className="titles">Username: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Username should be at least 4 characters long"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {usernameErr && <p>{values.usernameErr}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="titles">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your password should be at least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordErr && <p>{values.passwordErr}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="titles">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailErr && <p>{values.emailErr}</p>}
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBirthdate">
                  <Form.Label className="titles">Birth date: </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="yyyy/mm/dd"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>

                <span className="mb-3">
                <Button
                  variant="outline-dark"
                  className="mb-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign me up!
                </Button>

                </span>


                <p> Already have an account?</p>
                <span>
                <Link to={`/`}>
                  <Button
                    variant="outline-success"
                    className="custom-btn"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Link>

                </span>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.instanceOf(Date).isRequired,
  }),
};