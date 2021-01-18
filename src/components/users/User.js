import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    father_name: "",
    city: "",
    state: "",
    classes: "",
    address: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-success" to="/Home">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Father Name: {user.father_name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone No: {user.phone}</li>
        <li className="list-group-item">Address: {user.address}</li>

        <li className="list-group-item">City: {user.city}</li>
        <li className="list-group-item">State: {user.state}</li>
        <li className="list-group-item">Class: {user.classes}</li>
        <li className="list-group-item">Pin no: {user.pin}</li>
        <li className="list-group-item">Date of enrollment: {user.date}</li>
      </ul>
    </div>
  );
};

export default User;
