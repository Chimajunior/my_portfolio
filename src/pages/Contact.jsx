import React, { useState } from "react";
import SideLinks from "../components/SideLinks";
import "../styles/Contact.css";
// import { BrowserRouter as  Route } from "react-router-dom";
// import ThankYou from "./pages/ThankYou";




function Contact() {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/64a77a20-8f7f-11ee-9fc3-0f51c88dc991"; // TODO - update to the correct endpoint



  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const inputs = e.target.elements;
    const data = {};
  
    // Validate name and email fields
    const name = inputs.name.value.trim();
    const email = inputs.email.value.trim();
  
    if (!name || !email) {
      // Display error message or prevent form submission
      alert("Please fill out all required fields.");
      return;
    }
  
    data.name = name;
    data.email = email;
  
    //  Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      
      alert("Please enter a valid email address.");
      return;
    }
  
    // Include additional form fields if needed
    data.message = inputs.message.value.trim(); // Assuming message is the name of the textarea field
  
    // Make a POST request to the FORM_ENDPOINT
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json", // Specify the type of response expected
        "Content-Type": "application/json", // Specify the content type of the request body
      },
      body: JSON.stringify(data), // Convert the data object to JSON format and set it as the request body
    })
      .then((response) => {
        // Handle the response from the server
        if (!response.ok) {
          // If the response status is not in the range 200-299, throw an error
          throw new Error("Form response was not ok: " );
        }
  
         // If the response is successful (status in the range 200-299), setSubmitted to true
        setSubmitted(true);
      })
      .catch((err) => {
        // Display error message to the user
        alert("An error occurred while submitting the form. Please try again later.");
  
        // Log the error for debugging purposes
        console.error("Form submission error:", err);
      });
  };
  if (submitted) {
    window.location.href = "/ThankYou"; // Redirect to the ThankYou route

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
            // required
     
          />
          

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            autoComplete="on"
            // required
          />
          

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Type your message here"
            // required
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
