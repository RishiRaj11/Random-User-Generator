import React, { useState } from 'react'
import './Login.css';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailHandler = (event) => {
        setEmail(event.target.value);
        //console.log(email);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        //console.log(password);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        if (email !== "" && password !== "") {
            props.setStatus(true);
        }
        setEmail("");
        setPassword("");

    }

    return (
        <>
            <div className='Login'>
                <form className='form' onSubmit={submitHandler}>
                    <div className='email'>
                        <label>Email</label>
                        <input type="email" placeholder='Email' required value={email} onChange={emailHandler} />
                    </div>
                    <div className='password'>
                        <label>Password</label>
                        <input type="password" placeholder='Password' required value={password} onChange={passwordHandler} />
                    </div>
                    <button type='submit'>Login</button>
                </form>

            </div>
        </>
    )
}

export default Login;