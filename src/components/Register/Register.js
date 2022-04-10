import React, { useEffect, useState } from 'react';
import VolunteersList from '../VolunteersList/VolunteersList';
import img from '../../images/logos/Group 1329.png'
import { useForm } from 'react-hook-form';
import './Register.css'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{console.log(data)
       
        axios.post('http://localhost:5000/events',data)
           
            .then(res=>{
                console.log(res)
                if(res.data.insertedId){
                    alert('added successfully');
                    reset();
                }
            }) }

            const backHome=()=>{
                navigate('/home')
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
     
     <input  type='name'   {...register("eventName")}   placeholder="Event name"/>
     {/* register with validation and error message */}
   
     

     <input style={{backgroundColor:'goldenrod'}} type="submit" value='Registration' />
   </form>

   <Button onClick={backHome}  style={{marginLeft:'600px',marginTop:'5px'}} variant="primary">GO TO HOME</Button>
        </div>
    );
};

export default Register;