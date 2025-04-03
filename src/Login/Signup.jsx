import React, { useState } from "react";
import registerImg from "../assets/GCU.png";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const trialPoints = 6;
  const premiumMember = false;
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3001/Register", {
        name,
        contact,
        address,
        email,
        password,
        trialPoints,
        premiumMember,
      })
      .then((result) => {
        console.log("result", result);
        navigate("/");
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
    <div className="Register">
      <form className="left" onSubmit={handleSubmit} method="post">
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea 
        name="address" 
        id="address" 
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
        >

        </textarea>
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
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <button
          type="submit"
          disabled={loading || !name || !contact || !email || !password}
        >
          {loading ? "Registering user  →" : "Register  →"}
        </button>
      </form>
      <div className="right">
        <img src={registerImg} alt="" />
      </div>
    </div>
  );
};

export default Signup;
