import React from 'react';
import '../../../Css/Style.css';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
  };

  return (
    <div className='contact-section reveal'>
      <div className='container'>
        <div className='contact-header'>
          <h3>Get In Touch</h3>
          <p>Have questions or want to partner with us? Reach out today!</p>
        </div>

        <div className='contact-wrapper'>
          <div className='contact-info-cards'>
            <div className='info-card'>
              <ion-icon name="location-outline"></ion-icon>
              <h4>Our Location</h4>
              <p>123 Charity Lane, New York, NY 10001</p>
            </div>
            <div className='info-card'>
              <ion-icon name="mail-outline"></ion-icon>
              <h4>Email Us</h4>
              <p>support@dfdonation.org</p>
            </div>
            <div className='info-card'>
              <ion-icon name="call-outline"></ion-icon>
              <h4>Call Us</h4>
              <p>+1 (555) 000-HELP</p>
            </div>

            <div className='social-links-contact'>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
            </div>
          </div>

          <div className='contact-form-wrapper'>
            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input type='text' placeholder='Your Name' required />
              </div>
              <div className='form-group'>
                <input type='email' placeholder='Email Address' required />
              </div>
              <div className='form-group'>
                <textarea placeholder='How can we help you?' rows='5' required></textarea>
              </div>
              <button type='submit' className='submit-btn'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;