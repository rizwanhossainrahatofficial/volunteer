
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import VolunteersList from '../VolunteersList/VolunteersList';

const RegisteredEvent = () => {
    const[volunteers,setVolunteers]=useState([]) ;
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('http://localhost:5000/event')
        .then(res=>res.json())
        .then(data=>setVolunteers(data))
    },[])

const backHome=()=>{
    navigate('/home')
}


    return (
        <div>
            <h1  className='container'>Volunteer Regitration List</h1>
                <div  >

                
                {
                    volunteers.map(volunteer=><VolunteersList volunteer={volunteer}></VolunteersList>)
                }
                <Button onClick={backHome}  style={{marginLeft:'500px'}} variant="primary">GO TO HOME</Button>
                </div>

        </div>
    );
};

export default RegisteredEvent;