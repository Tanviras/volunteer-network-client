import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router';
import { ErrorMessage } from "@hookform/error-message";
import logo from '../../logos/Group-1329.png';
import './Registration.css';
import { fakeData } from "./../fakeData/fakeData";

const Registration = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();



    const onSubmit = (values) => {//connection with server
        fetch("http://localhost:5000/addUserActivity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data) {
              history.push("/selectedActivities");
            }

          });
      };







    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {id}=useParams();
    const activity= fakeData.find((actv)=>actv.id===parseInt(id));
    const {title}=activity;

    return (
        <div>
            <div>
                <img src={logo} alt='logo' className='imgSize'></img>
            </div>

            <div className='registrationBox'>
                <h2>Register as a Volunteer</h2><br />

                <form className="" onSubmit={handleSubmit(onSubmit)}> 
               
                    <div className="form-group">
                        {/* <label htmlFor="fullName">Full Name</label> */}
                        <input
                            name="fullName"
                            placeholder="FullName"
                            defaultValue={loggedInUser.name}
                            className={`form-control`}
                            ref={register({ required: "Name is required" })}
                        />
                    </div>
                    <ErrorMessage
                        className="invalid-feedback"
                        name="fullName"
                        as="div"
                        errors={errors}
                    />
                    <div className="form-group">
                        {/* <label htmlFor="">Email</label> */}
                        <input
                            name="email"
                            placeholder="Enter email"
                            defaultValue={loggedInUser.email}
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address format",
                                },
                            })}
                        />
                        <ErrorMessage
                            className="invalid-feedback"
                            name="email"
                            as="div"
                            errors={errors}
                        />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="date">Date</label> */}
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
                    <div className="form-group">
                        {/* <label htmlFor="description">Description</label> */}
                        <input
                            name="description"
                            placeholder="description"
                            className={`form-control`}
                            ref={register({ required: "Description is required" })}
                        />
                        <ErrorMessage
                            className="invalid-feedback"
                            name="description"
                            as="div"
                            errors={errors}
                        />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="selectedActivity">Selected Activity</label> */}
                        <input
                            name="selectedActivity"
                            placeholder="selectedActivity"
                            defaultValue={title}
                            // defaultValue='Your activity'
                            className={`form-control`}
                            ref={register({ required: "Selected Activity is required" })}
                        />
                        <ErrorMessage
                            className="invalid-feedback"
                            name="selectedActivity"
                            as="div"
                            errors={errors}
                        />
                    </div>
                    <button className="btn btn-primary btn-block" type='submit'>
                        Submit
                 </button>
                </form>

            </div>
        </div>


    );
};

export default Registration;