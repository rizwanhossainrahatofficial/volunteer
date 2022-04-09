import React, { useEffect, useState } from 'react';
import VolunteersList from '../VolunteersList/VolunteersList';

const RegisteredEvent = () => {
    const[volunteers,setVolunteers]=useState([]) ;

    useEffect(()=>{
        fetch('http://localhost:5000/event')
        .then(res=>res.json())
        .then(data=>setVolunteers(data))
    },[])

    return (
        <div>
            <h1  className='container'>Volunteer Regitration List</h1>
                <div  >

                
                {
                    volunteers.map(volunteer=><VolunteersList volunteer={volunteer}></VolunteersList>)
                }
                </div>

        </div>
    );
};

export default RegisteredEvent;