import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Event from '../../'
import EventItem from '../EventItem/EventItem';
import '../EventItem/EventItem.css'

const Home = () => {
    const [events,setevents]=useState([])
    useEffect(()=>{
        fetch('https://vast-fortress-79827.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>setevents(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div  className='item'>

            
           {
               events.map(event=><EventItem event={event} ></EventItem>)
           }
           </div>
        </div>
    );
};

export default Home;