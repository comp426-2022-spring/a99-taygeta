import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React from "react";

function Register() {
  const onSubmit = (e) => {
    e.preventDefault();
    const first1 = e.target.firstname.value;
    const last1 = e.target.lastname.value;
    const email1 = e.target.email.value;
    const psw1 = e.target.psw.value;
    const psw2 = e.target.pswrepeat.value;

    //check if passwords match
    if (psw1 === psw2) {
      axios
        .post("http://localhost:5555/app/email/", { email: email1 })
        .then((res) => {
          if (res.data == "email doesn't exist") {
            axios.post("http://localhost:5555/app/new/user/", {
              first: first1,
              last: last1,
              email: email1,
              psw: psw1,
            });
            axios.post("http://localhost:5555/app/log/register", {
              email: email1,
            });
            window.location.href = "./dashboard";
          } else {
            alert("This email already has an account. Log in instead.");
            window.location.href = "/";
          }
        });
    } else {
      alert("Your passwords didn't match. Try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <label htmlFor="fname">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          required
        ></input>
        <label htmlFor="lname">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          required
        ></input>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        ></input>

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></input>

        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="pswrepeat"
          required
        ></input>

        <label>
          <input
            type="checkbox"
            defaultChecked={true}
            name="remember"
            style={{ marginBottom: "15px" }}
          ></input>{" "}
          Remember me
        </label>

        <p>
          By creating an account you agree to our{" "}
          <button style={{ color: "dodgerblue" }}>Terms & Privacy</button>
        </p>

        <div className="clearfix">
          <Link to="/">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </Link>
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
