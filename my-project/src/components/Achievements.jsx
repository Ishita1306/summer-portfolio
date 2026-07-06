import React from 'react';
import '../styles/Achievements.css';

export default function Achievements() {
  const achievements = [
    {
      title: '80+ LeetCode Problems',
      description: 'Solved 80+ problems on LeetCode demonstrating strong algorithmic and problem-solving skills',
      icon: '💻'
    },
    {
      title: 'Hackathon Participant',
      description: 'Participated in HackWithVertos 1.0 organized by Lovely Professional University',
      icon: '🏆'
    },
    {
      title: 'Published Writer',
      description: 'Received certification for poem publication in Yellow Days by Writer\'s Pocket',
      icon: '📝'
    }
  ];

  return (
    <section className="achievements">
      <div className="container">
        <h2>Achievements & Highlights</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
