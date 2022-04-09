import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventItem.css'

const EventItem = (props) => {
    const {name,img,_id}=props.event;
    const navigattion=useNavigate()

    const handleButton=()=>{
        navigattion(`/events/${_id}`)
    }

    return (
        <div   >
               <div className='event'>
            <img  src={img} alt="" />
            <button onClick={handleButton}>{name}</button>
            </div>
           
        </div>
    );
};

export default EventItem;