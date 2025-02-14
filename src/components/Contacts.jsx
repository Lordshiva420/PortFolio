import React, { useState } from 'react';
import { Button } from '@mantine/core';
import emailjs from 'emailjs-com';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const params = {
    to_name: 'Shiva Reddy Tangella', // Replace with recipient's name if dynamic
    from_name: formData.name, // The form input for the sender's name
    from_email: formData.email, // The form input for the sender's email
    message: formData.message // The form input for the message
  };
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    // Send form data to EmailJS
    emailjs.send('service_yhczx9q', 'template_8swrvug',params, 'Dny2MZ-_k7KJzx6Mu')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Clear the form data by resetting the state
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      }, (error) => {
        console.error('Email sending failed:', error.text);
      });
  };

  return (
    <div className="contacts-content">
  <div className="contacts-left">
    <h2>Contact Me</h2><br></br><br></br>
    <p className="footer-text">Shiva Reddy Tangella</p><br></br>
    <p className="footer-text">Email: shivareddytangella369@gmail.com</p><br></br>
    <p className="footer-text">Ph: 7075684940</p><br></br>
    <p className="footer-text">LinkedIn | GitHub | Twitter</p>
  </div>

  <div className="contacts-right">
    <h2>Let's Connect</h2>
    {/* Form to collect user input */}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="form-input"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="form-input"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        className="form-textarea"
      ></textarea>
      <Button type="submit" className="resume-button" variant="filled" color="red">
        Send
      </Button>
    </form>
  </div>
</div>

  );
}

export default Contacts;
