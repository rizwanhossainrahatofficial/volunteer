import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../hooks/useFirebase';
import img from '../images/logos/Group 1329.png'

const Header = () => {
 const navigate=useNavigate()
const{user,logOut}=useFirebase();
console.log(user)
    const handleAdmin=()=>{
        navigate('/admin')
    }

    const handleRegister=()=>{
        navigate('/register')
    }



    return (
        <div style={{marginBottom:'20px'}}>

            <div className='container d-flex justify-content-end'>

        

                        <div style={{marginRight:'400px'}} >
                            <img style={{ width: '150px ' }} src={img} alt="" />
                        </div> 
                        
                                  <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="top">
    <Container>
    
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink}  to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink}  to="/home#services">Donation</Nav.Link>
      <Nav.Link as={HashLink}  to="/event">Events</Nav.Link>
      <Nav.Link as={HashLink}  to="/home#experts">blog</Nav.Link>
      <p>{user?.displayName}</p> 
    </Navbar.Collapse>
    {user?.email?
    <button style={{ margin: "13px" }} type="button" class="btn btn-dark" onClick={logOut}>Log out</button>:
                <button style={{ margin: "13px" }} type="button" class="btn btn-dark" onClick={handleAdmin}>Admin</button>
                
        
    }
    <button style={{ margin: "13px" }} type="button" class="btn btn-primary" onClick={handleRegister} >Register</button>
   
    </Container>
  </Navbar>          
            

   

            </div>
            <div style={{marginTop:'60px'}} >
            <div class="d-flex justify-content-center">
                <h3 style={{color:'black'}}>I GROW BY HELPING PEOPLE IN NEED</h3>
                </div>
                <div style={{marginTop:'5px',borderRadius:'3px'}} class="d-flex justify-content-center ">
                    <input type="text" name="" id=""  />
                    <button  class="btn btn-primary">
                        Search
                    </button>
                </div>
            </div>
                
        </div>
    );
};

export default Header;