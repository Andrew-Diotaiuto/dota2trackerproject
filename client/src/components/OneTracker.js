import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from './Nav';
const OneTracker = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [oneTracker, setOneTracker] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneTracker/${id}`)
            .then((res) => {
                console.log(res);
                setOneTracker(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteTracker/${id}`)
            .then((res) => {
                navigate('/display')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='details-container'>
            <Nav />
            <div className='details-body'>
                <h2>Hero: {oneTracker.hero}</h2>
                {
                    oneTracker.win ?
                        <h2 className='win'>WIN</h2> :
                        <h2 className='loss'>LOSS</h2>
                }
                <h2>MMR: {oneTracker.mmr}</h2>
                <h2>Thoughts: {oneTracker.thoughts}</h2>
                <br />
                <button className='delete-button' onClick={() => deleteHandler(oneTracker._id)}>DELETE MATCH</button>
            </div>
        </div>
    )
}

export default OneTracker;