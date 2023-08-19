import React, { useRef } from "react";

import "./Contact.css";

import contact_pic from "../images/contact_picture.png";

function Contact() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="home-contact">
      <div className="home-contact-form">
        <h1>Contact us</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" ref={emailRef} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="home-contact-pic">
        <img src={contact_pic} alt="Contact Picture" />
      </div>
    </div>
  );
}

export default Contact;
