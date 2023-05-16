import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', userLogin, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate('/display')
            })
            .catch((err) => {
                console.log('catch error for login handler', err);
            })
    }

    return (
        <div className='login-container'>
            <div className='login-header'>
                <h2>Login</h2>
            </div>
            <div className='login-form'>
                <form onSubmit={loginHandler}>
                    <div>
                        <label className='form-label'>Email: </label>
                        <input className='form-control' type="text" onChange={changeHandler} value={userLogin.email} name='email' />
                    </div>
                    <div>
                        <label className='form-label'>Password: </label>
                        <input className='form-control' type="password" onChange={changeHandler} value={userLogin.password} name='password' />
                    </div>
                    <button className='login-button'>Login</button>
                </form>
            </div>
            <div className='login-bottom'>
            <h2>Don't have an account? </h2>
            <Link to={'/'}>Register</Link>
            </div>
        </div>
    )
}

export default Login;