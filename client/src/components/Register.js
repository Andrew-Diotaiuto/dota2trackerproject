import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate('/display')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='register-container'>
            <div className='register-header'>
                <h2>Register</h2>
            </div>
            <div className='register-form'>
                <form onSubmit={submitHandler} className='register-form'>
                    <div>
                        <label className='form-label'>First Name: </label>
                        <input className='form-control' type="text" onChange={changeHandler} value={user.firstName} name='firstName' />
                    </div>
                    <div>
                        <label className='form-label'>Last Name: </label>
                        <input className='form-control' type="text" onChange={changeHandler} value={user.lastName} name='lastName' />
                    </div>
                    <div>
                        <label className='form-label'>Email: </label>
                        <input className='form-control' type="text" onChange={changeHandler} value={user.email} name='email' />
                    </div>
                    <div>
                        <label className='form-label'>Password: </label>
                        <input className='form-control' type="password" onChange={changeHandler} value={user.password} name='password' />
                    </div>
                    <div>
                        <label className='form-label'>Confirm Password: </label>
                        <input className='form-control' type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword' />
                    </div>
                    <button className='register-button'>Register</button>
                </form>
            </div>
            <div className='register-bottom'>
            <h2>Already registered? </h2>
            <Link to={'/login'}>Login</Link>
            </div>
        </div>
    )
}

export default Register;