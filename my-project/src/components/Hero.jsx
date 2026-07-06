import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Ishita Goswami</h1>
            <p className="subtitle">Data Analyst | Software Developer | Problem Solver</p>
            <p className="description">
              Passionate about transforming data into actionable insights and building scalable solutions.
              Specialized in data analysis, visualization, and full-stack development.
            </p>
            <div className="hero-links">
              <a href="mailto:ishitagoswami40@gmail.com" className="btn btn-primary">Get In Touch</a>
              <a href="https://github.com/Ishita1306" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View on GitHub
              </a>
            </div>
            <div className="contact-info">
              <p>📱 +91-7807778488</p>
              <p>📧 ishitagoswami40@gmail.com</p>
              <p>💼 <a href="https://www.linkedin.com/in/ishitagoswami06" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
