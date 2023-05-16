import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Display = (props) => {
    const [allTrackers, setAllTrackers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allTrackers')
            .then((res) => {
                console.log(res);
                setAllTrackers(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className='display-container'>
            <Nav/>
            <div className='display-body'>
            <h2 className='underlined'>All Matches:</h2>
            {
                allTrackers.map((tracker) => (
                    <div className='eachbox' key={tracker._id}>
                        <h2>{tracker.hero}</h2>
                        {
                            tracker.win?
                            <h2 className='win'>WIN</h2>:
                            <h2 className='loss'>LOSS</h2>

                        }
                        <h2>{tracker.mmr}</h2>
                        <h2>{tracker.thoughts}</h2>
                        
                        <h2> <Link to={`oneTracker/${tracker._id}`}>Details</Link> </h2>
                        <Link to={`editTracker/${tracker._id}`}>Edit</Link>
                    </div>
                ))
            }
            </div>
        </div>
    )}

    export default Display;