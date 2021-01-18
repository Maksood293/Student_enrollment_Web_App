import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    father_name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    date: "",
    classes: "",
  });

  const {
    name,
    father_name,
    email,
    phone,
    dob,
    address,
    city,
    state,
    classes,
    pin,
    date,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/Home");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Student</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your father_name"
              name="father_name"
              value={father_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your dob "
              name="dob"
              value={dob}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your state "
              name="state"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your city "
              name="city"
              value={city}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your state "
              name="state"
              value={state}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your state "
              name="pin"
              value={pin}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your state "
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <select
              class="form-select"
              aria-label="Default select example"
              name="classes"
              value={classes}
              onChange={(e) => onInputChange(e)}
            >
              <option>Select Your Class</option>
              <option onChange={(e) => onInputChange(e)}>5th</option>
              <option onChange={(e) => onInputChange(e)}>6th</option>
              <option onChange={(e) => onInputChange(e)}>7th</option>
              <option onChange={(e) => onInputChange(e)}>8th</option>
              <option onChange={(e) => onInputChange(e)}>9th</option>
            </select>
          </div>

          <button className="btn btn-success btn-block">Update Student</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
