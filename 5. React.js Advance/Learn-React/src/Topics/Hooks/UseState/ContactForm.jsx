import { useState } from "react";

export const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="box-container">
        <h1>Contact Form</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="data-box">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="username"
              id="userName"
              required
              autoComplete="off"
              className="input-elem"
              value={user.username}
              onChange={handleUserInput}
            />
          </div>
          <div className="data-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
              className="input-elem"
              value={user.password}
              onChange={handleUserInput}
            />
          </div>
          <div className="data-box">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              autoComplete="off"
              rows="5"
              cols="15"
              className="input-elem"
              value={user.message}
              onChange={handleUserInput}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};
