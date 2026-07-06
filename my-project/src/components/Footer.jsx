import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Ishita Goswami. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/Ishita1306" target="_blank" rel="noopener noreferrer" title="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ishitagoswami06" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              LinkedIn
            </a>
            <a href="mailto:ishitagoswami40@gmail.com" title="Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
