import React from 'react';
import { Col, Navbar, Row } from "react-bootstrap";
import logo from '../../logos/Group-1329.png';
import '../Admin/Admin.css';
import './AddEvent.css';
import usersLogo from '../../logos/users-alt 1.png';
import addUser from '../../logos/plus 1.png';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ErrorMessage } from "@hookform/error-message";


const AddEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = (values) => {//connection with server

        fetch("http://localhost:5000/addEvent", {//this should be changed
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data) {
                    history.push("/home");
                }

            });
    };

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

                        <br /><br />

                        <span className='spanPadding'>
                            <a href='/addEvent'>
                                <img src={addUser} alt='' className='logoSize' />
                                <span className='linkColor'>Add Event</span>
                            </a>
                        </span>
                    </div>

                </Col>


                <Col sm={9}>
                    <span className='headerText'><h2>Add Event</h2></span>
                    <br /><br />

                    <div className='articleSize'>
                        <br />

                        <div className='articleInnerAddEvent'>
                            <br />

                            <div>

                                <form className="" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>

                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="eventName">Event Title</label>
                                                <input
                                                    name="eventName"
                                                    placeholder="Enter Title"
                                                    // defaultValue={loggedInUser.name}
                                                    className={`form-control`}
                                                    ref={register({ required: "Event Name is required" })}
                                                />
                                            </div>
                                            <ErrorMessage
                                                className="invalid-feedback"
                                                name="eventName"
                                                as="div"
                                                errors={errors}
                                            />
                                        </Col>

                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="date">Event Date</label>
                                                <input
                                                    name="date"
                                                    placeholder="date"
                                                    type="date"
                                                    className={`form-control`}
                                                    ref={register({ required: "Date is required" })}
                                                />

                                                <ErrorMessage
                                                    className="invalid-feedback"
                                                    name="date"
                                                    as="div"
                                                    errors={errors}
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                
                                                <input
                                                    name="description"
                                                    placeholder="Write something"
                                                    className={`form-control`}
                                                    ref={register({ required: "Description is required" })}
                                                />
                                                
                                               
                                            </div>
                                            <ErrorMessage
                                                className="invalid-feedback"
                                                name="description"
                                                as="div"
                                                errors={errors}
                                            />
                                        </Col>

                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="picture">Banner</label>
                                                <input
                                                    name="picture"
                                                    type="file"
                                                    className={`form-control`}
                                                    ref={register({ required: "picture is required" })}
                                                />
                                                {/* <br/>
                                                <button className="btn btn-secondary">Upload Image</button> */}
                                            </div>
                                          

                                            <ErrorMessage
                                                className="invalid-feedback"
                                                name="picture"
                                                as="div"
                                                errors={errors}
                                            />
                                        </Col>

                                    </Row>

                                    <button className="btn btn-primary" type='submit'>
                                        Submit
                                    </button>

                                </form>

                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AddEvent;