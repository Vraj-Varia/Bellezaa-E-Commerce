import React, { useState } from "react";
import registerImg from "../assets/GCU.png";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const trialPoints = 6;
  const premiumMember = false;
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = firstName + ' ' + lastName

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3001/Register", {
        name,
        gender,
        contact,
        address,
        email,
        password,
        trialPoints,
        premiumMember,
      })
      .then((result) => {
        console.log("result", result);
        navigate("/premium");
      })
      .catch((err) => {
        console.log(err);
        console.log("Registration failed, please try again!!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="background">

      <div className="Register">
        <form className="left" onSubmit={handleSubmit} method="post">
          <h1>Connect With Bellezaa</h1>
          <div className="name_gender">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="other_area">
            <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather Not To Say">Rather Not To Say</option>
            </select>
            <textarea
              name="address"
              id="address"
              placeholder="Full-Address"
              onChange={(e) => setAddress(e.target.value)}
            >
            </textarea>
          </div>
          <div className="contact_area">
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="Phone"
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password_area">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button
            type="submit"
            disabled={loading || !firstName || !lastName || !contact || !email || !password}
          >
            {loading ? "Registering user  →" : "Register  →"}
          </button>
        </form>
        <div className="right">
          {/* <img src={registerImg} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
