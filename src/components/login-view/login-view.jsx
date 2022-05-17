import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

export function LoginView(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //send user data to the database to check if the user exists
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username.password);
          /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
    };

    const handleRegister=(e)=>{
        e.preventDefault();
        //logic to handle the registration button and get the registration-view 
       // console.log(username.password);
          /* Send a request to the server for authentication */
    };

    return (

    <Container>
        <Row className='justify-content-md-center'>
            <Col md={6}>
   
                 <h1>Sign in to your account</h1>
                    <Form className="register-form">
                <Form.Group className="mb-3" controlId="formEmail">
                     <Form.Label>Username: </Form.Label>
                      <Form.Control type="text" placeholder="Enter a username" value={username}
                       onChange={e=>
                           setUsername(e.target.value)} />
                 </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                     <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Your password" value={password}
                          onChange={e=>
                         setPassword(e.target.value)}/>
                 </Form.Group>
            <p>Already have an account?</p>
            <Button variant="primary" className="custom-btn" type="submit" onClick={handleSubmit}>
                Sign in
            </Button><br></br>
                         </Form>
             </Col>
         </Row>
      </Container>

    )
}
LoginView.propTypes={
    onLoggedIn: PropTypes.func.isRequired
  }