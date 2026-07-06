import React from 'react';
import '../styles/Education.css';

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      school: 'Lovely Professional University',
      location: 'Punjab, India',
      year: 'Aug 2023 - Sep 2025',
      details: 'CGPA: 7.24'
    },
    {
      degree: 'Intermediate',
      school: 'Bharti Vidya Peeth Public School',
      location: 'Baijnath, Himachal Pradesh',
      year: 'Apr 2022 - Mar 2023',
      details: 'Percentage: 76%'
    },
    {
      degree: 'Matriculation',
      school: 'Bharti Vidya Peeth Public School',
      location: 'Baijnath, Himachal Pradesh',
      year: 'Apr 2020 - Mar 2021',
      details: 'Percentage: 82.4%'
    }
  ];

  const training = [
    {
      title: 'Data Structures and Algorithms (C++)',
      organization: 'Lovely Professional University',
      date: 'Jul 2025',
      description: 'Structured training on problem-solving and algorithmic thinking, mastering arrays, linked lists, stacks, queues, trees, and graphs.'
    }
  ];

  const certifications = [
    'Oracle Cloud Infrastructure 2025',
    'Gen AI and AI tools (Infosys Springboard)',
    'Computational Theory (Infosys Springboard)',
    'Cloud Computing (NPTEL)'
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education & Training</h2>
        
        <div className="education-section">
          <h3>Education</h3>
          <div className="education-list">
            {educationData.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h4>{edu.degree}</h4>
                  <span className="year">{edu.year}</span>
                </div>
                {edu.field && <p className="field">{edu.field}</p>}
                <p className="school">{edu.school}</p>
                <p className="location">{edu.location}</p>
                <p className="details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3>Training</h3>
          <div className="training-list">
            {training.map((train, index) => (
              <div key={index} className="training-item">
                <div className="training-header">
                  <h4>{train.title}</h4>
                  <span className="date">{train.date}</span>
                </div>
                <p className="organization">{train.organization}</p>
                <p className="description">{train.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3>Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-badge">
                ✓ {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
