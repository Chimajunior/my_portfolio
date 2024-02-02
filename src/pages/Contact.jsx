import React, { useState } from "react";
import SideLinks from "../components/SideLinks";
import "../styles/Contact.css";

function Contact() {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/64a77a20-8f7f-11ee-9fc3-0f51c88dc991"; // TODO - update to the correct endpoint



  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="container">
      <div className="socials">
        <SideLinks className="sideComp" />
      </div>
      <div
        className="leftSide"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <h1>Let's Talk</h1>
        <p>
          Have some big ideas and need a website? Then please reach out,
          <br />I would like to hear more about you, your project and how I can
          help!.
        </p>
      </div>
      <div
        className="rightSide"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            autoComplete="on"
            required
     
          />
          

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            autoComplete="on"
            required
          />
          

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Type your message here"
            required
          ></textarea>
          <div className="sub">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
