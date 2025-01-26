import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add access key for Web3Forms
    formData.append("access_key", "916ded4e-2c9f-4341-8200-7b56aa953417");

    // Basic form validation
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      setResult("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true); // Disable the button
    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("Failed to send message. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send a
            message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" /> <p>praneethg807@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" /> <p>+91 8341589383</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" /> <p>Tirupati, Andhra Pradesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Now"}
          </button>
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
