import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import toastr from "toastr";

const Contact = () => {
  const form =useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_jr881ft",
          "template_sqmskll",
          form.current,
          "VrIZTjXdNuAKcRoUN"
        )
        .then(
          (result) => {
            console.log(result.text);
            toastr.success("Email Has Been Successfully Sent")
          },
          (error) => {
            console.log(error.text);
            toastr.error("Email Has NOT Been Sent Successfully")
          }
        );
    };
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jerryicho@gmail.com</h5>
            <a href="mailto: jerryicho@gmail.com" target="blank">
              Send an Email
            </a>
          </article>
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon" />
            <h4>Linked In</h4>
            <a href="https://www.linkedin.com/in/junkeoncho/" target="blank">
              LinkedIn
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5"></textarea>
          <button type="submit" className="btn btn-primary">
            Send A Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
