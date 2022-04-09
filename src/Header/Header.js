import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import img from '../images/logos/Group 1329.png'

const Header = () => {
    return (
        <div style={{marginBottom:'20px'}}>

            <div className='container d-flex justify-content-end'>

                

                        <div style={{marginRight:'500px'}} >
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

     
   
     
    </Navbar.Collapse>


    
   
    </Container>
  </Navbar>
  

                      
                <button style={{ margin: "13px" }} type="button" class="btn btn-primary">Register</button>
                <button style={{ margin: "13px" }} type="button" class="btn btn-dark">Admin</button>
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