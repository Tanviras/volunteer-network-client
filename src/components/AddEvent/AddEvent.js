import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../logos/Group-1329.png';
import './AddEvent.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";



const AddEvent = () => {
    
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = (values) => {
        fetch("http://localhost:5000/addEvent", {
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

             <div>
                <img src={logo} alt='logo' className='imgSize'></img>
            </div>


            <div className='registrationBox'>
            <form className="" onSubmit={handleSubmit(onSubmit)}> 
               
               <div className="form-group">
                   {/* <label htmlFor="fullName">Full Name</label> */}
                   <input
                       name="fullName"
                       placeholder="Full Name"
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
                       placeholder="Date"
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
               

               <button className="btn btn-primary btn-block" type='submit'>
                   Submit
            </button>
           </form>
           </div>
        </div>
    );
};

export default AddEvent;