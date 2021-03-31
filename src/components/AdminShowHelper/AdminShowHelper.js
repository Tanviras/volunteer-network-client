import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import trashIcon from '../../logos/trashIcon.png';
import './AdminShowHelper.css';
import { Button } from "react-bootstrap";

const AdminShowHelper = (props) => {
    const {fullName,email,date,selectedActivity}=props.activity;
    const [isDeleted,setIsDeleted]=useState(false)

    const handleDeleteActivity = (_id) => {
        console.log("deleting activity");
        fetch(
          `http://localhost:5000/admin/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("deleting activity");
          });
        setIsDeleted(true);
      };



    return ( 
        <Row className='tableInfosStyle'>
        <Col sm={3}>{fullName}</Col>
        <Col sm={3}>{email}</Col>
        <Col sm={2}>{date}</Col>
        <Col sm={2}>{selectedActivity}</Col>
        <Col> <img src={trashIcon} alt='' className='trashLogoSize' onClick={handleDeleteActivity}/>  </Col>
        
        </Row>
       
    );
};

export default AdminShowHelper;