import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
        <form>
        <label>
            Username: 
            <input type="text" value={username}
            onChange={e=>
                setUsername(e.target.value)}/>
        </label>
        <label>
            Password: 
            <input type="password" value={password}
            onChange={e=>
                setPassword(e.target.value)}/>
        </label>

        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="submit" onClick={handleRegister}>Register here</button>
    </form>
    )
}
LoginView.propTypes={
    onLoggedIn: PropTypes.func.isRequired
  }