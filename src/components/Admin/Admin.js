import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Admin = () => {
    const {user,googleSingIn}=useFirebase();
    console.log(user)
   const navigate= useNavigate()
    const goHome=()=>{
        navigate('/home')
    }
   
    return (
        <div className=' d-flex justify-content-center '  >
            <div style={{marginTop:'150px'}}>

            
            <h1>Sign in using google</h1>
        
          <Button onClick={googleSingIn} variant="warning">sign in using google</Button>
          <Button onClick={goHome} style={{marginLeft:'5px'}} variant="primary">GO TO HOME</Button>
          </div>
          <div>
         
          </div>
         

           
        
            
        </div>
    );
};

export default Admin;