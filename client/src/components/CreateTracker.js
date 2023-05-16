import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const CreateTracker = (props) => {
    const navigate = useNavigate()
    const [tracker, setTracker] = useState({
        hero: '',
        mmr: '',
        thoughts: '',
        win: false
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        const value = e.target.type === "checkbox"? e.target.checked: e.target.value
        setTracker({ ...tracker, [e.target.name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newTracker', tracker)
            .then((res) => {
                console.log(res);
                navigate('/display')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })

    }

    return (
        <div className='create-container'>
            <Nav />
            <div className='create-body'>
                <h2>Post match stats:</h2>
                <form onSubmit={submitHandler}>
                    <label className='form-label'> Hero Name:</label>
                    <input className='form-control' type="text" onChange={changeHandler} value={tracker.hero} name='hero' />
                    {
                        errors.hero ?
                            <p className='text-danger'>{errors.hero.message}</p> :
                            null
                    }

                    <label className='form-label d-block'> Win?:</label>
                    <input className='form-check-input' type="checkbox" onChange={changeHandler} value={tracker.win} name='win' />
                    {
                        errors.win ?
                            <p className='text-danger'>{errors.win.message}</p> :
                            null
                    }

                    <label className='form-label d-block'> MMR:</label>
                    <input className='form-control' type="number" onChange={changeHandler} value={tracker.mmr} name='mmr' />
                    {
                        errors.mmr ?
                            <p className='text-danger'>{errors.mmr.message}</p> :
                            null
                    }

                    <label className='form-label'> Thoughts:</label>
                    <input className='form-control' type="text" onChange={changeHandler} value={tracker.thoughts} name='thoughts' />
                    {
                        errors.thoughts ?
                            <p className='text-danger'>{errors.thoughts.message}</p> :
                            null
                    }

                    <br />
                    <button className='create-button'>Create</button>

                </form>
            </div>
        </div>

    )
}

export default CreateTracker;
