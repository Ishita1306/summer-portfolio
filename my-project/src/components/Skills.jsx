import React from 'react';
import '../styles/Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'C']
    },
    {
      title: 'Data Analysis',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn']
    },
    {
      title: 'Databases & Big Data',
      skills: ['MySQL', 'Hadoop']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Jupyter Notebook', 'Power BI', 'Microsoft Excel', 'Vite', 'React']
    },
    {
      title: 'Soft Skills',
      skills: ['Analytical Thinking', 'Problem Solving', 'Team Player', 'Attention to Detail']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
