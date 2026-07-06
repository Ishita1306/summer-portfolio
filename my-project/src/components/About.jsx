import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a Computer Science graduate from Lovely Professional University with a passion for data analysis 
            and software development. I have hands-on experience building interactive dashboards, performing exploratory 
            data analysis, and solving complex algorithmic problems.
          </p>
          <p>
            My expertise spans across multiple domains including data visualization, statistical analysis, cloud computing, 
            and full-stack development. I'm committed to leveraging technology to solve real-world problems and continuously 
            learning new tools and techniques.
          </p>
          <div className="highlights">
            <div className="highlight">
              <h3>80+</h3>
              <p>LeetCode Problems Solved</p>
            </div>
            <div className="highlight">
              <h3>5+</h3>
              <p>Professional Projects</p>
            </div>
            <div className="highlight">
              <h3>7.24</h3>
              <p>CGPA @ LPU</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
