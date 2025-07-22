//* Using Object State with Spread Operator
//todo  Tasks:
//? Refactor the registration form to use a single object (formData) as the initial state.
//? Update input fields to use object properties.
//? Use the spread operator to update the form data state efficiently.
//? Discuss the benefits of using object state over multiple state variables.

import { useState } from "react";

export const RegistrationFormHandle = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section className="summary">
        {user.firstName ? (
          <p>
            Hello, my name is{" "}
            <span>
              {user.firstName} {user.lastName}
            </span>
            . My email address is <span>{user.email}</span> and my phone number
            is <span>{user.phoneNumber}</span>.
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
              value={user.firstname}
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
              value={user.lastname}
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
              value={user.email}
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
              value={user.password}
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
              value={user.phonenumber}
              onChange={handleFormData}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
