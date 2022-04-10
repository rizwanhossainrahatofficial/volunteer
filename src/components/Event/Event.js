import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './Event.css'
import img from '../../images/logos/Group 1329.png'

const Event = () => {
   const {id}= useParams()
    const [event,setevent]=useState({})
    
    useEffect(()=>{
        fetch(`https://vast-fortress-79827.herokuapp.com/${id}`)
        .then(res=>res.json())
        .then(data=>setevent(data))
    },[])

    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{ 
        console.log(data)
    axios.post('https://vast-fortress-79827.herokuapp.com/events',data)
       
        .then(res=>{
            console.log(res)
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    
}
     
   
    return (
        <div className='form'>
          <form onSubmit={handleSubmit(onSubmit)}>
             
              <img width={'200px'} src={img} alt="" />
              <h3>Register as  volunteer</h3>
      <input {...register("name")}  defaultValue=""  placeholder="Full name"/>
      

      <input {...register("email")}  defaultValue="" placeholder="username or email"/>

      {/* refer to the type of error to display message accordingly */}
      <textarea {...register("description")}  defaultValue="" placeholder="description" />
    

      {/* register with validation */}
      <input type="date" {...register("date")}   defaultValue="" placeholder="Date"/>
      
      <input  type='name' defaultValue={event.name}  {...register("eventName")}   placeholder="Event name"/>
      {/* register with validation and error message */}
    
      

      <input style={{backgroundColor:'goldenrod'}} type="submit" value='Registration' />
    </form>

        </div>
    );
};

export default Event;