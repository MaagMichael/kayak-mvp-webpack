import React, { useRef } from "react";

import "./Contact.css";

import contact_pic from "../images/contact_picture.png";

function Contact() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      Name: nameRef.current.value,
      Phone: phoneRef.current.value,
      Email: emailRef.current.value,
      Message: messageRef.current.value,
    });
  };

  return (
    <div className="home-contact">
      <div className="home-contact-form">
        <h1>Contact us</h1>

        <form onSubmit={handleSubmit} className="home-contact-inputs">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            // placeholder="your name"
            ref={nameRef}
            required
          />

          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            // placeholder="your phone number"
            ref={phoneRef}
          />

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            // placeholder="your email"
            ref={emailRef}
            required
          />

          <label htmlFor="message">Message *</label>
          <textarea
            type="text"
            name="message"
            placeholder="type here ..."
            ref={messageRef}
            required
          />
          <h6>* required</h6>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="home-contact-pic">
        <img src={contact_pic} alt="Contact Picture" />
      </div>
    </div>
  );
}

export default Contact;
