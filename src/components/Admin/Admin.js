import React, { useEffect, useState } from 'react';
import { Col, Navbar, Row } from "react-bootstrap";
import logo from '../../logos/Group-1329.png';
import './Admin.css';
import usersLogo from '../../logos/users-alt 1.png';
import addUser from '../../logos/plus 1.png';
import AdminShowHelper from '../AdminShowHelper/AdminShowHelper';


const Admin = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userVolunteers')
            .then(res => res.json())
            .then(data => setActivities(data))
    });

    return (
        <div>
            
                <Row>

                    <Col sm={3}>
                        <Navbar expand="lg">

                            <Navbar>
                                <Navbar.Brand href="/home">
                                    <img
                                        src={logo}
                                        width="200"
                                        height="75"
                                        className="d-inline-block align-top imageSize"
                                        alt="logo"
                                    />
                                </Navbar.Brand>
                            </Navbar>
                        </Navbar>


                        <div>
                            <span className='spanPadding'>
                                <a href='/admin'><img src={usersLogo} alt='' className='logoSize' />
                                    <span className='linkColor'>Volunteer Register List</span>
                                </a>
                            </span>

                            <br/><br/>

                            <span className='spanPadding'>
                                <a href='/addEvent'>
                                    <img src={addUser} alt='' className='logoSize' />
                                    <span className='linkColor'>Add Event</span>
                                </a>
                            </span>
                        </div>

                    </Col>


                    <Col sm={9}>
                        <span className='headerText'><h2>Volunteer Registration List</h2></span>
                        <br /><br />

                        <div className='articleSize'>
                            <br />

                            <div className='articleInner'>
                                <br />

                                <div className='tableHeaderbg'>
                                    <Row className='tableHeader'>
                                        <Col sm={3}>Name</Col>
                                        <Col sm={3} >Email</Col>
                                        <Col sm={2}>Registered in</Col>
                                        <Col sm={2}>Activity</Col>
                                        <Col >Action</Col>
                                    </Row>      
                                </div>

                                <div className='tableInfos'>
                                    {
                                        activities.map(activity => <AdminShowHelper activity={activity} key={activity.id} ></AdminShowHelper>)
                                    }
                                </div>

                            </div>

                        </div>
                    </Col>



                </Row>
        </div>
    );
};

export default Admin;