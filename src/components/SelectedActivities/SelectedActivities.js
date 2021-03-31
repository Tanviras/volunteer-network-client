import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import SelectedActivity from '../SelectedActivity/SelectedActivity';
import logo from '../../logos/Group-1329.png';
import './SelectedActivities.css';

const SelectedActivities = () => {
    const [activities, setActivities] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    //Component er vetor theke api use kore data fetch korte hole useEffect lage,remember?
    useEffect(() => {
        fetch('http://localhost:5000/userActivities?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setActivities(data))
    });



    return (
        <div>
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


                <div className="headerSizes">
                    <Nav>
                        <Nav.Link href="/home" >Home</Nav.Link>
                        <Nav.Link href="/donation" className="elementSizes">Donation</Nav.Link>
                        <Nav.Link href="/events" className="elementSizes">Events</Nav.Link>
                        <Nav.Link href="/blog" className="elementSizes">Blog</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            {/* header part done */}

            <Container>
                <Row>
                    {
                        activities.map(activity => <SelectedActivity activity={activity} key={activity.id} ></SelectedActivity>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default SelectedActivities;