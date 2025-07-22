//* Registration Form Using Multiple State Variables

//todo  Tasks:

//? Set up a functional component in React.
//? Create five separate state variables (firstName, lastName, email, password, phoneNumber).
//? Create input fields for each piece of information.
//? Implement onChange handlers to update state variables.
//? Discuss the benefits and drawbacks of this approach.

//* If we only have 3-4 input than we can use this method, instead we don't use it as much.
// import "./index.css";

import { useState } from "react";

export const WrongFormHandle = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormData = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phonenumber":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    console.log(formData);
  };

  return (
    <>
      <section className="summary">
        {firstName ? (
          <p>
            Hello, my name is{" "}
            <span>
              {firstName} {lastName}
            </span>
            . My email address is <span>{email}</span> and my phone number is{" "}
            <span>{phoneNumber}</span>.
          </p>
        ) : (
          ""
        )}
      </section>
      <div className="box-container">
        <h1>Sign Up</h1>
        <p>Please fill this form to create an account.</p>
        <form onSubmit={handleFormSubmit}>
          <div className="data-box">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstName"
              className="input-elem"
              value={firstName}
              onChange={handleFormData}
            />
          </div>
          <div className="data-box">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastName"
              className="input-elem input-bg-color"
              value={lastName}
              onChange={handleFormData}
            />
          </div>
          <div className="data-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-elem input-bg-color"
              value={email}
              onChange={handleFormData}
            />
          </div>
          <div className="data-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-elem"
              value={password}
              onChange={handleFormData}
            />
          </div>
          <div className="data-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              id="phoneNumber"
              className="input-elem"
              value={phoneNumber}
              onChange={handleFormData}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
