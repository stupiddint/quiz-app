import React from 'react';

const myStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function ContactForm() {
  return (
    <div style={myStyle}>
      <div>
        <h1>My Details</h1>
        <p>Name: Your Name</p>
        <p>Email: your.email@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>
    </div>
  );
}
export default ContactForm;
