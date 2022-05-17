import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export function UserRegistration(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    //form validation logic
       
    const handleRegistration=(e)=>{
        e.preventDefault();
        console.log(username.password);
          /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
    };

    //post new user to the database 
       

    return (
        <form className="register-form">
        <label for="username">
            Username: 
            <input type="text" value={username}
            onChange={e=>
                setUsername(e.target.value)}/>
        </label>
        <label for="password">
            Password: 
            <input type="password" value={password}
            onChange={e=>
                setPassword(e.target.value)}/>
        </label>
        <label for="email">
            E-mail: 
            <input type="text" value={email}
            onChange={e=>
                setEmail(e.target.value)}/>
        </label>
        <label for="birthday">
            Birth date: 
            <input type="date" value={birthday}
            onChange={e=>
                setBirthday(e.target.value)}/>
        </label>

        <button type="submit" onClick={handleRegistration}>Register</button>
    </form>
    )
}

UserRegistration.propTypes={
        onLoggedIn: PropTypes.func.isRequired
}