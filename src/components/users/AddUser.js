import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddUser = (props) => {
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data);
    await axios.post("http://localhost:3003/users", data);
    history.push("/Home");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Student</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              ref={register({ required: true, minLength: 4 })}
            />
            {errors.name?.type === "required" && (
              <span className="text-danger"> Name required</span>
            )}
            {errors.name?.type === "maxLength" &&
              "Your input should have atleast 4 word"}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your father_name"
              name="father_name"
              ref={register({ required: true, minLength: 4 })}
            />
            {errors.father_name?.type === "required" && (
              <span className="text-danger">Father Name required </span>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-danger"> Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-danger">Email is invalid </span>
            )}{" "}
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              ref={register({ required: true, min: 10 })}
            />{" "}
            {errors.phone?.type === "required" && (
              <span className="text-danger">Phone no is required </span>
            )}
            {errors.phone?.type === "min" && (
              <span className="text-danger">It must be 10 digit </span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="DD/MM/YY : 05/10/2020 "
              name="dob"
              ref={register({
                required: true,
                pattern: /^(?:0[1-9]|[12]\d|3[01])([/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/,
              })}
            />
            {errors.dob?.type === "required" && (
              <span className="text-danger"> date of birth is required</span>
            )}
            {errors.dob?.type === "pattern" && (
              <span className="text-danger">
                {" "}
                please enter valid date of birth
              </span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Full Address "
              name="address"
              ref={register({ required: true })}
            />
            {errors.address?.type === "required" && (
              <span className="text-danger">city is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your city "
              name="city"
              ref={register({ required: true })}
            />
            {errors.city?.type === "required" && (
              <span className="text-danger">city is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your state "
              name="state"
              ref={register({ required: true, maxLength: 50 })}
            />
            {errors.state?.type === "required" && (
              <span className="text-danger">state is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Pin "
              name="pin"
              ref={register({ required: true, maxLength: 50 })}
            />
            {errors.pin?.type === "required" && (
              <span className="text-danger">pin is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              value={new Date()}
              className="form-control form-control-lg"
              name="date"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <h5>Select Your Class</h5>

            <select
              className="form-select"
              aria-label="Default select example"
              name="classes"
              ref={register({ required: true, maxLength: 50 })}
            >
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
              <option>9th</option>
              <option>10th</option>
            </select>
            {errors.classes?.type === "required" && (
              <span className="text-danger">Please select class</span>
            )}
          </div>
          <button className="btn btn-success btn-block">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
