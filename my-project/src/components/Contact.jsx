import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="label">📧 Email:</span>
              <a href="mailto:ishitagoswami40@gmail.com">ishitagoswami40@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="label">📱 Phone:</span>
              <a href="tel:+917807778488">+91-7807778488</a>
            </div>
            <div className="info-item">
              <span className="label">💼 LinkedIn:</span>
              <a href="https://www.linkedin.com/in/ishitagoswami06" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ishitagoswami06
              </a>
            </div>
            <div className="info-item">
              <span className="label">🐙 GitHub:</span>
              <a href="https://github.com/Ishita1306" target="_blank" rel="noopener noreferrer">
                github.com/Ishita1306
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send me a message</h3>
            {submitted && <div className="success-message">✓ Message received! I'll get back to you soon.</div>}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
