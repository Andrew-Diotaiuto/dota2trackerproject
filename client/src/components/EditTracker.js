import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from './Nav';

const EditTracker = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [tracker, setTracker] = useState({
        hero: '',
        mmr: '',
        thoughts: '',
        win: false
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setTracker({ ...tracker, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneTracker/${id}`)
            .then((res) => {
                setTracker(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateTracker/${id}`, tracker)
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
        <div className='edit-container'>
            <Nav />
            <div className='edit-body'>
                <h2>Edit Match:</h2>
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
                    <button className='edit-button'>Edit</button>
                </form>
            </div>
        </div>
    )
}

export default EditTracker;