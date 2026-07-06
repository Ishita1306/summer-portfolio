import React from 'react';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Netflix Content Analytics Dashboard',
      date: 'Nov 2026',
      description: 'Built an interactive Power BI dashboard analyzing Netflix content across multiple countries, transforming raw data into actionable insights on movies, TV shows, genre distribution, and release trends.',
      highlights: [
        'Designed dynamic slicers and filters to enable user-driven exploration by country, genre, and release year',
        'Applied data modelling and DAX calculations to uncover viewer preferences and trending genres'
      ],
      tags: ['Power BI', 'Data Visualization', 'DAX', 'Data Analysis'],
      link: 'https://github.com/Ishita1306'
    },
    {
      title: 'Employee Data EDA using Python',
      date: 'Apr 2025',
      description: 'Examined employee datasets to uncover patterns in pay structure, gender wage gaps, and experience versus income trends.',
      highlights: [
        'Transformed raw workforce data into structured, analysis-ready formats',
        'Revealed minority representation across job roles using statistical exploration',
        'Illustrated key workforce trends through clear, insight-driven visualizations'
      ],
      tags: ['Python', 'Pandas', 'Data Analysis', 'Statistics'],
      link: 'https://github.com/Ishita1306'
    },
    {
      title: 'Excel Sales Dashboard',
      date: 'Apr 2025',
      description: 'Developed an interactive dashboard in Microsoft Excel to perform data analysis and generate actionable insights from sales data.',
      highlights: [
        'Utilized data cleaning and transformation techniques',
        'Used Pivot Tables, Charts, and slicers to analyze trends',
        'Presented regional performance and monthly trends for data-driven decisions'
      ],
      tags: ['Excel', 'Pivot Tables', 'Data Visualization'],
      link: 'https://github.com/Ishita1306'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
