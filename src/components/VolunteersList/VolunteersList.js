import React from 'react';
import { ListGroup } from 'react-bootstrap';

const VolunteersList = (props) => {
    const {name,email,date,eventName}=props.volunteer
    return (
        <div className='container' style={{marginBottom:'20px'}}>
             
                <ListGroup as="ul">
  <ListGroup.Item as="li" >
  Name:{name}
  </ListGroup.Item>
  <ListGroup.Item as="li">Email:{email}</ListGroup.Item>
  <ListGroup.Item as="li" >
  Date:{date}
  </ListGroup.Item>
  <ListGroup.Item as="li">Event Name:{eventName}</ListGroup.Item>
</ListGroup>
        </div>
    );
};

export default VolunteersList;