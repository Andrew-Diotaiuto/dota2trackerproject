import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Nav = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='nav'>
            <div className='navhtag'>
            <h1>Dota 2 Tracker</h1>
            </div>
            <button className='nav1'><Link to ={'/createTracker/form'}>Add a match</Link></button>
            <button className='nav2'><Link to ={'/display'}> Home</Link></button>
            <button className='nav3' onClick={logout}>Logout</button>
        </div>
    )}

    export default Nav;